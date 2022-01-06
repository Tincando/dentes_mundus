<template>
  <div class="container">
    <h2>Ostavi mišljenje:</h2>
    <div class="divider"></div>
    <div class="container review" v-for="review in reviews" :key="review.code">
      <h4 class="uppercase">Customer Review</h4>
      <h5>Ocjena: {{ review.ocjena }}</h5>
      <div class="reviews">
        <p>{{ review.content }}</p>
        <div class="row">
          <div class="columns medium-7">
            <h5>{{ review.reviewer }}</h5>
          </div>
          <div class="columns medium-5">
            <h5 class="pull-right">{{ review.time }}</h5>
          </div>
        </div>
      </div>
    </div>
    <hr class="featurette-divider" />
    <form @submit.prevent="postNewreview">
      <div class="form-group">
        <label for="customRange2" class="form-label">Ocjena</label>
        <p>{{ ocjena }}</p>
        <input
          v-model.number="ocjena"
          type="range"
          class="form-range"
          min="1"
          max="5"
          id="customRange2"
        />

        <div class="mb-3">
          <label for="content" class="form-label">
            Komentar
            <textarea
              v-model="content"
              id="content"
              class="form-control"
              rows="3"
              cols="100"
            ></textarea>
          </label>
        </div>
        <div class="mb-3">
          <label for="reviewer">
            Ime
            <input
              id="reviewer"
              class="form-control"
              v-model="reviewer"
              type="text"
            />
          </label>
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 23px;
  height: 24px;
  border: 0;
  background: url("~@/assets/real-logo.png");

  cursor: pointer;
}

.divider {
  height: 25px;
}

.container {
  padding: 0 20px;
}
.review {
  border: 1px solid rgb(0, 0, 0);
  font-size: 0.95em;
  padding: 10px;
  margin: 15px 0 5px 0;
  background-color: white;
}
.review h5 {
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 0.7em;
}
.pull-right {
  float: right;
}
.review-form {
  margin-top: 30px;
  border-top: 1px solid #ddd;
  padding: 15px 0 0 0;
}
</style>

<script>
import {
  addDoc,
  db,
  getDocs,
  collection,
  query,
  setDoc,
  doc,
  where,
  onSnapshot,
} from "@/firebase";

export default {
  name: "review",

  data: function () {
    return {
      reviews: [],
      content: "",
      reviewer: "",
      ocjena: 0,
      prosjek: 0,
      id: this.$route.params.cardid,
      sum: 0,
    };
  },
  /*
  computed: {
    rs() {
      return this.reviews.filter((review) => {
        return review.id === this.id;
      });
    },
  },
*/

  methods: {
    /*
    writeUserData() {
      const db = getDatabase();

      const postListRef = ref(db, "reviews");

      const newPostRef = push(postListRef);

      set(newPostRef, {
        reviewer: this.reviewer,
        content: this.content,
        id: this.id,
      })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.content = "";
          this.reviewer = "";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getreview() {
      let reviews = [];
      const db = getDatabase();
      const dbRef = ref(db, "reviews");
      onValue(
        dbRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            let key = childSnapshot.key;
            const data = childSnapshot.val();

            let review = {
              id: data.id,
              content: data.content,
              reviewer: data.reviewer,
            };

            console.log(data.id);
            console.log(data.content);

            this.reviews.unshift(review);
          });
        },
        {
          onlyOnce: true,
        }
      );
    },
    suscribe() {
      const db = getDatabase();
      const commentsRef = ref(db, "reviews");

      onChildAdded(commentsRef, (data) => {
        addCommentElement(
          postElement,
          data.id,
          data.val().content,
          data.val().reviewer
        );
      });
    },
  },
};
*/
    postNewreview() {
      addDoc(collection(db, "reviews"), {
        reviewer: this.reviewer,
        content: this.content,
        id: this.id,
        ocjena: this.ocjena,
        time: new Date().toLocaleDateString(),
      })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.content = "";
          this.reviewer = "";
          this.ocjena = "";
        })
        .catch((e) => {
          console.log(e);
        });

      // za prosjek
      const postref = doc(db, "doktori", this.id);

      setDoc(postref, { prosjek: this.prosjek }, { merge: true });
    },

    async getreview() {
      let reviews = [];

      console.log("firebase dohvat...");

      const test = await getDocs(collection(db, "reviews"));

      test.forEach((doc) => {
        let id = doc.id;
        let data = doc.data();

        let review = {
          id: data.id,
          content: data.content,
          reviewer: data.reviewer,
          time: new Date().toLocaleDateString(),
          ocjena: data.ocjena,
        };
        if (review.id == this.id) {
          this.reviews.unshift(review);
        }
      });

      //console.log(this.reviews);
    },
  },
  mounted() {
    let viewMessage = this;
    let sum = 0;
    let prosjek = 0;
    let duljina = 0;
    console.log("firebase dohvat...");

    const q = query(collection(db, "reviews"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let reviews = [];
      querySnapshot.forEach((doc) => {
        let id = doc.id;
        let data = doc.data();

        if (data.id == this.id) {
          let review = {
            key: doc.id,
            id: data.id,
            content: data.content,
            reviewer: data.reviewer,
            ocjena: data.ocjena,
            time: data.time,
          };

          this.sum += review.ocjena;

          reviews.unshift(review);
        }
      });
      console.log("current rewies are", reviews.join(", "));
      this.reviews = reviews;
      console.log(this.reviews);
      this.prosjek = this.sum / reviews.length;
    });
  },
};
</script>
