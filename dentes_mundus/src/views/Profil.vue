<template>
  <div>
    <div class="b-example-divider"></div>
    <div class="container main">
      <div class="container" v-for="card in cards" :key="card.id">
        <h1>Moj profil</h1>
        <h3>id: {{ card.id }}</h3>
        <h3>Ime: {{ card.name }}</h3>
        <div class="container justify-content.center">
          <img class="container profil" :src="card.url" />
        </div>

        <h3>Broj telefona: {{ card.telephone }}</h3>
        <h3>O meni: {{ card.description }}</h3>
      </div>
    </div>
    <div class="container termini" v-for="rez in rezerve" :key="rez.docid">
      <h2>Naručeni:</h2>
      <h1>ime: {{ rez.name }}</h1>
      <h2>odabrane usluge : {{ rez.usluge }}</h2>
      <h3>dan : {{ rez.dan }}</h3>
      <h3>Vrijeme termina : {{ rez.vrijeme }}</h3>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main {
  border: solid black;
  padding: 50px 0px;
}

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
      rezerve: [],
    };
  },
  mounted() {
    this.getPosts();
    this.getrezervacije();
  },
  methods: {
    getPosts() {
      let cards = [];

      console.log("firebase dohvat...");

      const test = getDocs(collection(db, "doktori"));

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
    getrezervacije() {
      let rez = [];

      console.log("firebase dohvat...");

      const test = getDocs(collection(db, "rezervacije"));

      test.then((results) => {
        results.forEach((doc) => {
          let id = doc.id;
          let data = doc.data();

          let card = {
            name: data.name,
            dan: data.dani,
            time: data.posted_at,
            vrijeme: data.vrijeme,
            usluge: data.usluge,
            docid: data.docid,
          };

          console.log("id", doc.id);
          console.log("name", data.name);
          console.log("desc", data.description);

          if (store.docid == card.docid) {
            this.rezerve.push(card);
          }
        });
      });
    },
  },
};
</script>