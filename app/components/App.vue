<template>
  <Page>
    <ActionBar title="Booj's Book List" />
    <StackLayout class="home">
      <TextField class="new-book-title" hint=" Enter Book Title..." v-model="title" />
      <TextField class="new-book-author" hint=" Enter Book Author..." v-model="author" />
      <TextField
        class="new-book-publication"
        hint=" Enter Publication Date..."
        v-model="publication"
      />
      <Button class="log-in" text="Add Book" @tap="goToBookListPage" />
      <Button class="create-account" text="Create Account" />
    </StackLayout>
  </Page>
</template>

<script >
import BookListPage from "./BookListPage";

export default {
  data() {
    return {
      books: [],
      error: "",
      title: "",
      author: "",
      publication: ""
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    goToBookListPage() {
      if (this.title === "" || this.author === "" || this.publication === "") {
        alert("You must enter a title, author, and publication date");
      } else {
        let newBook = {
          title: this.title,
          author: this.author,
          publication: this.publication
        };
        this.books.push(newBook);
        this.addBook(newBook);
        this.navigate();
      }
    },
    navigate() {
      this.$navigateTo(BookListPage, {
        props: {
          books: this.books
        }
      });
      this.title = "";
      this.author = "";
      this.publication = "";
    },
    addBook(newBook) {
      fetch("http://127.0.0.1:8000/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newBook.title,
          author: newBook.author,
          publication: newBook.publication
        })
      })
        .then(response => console.log(response.json()))
        .catch(error => console.log(error));
    },
    fetchBooks() {
      fetch("http://127.0.0.1:8000/api/book")
        .then(response => response.json())
        .then(results => (this.books = results.data))
        .catch(error => (this.error = error));
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.home {
  background-image: url("~/assets/images/library.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 1000;
}

.new-book-title,
.new-book-author,
.new-book-publication {
  background-color: white;
  border: 2px solid black;
  color: black;
  height: 8%;
  width: 70%;
  padding-left: 10;
}

.new-book-title {
  margin: 10% auto 2% auto;
}

.new-book-author {
  margin: 0 auto 2% auto;
}

.new-book-publication {
  margin: 0 auto 10% auto;
}

.log-in {
  background: #53ba82;
  color: white;
  font-size: 20px;
  font-weight: bold;
  height: 8%;
  width: 70%;
}

.create-account {
  color: white;
  font-weight: bold;
  margin-top: 5%;
}
</style>
