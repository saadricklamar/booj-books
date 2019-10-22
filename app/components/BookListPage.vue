<template>
  <Page>
    <ActionBar title="Books" class="action-bar" />
    <StackLayout class="book-list-page">
      <ListView for="book in Books" @itemTap="onItemTap">
        <v-template>
            <StackLayout >
                <Label :text="book.title" />
                <Label :text="book.author" />
                <Label :text="book.publication" />
            </StackLayout>
        </v-template>
      </ListView>
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      Books: [
        {
          title: "Critique of Pure Reason",
          author: "Immanuel Kant",
          publication: 1781
        },
        {
          title: "Being & Time",
          author: "Martin Heidegger",
          publication: 1927
        },
        {
          title: "Being & Nothingness",
          author: "Martin Heidegger",
          publication: 1943
        }
      ]
    };
  }
};
</script>

<style scoped>
ListView {
  background-image: url("~/assets/images/library.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
 

}
</style>