<template>
  <Page>
    <ActionBar title="Books" class="action-bar" />
    <StackLayout class="book-list-page">
      <ListView for="book in Books" @itemTap="goToBookDetails($event)">
        <v-template>
          <StackLayout>
            <Label :text="book.title" />
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
          author: "Immanuel Kant",
          publication: 1781,
          id: 0
        },
        {
          title: "Being & Time",
          author: "Martin Heidegger",
          publication: 1927,
          id: 1
        },
        {
          title: "Being & Nothingness",
          author: "Martin Heidegger",
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
</style>