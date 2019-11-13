<template>
  <Page>
    <ActionBar title="Booj's Book List" />
    <StackLayout class="home">
      <TextField class="user" hint=" Enter UserName..." v-model="userName" />
      <TextField class="password" hint=" Enter Password..." v-model="passWord" />
      <Button class="log-in" text="Log In" @tap="goToBookListPage" />
      <Button class="create-account" text="Create Account" @tap="goToCreateAccountPage" />
    </StackLayout>
  </Page>
</template>

<script >
import BookListPage from "./BookListPage";
import CreateAccountPage from "./CreateAccountPage";

export default {
  data() {
    return {
      books: [],
      error: "",
      userName: "",
      passWord: "",
    };
  },
  mounted() {
    this.fetchBooks();
  },
  methods: {
    goToCreateAccountPage() {
      this.$navigateTo(CreateAccountPage);
    },
    goToBookListPage() {
      this.navigate(); 
    },
    navigate() {
      this.$navigateTo(BookListPage, {
        props: {
          books: this.books
        }
      });
      this.userName = "";
      this.passWord = "";
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

.user,
.password {
  background-color: white;
  border: 2px solid black;
  color: black;
  height: 8%;
  width: 70%;
  padding-left: 10;
}

.user {
  margin: 25% auto 2% auto;
}

.password {
  margin: 0 auto 2% auto;
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
