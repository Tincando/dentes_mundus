<template>
  <div class="dodaj">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm-6">
          <h1>Dodaj doktora</h1>
          <form @submit.prevent="postNewdentist">
            <div class="form-group">
              <label for="Ime" class="form-label">Ime</label>
              <input
                v-model="name"
                type="text"
                class="form-control"
                id="Ime"
                aria-describedby="ime"
                placeholder="ime"
              />
            </div>
            <div class="mb-3">
              <label for="imageUrl">Image URL</label>
              <input
                v-model="newImageUrl"
                type="text"
                class="form-control ml-2"
                placeholder="Enter the image URL"
                id="imageUrl"
              />
            </div>
            <div class="form-group">
              <label for="imageDescription">Description</label>
              <input
                v-model="description"
                type="text"
                class="form-control ml-2"
                placeholder="Enter the image description"
                id="imageDescription"
              />
            </div>
            <div class="form-group">
              <label for="telephone">Telefonski broj:</label>
              <input
                v-model="telephone"
                type="number"
                class="form-control ml-2"
                placeholder="Enter telephone number"
                id="telephone"
              />
            </div>
            <div class="form-group">
              <label for="adress">Adresa:</label>
              <input
                v-model="adress"
                type="text"
                class="form-control ml-2"
                placeholder="Enter adress"
                id="adress"
              />
            </div>
            <button type="submit" class="btn btn-primary">Dodaj</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, db } from "@/firebase";

export default {
  data: function () {
    return {
      name: "",
      newImageUrl: "", // <-- url nove slike
      abbreviation: "",
      description: "",
      telephone: "",
      adress: "",
    };
  },
  methods: {
    postNewdentist() {
      addDoc(collection(db, "posts"), {
        name: this.name,
        url: this.newImageUrl,
        abbreviation: this.name,
        posted_at: Date.now(),
        description: this.description,
        telephone: this.telephone,
        adress: this.adress,
      })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.newImageUrl = "";
          this.name = "";
          this.abbreviation = "";
          this.description = "";
          this.telephone = "";
          this.adress = "";
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>