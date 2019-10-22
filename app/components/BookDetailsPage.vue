<template>
  <Page class="page">
    <ActionBar title="Details" class="action-bar" />
    <StackLayout class="details">
      <ListView for="book in BookToDisplay">
        <v-template>
          <StackLayout>
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
    return {};
  },
  props: ["BookToDisplay"]
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