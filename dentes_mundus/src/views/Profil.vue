<template>
  <div>
    <div class="container">
      <h1>Moj profil</h1>
      <h3>Ime {{ this.email }} :</h3>
      <h3>{{ this.id }}</h3>
    </div>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  name: "Profil",

  data: function () {
    return {
      email: store.currentUser,
      id: store.currentUserid,
    };
  },
};
</script>