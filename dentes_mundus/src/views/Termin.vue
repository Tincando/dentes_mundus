<template>
  <div class="termin">
    <div class="container">
      <section class="doktor">
        <h1>{{ doktor.id }}</h1>
        <div class="row">
          <div class="col"></div>
          <div class="col-lg-6">
            <div class="profil">
              <img class="card-imgtop" />
              <p style="text-align: center"></p>
            </div>
            <hr class="featurette-divider" />
            <div class="lokacija">
              <h2>Stavit cemo ime lokacije i ispod sliku lokacije</h2>
              <p>{{ doktor.firstName }}</p>
            </div>
            <div class="slika_lok"></div>
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
      cards: [], // postavljamo na prazno, punit ćemo iz Firebasea
      name: "",
      newImageUrl: "",
      newImageDescription: "",
      doktorid: this.$route.params.cardid,
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
          };

          console.log("id", doc.id);
          console.log("name", data.name);

          cards.push(card);
        });
      });
      console.log(cards);
    },
  },
  computed: {
    doktor() {
      return cards.card.find((doktor) => doktor.id === this.doktorid);
    },
  },
};
</script>