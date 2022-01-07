<template>
  <div class="home">
    <div class="b-example-divider"></div>
    <div class="d-flex pocetna">
      <div class="container-uvod" v-if="store.Userrole == 'doc'">
        <h1>POGLEDAJ NARUČENE PACIJENTE?</h1>

        <router-link
          class="btn btn-success btn-lg"
          :to="{
            name: 'Profil',
            params: { userid: store.currentUserid },
          }"
        >
          Profil
        </router-link>
      </div>
      <div class="container-uvod" v-else>
        <h1>ODABERI SVOJ TERMIN?</h1>
        <router-link to="/odabir" class="btn btn-lg">
          Klikni ovdje
        </router-link>
      </div>
      <img class="img-fluid" src="@/assets/backtest3.jpg" width="100%" />
    </div>
    <div class="b-example-divider"></div>
    <div class="container">
      <div class="divider"></div>
      <h1 style="color: rgb(96, 193, 231)">Ocjene najboljih stomatologa</h1>
      <div class="divider"></div>
    </div>

    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <top3 v-for="card in cards" :info="card" :key="card.id" />
      </div>
    </div>

    <hr class="featurette-divider" />
    <div class="container" id="onama">
      <h1>O Nama</h1>
      <p>skupina zaljubljenika u stomatolgiju</p>
      <p>pojačajte svoj brand</p>
      <p>zašto ne</p>
    </div>
    <div class="b-example-divider"></div>
  </div>
</template>
<style lang="scss" scoped>
.container-uvod h1 {
  color: rgb(39, 111, 139);
  text-shadow: 2px 2px 4px #000000;
  font-size: 3vw;
}

.divider {
  height: 60px;
}

.btn {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.btn:hover {
  box-shadow: 0 4px 8px 0 rgb(39, 111, 139), 0 6px 20px 0 rgb(67, 166, 206);
}

.btn {
  background-color: rgb(96, 193, 231);
  color: white;
  font-size: 2vw;
  border: none;
}
</style>

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
            prosjek: data.prosjek,
          };

          this.cards.unshift(card);
        });
        this.cards = this.cards.sort(function (a, b) {
          return b.prosjek - a.prosjek;
        });
        this.cards = this.cards.slice(0, 3);
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
