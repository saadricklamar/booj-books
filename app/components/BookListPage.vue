<template>
  <Page class="book-list-page">
    <ActionBar title="Books" class="action-bar" />
    <StackLayout></StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.book-list-page {
  background-image: url("~/assets/images/library.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 1000;
}
</style>