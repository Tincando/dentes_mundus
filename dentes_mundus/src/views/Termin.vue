<template>
  <div class="termin">
    <div class="container">
      <section v-for="card in cards" class="doktor">
        <h1>{{ card.name }}</h1>
        <div class="row">
          <div class="col"></div>
          <div class="col-lg-6">
            <div class="container d-flex">
              <div class="container justify-content.center">
                <img class="container" :src="card.url" />
              </div>
            </div>
            <hr class="featurette-divider" />
            <div class="lokacija">
              <h2>{{ card.description }}</h2>
            </div>
            <div class="container">
              <h2>Adresa: {{ card.description }}</h2>
              <h2>Telefonski broj: {{ card.id }}</h2>
            </div>
            <div class="divider" />
            <div class="dropdown">
              <button
                class="btn btn-lg btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Izaberi Termin
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profil {
  height: 350px;
  width: 350px;
  border-radius: 25%;
}

.divider {
  height: 50px;
}

.slika_lok {
  height: 150px;
  width: 100%;
  background-color: rgb(163, 165, 240);
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

import { collection, getDocs, db, query, where } from "@/firebase";

export default {
  data: function () {
    return {
      cards: [],
      id: "",
      name: "",
      doktorid: this.$route.params.cardid,
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