<template>
  <div class="about">
    <section class="jumbotron text-center" style="height: 150px">
      <div class="container">
        <h1 class="jumbotron-heading">Odaberi svog Stomatologa</h1>
      </div>
    </section>
    <div class="b-example-divider" />
    <div class="container">
      <div class="row">
        <karticastom class="col-sm-4" v-for="card in cards" :info="card" />
      </div>
    </div>
    <div class="b-example-divider"></div>
  </div>
</template>


<script>
import karticastom from "@/components/karticastom.vue";
import { collection, getDocs, db } from "@/firebase";

export default {
  name: "about",
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
          this.cards.push(card);
        });
      });
    },
  },
};
</script>
