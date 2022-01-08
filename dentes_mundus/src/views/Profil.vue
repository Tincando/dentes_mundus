<template>
  <div class="body">
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
      <div class="container naslov">
        <h2 style="color: rgb(0, 0, 0)">NARUČENI PACIJENTI</h2>
      </div>
      <div class="container nema" v-if="!this.rezerve.length">
        <h1>Trenutno nema naručenih pacijenata</h1>
      </div>
      <div class="container termini" v-for="rez in rezerve" :key="rez.id">
        <h2>Naručeni:</h2>
        <h1>{{ rez.name }}</h1>
        <h2>Za {{ rez.usluge }}</h2>
        <h3>U {{ rez.dan }} u {{ rez.vrijeme }}</h3>
        <button @click="brisi(rez.id)" class="btn btn-primary btn-lg">
          Obavljeno
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.nema {
  padding: 20px;
}

.naslov {
  padding: 20px;
}

.pacijenti {
  background-color: rgb(243, 243, 243);
  border-top: solid rgb(219, 215, 215);
  color: rgb(85, 75, 63);
  text-decoration: bold;
}

.id {
  padding: 30px;

  text-align: center;
  font-family: Helvetica;
}
.id h1 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  text-transform: uppercase;
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
.main {
  border: solid black;
  padding: 50px 0px;
}

.termini {
  border: double black;
  padding: 30px;
  border-radius: 5%;
  background-color: white;
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
import store from "@/store.js";
import {
  collection,
  getDocs,
  db,
  doc,
  deleteDoc,
  getDatabase,
  ref,
  where,
  get,
  query,
  onSnapshot,
} from "@/firebase";

export default {
  name: "Profil",

  data: function () {
    return {
      store,
      cards: [],
      pacijenti: [],
      rezerve: [],
      reviews: [],
    };
  },

  mounted() {
    console.log("firebase dohvat...");

    const q = query(collection(db, "rezervacije"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let rezerve = [];
      querySnapshot.forEach((doc) => {
        let id = doc.id;
        let data = doc.data();

        let card = {
          id: doc.id,
          name: data.name,
          dan: data.dani,
          time: data.posted_at,
          vrijeme: data.vrijeme,
          usluge: data.usluge,
          docid: data.docid,
        };
        if (store.docid == card.docid) {
          rezerve.push(card);
        }
      });
      this.rezerve = rezerve;
    });
    this.getPosts();
    //this.getrezervacije();
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
    /* getrezervacije() {
      let rez = [];

      console.log("firebase dohvat...");

      const test = getDocs(collection(db, "rezervacije"));

      test.then((results) => {
        results.forEach((doc) => {
          let id = doc.id;
          let data = doc.data();

          let card = {
            id: doc.id,
            name: data.name,
            dan: data.dani,
            time: data.posted_at,
            vrijeme: data.vrijeme,
            usluge: data.usluge.join(" i "),
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
    */
    brisi(id) {
      console.log(id);

      const test = doc(db, "rezervacije", id);

      deleteDoc(test);
    },
  },

  getrezervacije() {
    console.log("firebase dohvat...");

    const q = query(collection(db, "rezervacije"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let rezerve = [];
      querySnapshot.forEach((doc) => {
        let id = doc.id;
        let data = doc.data();

        let card = {
          id: doc.id,
          name: data.name,
          dan: data.dani,
          time: data.posted_at,
          vrijeme: data.vrijeme,
          usluge: data.usluge.join(" i "),
          docid: data.docid,
        };

        rezerve.push(card);
      });
      this.rezerve = rezerve;
    });
  },
};
</script>