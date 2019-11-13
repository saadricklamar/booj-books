<template>
  <Page class="page">
    <ActionBar title="Create Account" class="action-bar" />
    <StackLayout class="home">
      <TextField class="user" hint=" Enter UserName..." />
      <TextField class="password" hint=" Enter Password..." />
      <TextField class="password" hint=" Enter Password Again..." />
      <Button class="create-account" text="Create Account" />
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
.user {
  margin-top: 19%;
}

.create-account {
  background: #53ba82;
  color: white;
  font-size: 20px;
  font-weight: bold;
  height: 8%;
  width: 70%;
}
</style>
