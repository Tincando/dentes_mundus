<template>
  <div class="termin">
    <div class="container">
      <section v-for="card in cards" :key="card.name" class="doktor">
        <h1>{{ card.name }}</h1>
        <div class="row">
          <div class="col"></div>
          <div class="col-lg-6">
            <div class="container d-flex">
              <div class="container justify-content.center">
                <img class="container profil" :src="card.url" />
              </div>
            </div>
            <hr class="featurette-divider" />
            <div class="lokacija">
              <h2>Opis:</h2>
              <h4>{{ card.description }}</h4>
            </div>
            <div class="divider" />
            <div class="container">
              <h2>Adresa:</h2>
              <h4>{{ card.adress }}</h4>
              <h2>Telefonski broj:</h2>
              <h4>{{ card.telephone }}</h4>
            </div>
            <div class="divider" />

            <hr class="featurette-divider" />
            <usluge></usluge>
            <hr class="featurette-divider" />
            <div class="divider" />
            <review></review>
            <div class="divider" />
          </div>
          <div class="col"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profil {
  height: 90%;
  width: 90%;
  border-radius: 25%;
}

.divider {
  height: 50px;
}
</style>

<script>
/*
import test123 from "@/test123";


export default {
  data: function () {
    return {
      ljudiid: this.$route.params.cardid,
    };
  },
  computed: {
    covjek() {
      return test123.ljudi.find((covjek) => covjek.id === this.ljudiid);
    },
  },
};
*/
import review from "@/components/review.vue";
import { collection, getDocs, db, query, where } from "@/firebase";
import usluge from "../components/usluge.vue";
import store from "@/store";

export default {
  components: {
    review,
    usluge,
  },

  data: function () {
    return {
      cards: [],
      id: "",
      name: "",
      doktorid: this.$route.params.cardid,
      user: store.currentUser,
    };
  },
  /*computed: {
    doktor() {
      return this.cards.filter((doktor) => doktor.id === this.doktorid);
    },
  },
*/
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
          };

          console.log("id", doc.id);
          console.log("name", data.name);
          console.log("desc", data.description);

          if (card.id == this.doktorid) {
            this.cards.push(card);
          }
        });
      });
    },
  },
};
</script>