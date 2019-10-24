<template>
  <Page>
    <ActionBar title="Booj's Book List" />
    <StackLayout class="home">
      <TextField class="new-book-title" hint=" Enter Book Title..." />
      <TextField class="new-book-author" hint=" Enter Book Author..." />
      <TextField class="new-book-publication" hint=" Enter Publication Date..." />
      <Button class="log-in" text="Add Book" @tap="goToBookListPage" />
      <Button class="create-account" text="Create Account" />
    </StackLayout>
  </Page>
</template>

<script >
import BookListPage from "./BookListPage";
import * as https from "https";

export default {
  data() {
    return {
      books: [],
      error: ""
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    goToBookListPage() {
      this.$navigateTo(BookListPage, {
        props: {
          books: this.books
        }
      });
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
