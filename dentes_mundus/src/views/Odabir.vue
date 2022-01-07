<template>
  <div class="odabiri">
    <section class="jumbotron text-center" style="background-color: white">
      <div class="container">
        <h1 class="jumbotron-heading">DOKTORI</h1>
      </div>
    </section>
    <div class="b-example-divider" />
    <div class="container odabir">
      <div class="row">
        <karticastom v-for="card in cards" :info="card" :key="card.id" />
      </div>
    </div>
    <div class="b-example-divider"></div>
  </div>
</template>
<style lang="scss" scoped>
.odabiri {
  background-color: rgb(243, 243, 243);
}

.odabir {
  padding: 50px;
}
.jumbotron {
  padding: 50px;
  background-image: url("~@/assets/zivot.jpg");
  color: rgb(0, 0, 0);
}
</style>

<script>
import karticastom from "@/components/karticastom.vue";
import { collection, getDocs, db } from "@/firebase";

export default {
  name: "odabir",
  components: {
    karticastom,
  },

  data: function () {
    return {
      cards: [], // postavljamo na prazno, punit ćemo iz Firebasea
      name: "",
      newImageUrl: "",
      newImageDescription: "",
    };
  },

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
            prosjek: data.prosjek,
          };

          console.log("time", card.time);
          console.log("id", doc.id);
          console.log("name", data.name);
          this.cards.push(card);
        });
      });
    },
  },
};
</script>
