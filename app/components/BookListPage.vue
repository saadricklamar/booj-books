<template>
  <Page>
    <ActionBar title="Books" class="action-bar" />
    <StackLayout class="book-list-page">
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
          title: "Critique of Pure Reason",
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
 background: #FAFAF5;
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
</style>