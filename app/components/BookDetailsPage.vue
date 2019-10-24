<template>
  <Page class="page">
    <ActionBar title="Details" class="action-bar" />
    <StackLayout class="details">
      <ListView for="book in BookToDisplay">
        <v-template>
          <StackLayout class="book">
            <Label class="title" :text="book.title" />
            <Label class="author" :text="'by ' + book.author" />
            <Label class="publication" :text="'published in ' + book.publication" />
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

.book {
  height: 300;
  width: 200;
  color: white;
  background: #53ba82;
  margin: 125 auto;
  border-radius: 5;
  padding: 0;
}

.title,
.author,
.publication {
  text-align: center;
  font-weight: bold;
}

.title {
  font-style: italic;
  margin-top: 30;
}

.author {
  margin-top: 70;
}

.publication {
  margin-top: 100;
}
</style>