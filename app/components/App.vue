<template>
  <Page>
    <ActionBar title="Booj's Book List" />
    <StackLayout class="home">
      <TextField class="username" hint=" UserName..." />
      <TextField class="password" hint=" Password..." />
      <Button class="log-in" text="Log In" />
      <Button class="create-account" text="Create Account" />
    </StackLayout>
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

.home {
  background-image: url("~/assets/images/library.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 1000;
}

.username,
.password {
  background-color: white;
  border: 2px solid black;
  color: black;
  height: 8%;
  width: 70%;
}

.username {
  margin: 20% auto 2% auto;
}

.password {
  margin: 0 auto 2% auto;
}

.log-in {
  background: #53ba82;
  color: white;
  font-size: 20px;
  height: 8%;
  width: 70%;
}

.create-account {
  color: white;
  margin-top: 5%;
}
</style>
