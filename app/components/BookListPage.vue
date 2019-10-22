<template>
  <Page>
    <ActionBar title="Books" class="action-bar" />
    <StackLayout>
      <FlexboxLayout class="sort-buttons">
        <Button class="alpha" text="Alphabetize by Title" @tap="alphabetizeByTitle" />
        <Button class="alpha" text="Alphabetize by Author" @tap="alphabetizeByAuthor" />
      </FlexboxLayout>
      <ListView for="book in Books" @itemTap="goToBookDetails($event)">
        <v-template>
          <StackLayout class="book-card">
            <Label :text="book.title" />
            <Label class="by" :text="book.author" editable="false" />
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
      Books: [
        {
          title: "The Critique of Pure Reason",
          author: "By Immanuel Kant",
          publication: 1781,
          id: 0
        },
        {
          title: "Being & Time",
          author: "By Martin Heidegger",
          publication: 1927,
          id: 1
        },
        {
          title: "Being & Nothingness",
          author: "By Jean Paul Sartre",
          publication: 1943,
          id: 2
        },
        {
          title: "Fear & Trembling",
          author: "By Soren Keirkegaard",
          publication: 1843,
          id: 3
        }
      ]
    };
  },
  methods: {
    goToBookDetails(event) {
      let result = this.Books.filter(book => {
        return book.id === event.index;
      });
      this.$navigateTo(BookDetailsPage, {
        props: {
          BookToDisplay: result
        }
      });
    },
    alphabetizeByTitle() {
      let results = this.Books.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      this.Books = results;
    },
    alphabetizeByAuthor() {}
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