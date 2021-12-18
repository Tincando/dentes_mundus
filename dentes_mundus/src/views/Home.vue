<template>
  <div class="home">
    <div class="b-example-divider"></div>
    <div class="d-flex pocetna">
      <div class="container-uvod" v-if="store.Userrole == 'doc'">
        <h1>Pogledaj naručene pacijente?</h1>
        <router-link
          :to="{
            name: 'Profil',
            params: { userid: store.currentUserid },
          }"
          class="btn btn-success btn-lg"
        >
          Profil
        </router-link>
      </div>
      <div class="container-uvod" v-else>
        <h1>Odaberi svoj termin ?</h1>
        <router-link to="/about" class="btn btn-success btn-lg">
          Klikni ovdje
        </router-link>
      </div>
      <img
        class="img-fluid"
        src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        width="100%"
        height="70%"
      />
    </div>
    <div class="b-example-divider"></div>
    <div class="container">
      <h1>Ocjene najboljih stomatologa</h1>
    </div>

    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <top3 v-for="card in cards" :info="card" :key="card.id" />
      </div>
      <hr class="featurette-divider" />
      <div class="container" id="onama">
        <h1>O Nama</h1>
        <p>skupina zaljubljenika u stomatolgiju</p>
        <p>pojačajte svoj brand</p>
        <p>zašto ne</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import top3 from "@/components/top3.vue";
import { collection, getDocs, db } from "@/firebase";
import store from "@/store";

export default {
  name: "Home",
  components: {
    HelloWorld,
    top3,
  },
  data: function () {
    return {
      store,
      cards: [],
    };
  },
  mounted() {
    this.getreview();
    this.test();
    //this.getbiggest();
  },

  methods: {
    getreview() {
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
            prosjek: data.prosjek,
          };

          this.cards.unshift(card);
        });
        this.cards.sort(function (a, b) {
          return b.prosjek - a.prosjek;
        });
        this.cards.length = 3;
      });
      //console.log(this.reviews);
    },
    getbiggest() {
      this.reviews.sort(function (a, b) {
        return a.ocjena - b.ocjena;
      });
    },
  },
};
</script>
