<template>
  <div>
    <div class="b-example-divider"></div>
    <div class="container" v-for="card in cards" :key="card.id">
      <h1>Moj profil</h1>
      <h3>Ime: {{ card.name }}</h3>
      <div class="container justify-content.center">
        <img class="container profil" :src="card.url" />
      </div>

      <h3>Broj telefona: {{ card.telephone }}</h3>
      <h3>O meni: {{ card.description }}</h3>
      <div class="container termini">
        <h2>Naručeni:</h2>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.profil {
  margin: auto;
  max-height: 400px;
  max-width: 360px;

  border-radius: 50%;
}
</style>


<script>
import store from "@/store.js";
import { collection, getDocs, db } from "@/firebase";

export default {
  name: "Profil",

  data: function () {
    return {
      store,
      cards: [],
      pacijenti: [],
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      let cards = [];

      console.log("firebase dohvat...");

      const test = getDocs(collection(db, "posts"));

      test.then((results) => {
        results.forEach((doc) => {
          let id = doc.id;
          let data = doc.data();

          let card = {
            id: doc.id,
            name: data.name,
            url: data.url,
            time: data.posted_at,
            description: data.description,
            telephone: data.telephone,
            adress: data.adress,
            role: data.role,
            email: data.email,
          };

          console.log("id", doc.id);
          console.log("name", data.name);
          console.log("desc", data.description);

          if (store.currentUser == card.email) {
            this.cards.push(card);
          }
        });
      });
    },
    getPosts() {
      let cards = [];

      console.log("firebase dohvat...");

      const test = getDocs(collection(db, "posts"));

      test.then((results) => {
        results.forEach((doc) => {
          let id = doc.id;
          let data = doc.data();

          let card = {
            id: doc.id,
            name: data.name,
            url: data.url,
            time: data.posted_at,
            description: data.description,
            telephone: data.telephone,
            adress: data.adress,
            role: data.role,
            email: data.email,
          };

          console.log("id", doc.id);
          console.log("name", data.name);
          console.log("desc", data.description);

          if (store.currentUser == card.email) {
            this.cards.push(card);
          }
        });
      });
    },
  },
};
</script>