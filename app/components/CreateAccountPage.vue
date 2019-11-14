<template>
  <Page class="page">
    <ActionBar title="Sign Up" class="action-bar" />
    <StackLayout class="home">
      <TextField class="user" hint=" Enter UserName..." v-model="userName" />
      <TextField
        class="password"
        hint=" Enter Password..."
        v-model="password"
      />
      <TextField
        class="password"
        hint=" Enter Password Again..."
        v-model="verifyPassword"
      />
      <Button
        class="create-account"
        text="Create Account"
        @tap="createNewUser"
      />
    </StackLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      verifyPassword: ""
    };
  },
  props: ["users"],
  methods: {
    createNewUser() {
      let newUser = {
        username: this.userName,
        password: this.password,
        verifyPassword: this.verifyPassword
      };
      this.users.push(newUser);
      this.userName = "";
      this.password = "";
      this.verifyPassword = "";
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}
.home {
  background-image: url("~/assets/images/CreateAccountPage.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 1000;
}
.user {
  margin-top: 25%;
}

.create-account {
  background: #53ba82;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  height: 8%;
  width: 70%;
  margin-top: 2%;
}
</style>
