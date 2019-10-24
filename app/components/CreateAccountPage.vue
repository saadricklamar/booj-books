<template>
  <Page class="page">
    <ActionBar title="Create Account" class="action-bar" />
    <StackLayout class="home">
      <Label class="feature" text="Feature coming soon..." />
    </StackLayout>
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
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.page {
  background: #53ba82;
}

.feature {
  color: black;
  font-weight: bold;
  text-align: center;
  margin: 200 auto;
}
</style>