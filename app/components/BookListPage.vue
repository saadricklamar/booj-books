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
          </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
import BookDetailsPage from "./BookDetailsPage";
export default {
  data() {
    return {
      isAlphabetized: false
    };
  },
  props: ["books"],
  methods: {
    goToBookDetails(event) {
      let result = this.books.filter(book => {
        return book.id === event.index;
      });
      this.$navigateTo(BookDetailsPage, {
        props: {
          BookToDisplay: result
        }
      });
    },
    alphabetizeByTitle() {
      if (this.isAlphabetized === false) {
        let alphabetizedByTitle = this.books.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        this.books = alphabetizedByTitle;
        this.isAlphabetized = true;
      } else {
        let randomShuffle = this.books.sort(function() {
          return 0.5 - Math.random();
        });
        this.books = randomShuffle;
        this.isAlphabetized = false;
      }
    },
    alphabetizeByAuthor() {
      if (this.isAlphabetized === false) {
        let alphabetizedByAuthor = this.books.sort((a, b) => {
          return a.author.localeCompare(b.author);
        });
        this.books = alphabetizedByAuthor;
        this.isAlphabetized = true;
      } else {
        let randomShuffle = this.books.sort(function() {
          return 0.5 - Math.random();
        });
        this.books = randomShuffle;
        this.isAlphabetized = false;
      }
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
  height: 80;
  margin: 5;
  padding-left: 25%;
  padding-top: 5%;
}

.by {
  font-size: 12;
  height: 20;
}

.alpha {
  color: white;
  width: 300;
}

.sort-buttons {
  background-color: #53ba82;
}
</style>