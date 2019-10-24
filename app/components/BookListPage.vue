<template>
  <Page>
    <ActionBar title="Books" class="action-bar" />
    <StackLayout>
      <FlexboxLayout class="sort-buttons">
        <Button class="alpha" text="Alphabetize by Title" @tap="alphabetizeByTitle" />
        <Button class="alpha" text="Alphabetize by Author" @tap="alphabetizeByAuthor" />
      </FlexboxLayout>
      <ListView for="book in books" @itemTap="goToBookDetails($event)">
        <v-template>
          <StackLayout class="book-card">
            <Label :text="book.title" />
            <Label class="by" :text="'by ' + book.author " editable="false" />
            <Button class="delete" text="-" @tap="deleteBook(book.title)" />
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import BookDetailsPage from "./BookDetailsPage";
import * as http from "http";

export default {
  data() {
    return {};
  },
  props: ["books"],
  methods: {
    goToBookDetails(event) {
      let result = this.books.filter(book => {
        return this.books.indexOf(book) === event.index;
      });
      this.$navigateTo(BookDetailsPage, {
        props: {
          BookToDisplay: result
        }
      });
    },
    alphabetizeByTitle() {
      let alphabetizedByTitle = this.books.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      this.books = alphabetizedByTitle;
    },
    alphabetizeByAuthor() {
      let alphabetizedByAuthor = this.books.sort((a, b) => {
        return a.author.localeCompare(b.author);
      });
      this.books = alphabetizedByAuthor;
    },
    deleteBook(title) {
      let bookToDelete = this.books.filter(book => {
        return book.title === title;
      });
      let remainingBooks = this.books.filter(book => {
        return book.title !== title;
      });
      this.books = remainingBooks;
      fetch(`http://127.0.0.1:8000/api/book/${bookToDelete[0].id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(res => console.log(res));
    }
  }
};
</script>

<style scoped>
ListView {
  background-image: url("~/assets/images/library.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 1000;
}

.book-card {
  background: #fafaf5;
  color: #53ba82;
  font-size: 24;
  font-weight: bold;
  height: 90;
  margin: 5;
  padding-left: 25%;
  padding-top: 5%;
}

.by {
  font-size: 12;
  height: 20;
  padding-bottom: 10;
}

.alpha {
  color: white;
  width: 300;
}

.sort-buttons {
  background-color: #53ba82;
}

.delete {
  text-align: right;
  padding-right: 20;
  font-size: 30;
  color: black;
}
</style>