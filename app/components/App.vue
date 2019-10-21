<template>
  <Page>
    <ActionBar title="Booj's Book List" />
    <StackLayout class="background"></StackLayout>
  </Page>
</template>

<script >
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.background {
  background-image: url("~/assets/images/library.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 1000;
}
</style>
