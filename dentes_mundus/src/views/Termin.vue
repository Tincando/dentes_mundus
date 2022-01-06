<template>
  <div class="termin">
    <div class="b-example-divider"></div>
    <div class="container-fluid back">
      <div class="container-fluid test" v-for="card in cards" :key="card.id">
        <img class="profilo" :src="card.url" />
      </div>
    </div>
    <div class="container id" v-for="card in cards" :key="card.id">
      <div class="container">
        <h1>{{ card.name }}</h1>
        <h3>{{ card.description }}</h3>
      </div>
      <div class="container d-flex justify-content-between info">
        <div class="p2">
          <img src="@/assets/mapa.png" width="20px" />
          <h4>{{ card.adress }}</h4>
        </div>
        <div class="p2">
          <img src="@/assets/email.png" width="20px" />
          <h4>{{ card.email }}</h4>
        </div>
        <div class="p2">
          <img src="@/assets/phone.png" width="20px" />
          <h4>{{ card.telephone }}</h4>
        </div>
      </div>
    </div>
    <div class="b-example-divider"></div>
    <div class="container-fluid pacijenti">
      <div class="container">
        <div class="container rez">
          <usluge></usluge>
        </div>
        <hr class="featurette-divider" />
        <div class="rev">
          <review></review>
        </div>
        <div class="divider" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rev {
  padding: 50px 250px;
}

.rez {
  padding: 80px 150px;
}

.id h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-transform: uppercase;
}
.pacijenti {
  background-color: rgb(243, 243, 243);
  border-top: solid rgb(219, 215, 215);
  color: rgb(85, 75, 63);
  text-decoration: bold;
}
.profil {
  height: 90%;
  width: 90%;
  border-radius: 25%;
}

.divider {
  height: 50px;
}

.back {
  background-image: url("~@/assets/back-test2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 20vw;
  width: 100%;
  margin: 0;
  padding: 0;
}
.profil {
  margin: auto;
  max-height: 400px;
  max-width: 360px;
  position: relative;
  float: left;
  margin-left: 100px;
  border-radius: 50%;
  border: 2px solid rgb(177, 237, 255);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.profilo {
  position: relative;
  float: left;
  margin-left: 10%;
  border-radius: 50%;
  height: 15vw;
  width: 15vw;
  margin-top: 14%;
  min-width: 70px;
  min-height: 70px;
  border: 10px solid rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.test {
  padding: 0;
  margin: 0;
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
            email: data.email,
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