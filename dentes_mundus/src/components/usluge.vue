<template>
  <div class="container">
    <form class="form-group" @submit.prevent="dodajuslugu">
      <h2>Rezerviraj Termin :</h2>
      <div class="container usluge">
        <!-- test sa kalendarom
          <input
            v-model="datum"
            class="calendar"
            type="datetime-local"
            :min="getcurrentdatetime()"
            :max="this.today"
          />
          -->
        <div class="container">
          <label class="form-select-label" for="form-select">
            Odaberi Dan
          </label>
          <select
            class="form-select"
            v-model="dani"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="Ponedjeljak">Ponedjeljak</option>
            <option value="Utorak">Utorak</option>
            <option value="Četvrtak">Četvrtak</option>
            <option value="Petak">Petak</option>
            <option value="Subota">Subota</option>
            <option value="Nedjelja">Nedjelja</option>
          </select>
        </div>
        <div class="container">
          <input
            class="appt-time"
            id="appt-time"
            type="time"
            name="appt-time"
            min="08:00"
            max="18:00"
            v-model="vrijeme"
          />
          <label class="form*time-label" for="appt-time">
            Radno vrijeme je od : 08:00 do 18:00
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Pregled"
            name="Pregled"
            id="flexCheckDefault"
            v-model="usluge"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Pregled cijena : 100 kn
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Hitnoća"
            id="flexCheckChecked"
            v-model="usluge"
          />
          <label class="form-check-label" for="flexCheckChecked"
            >Hitnoća
          </label>
        </div>
        <button class="btn btn-primary" type="submit">klikni</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
div {
  margin-bottom: 10px;
  position: relative;
}

input[type="number"] {
  width: 100px;
}
</style> >

<script>
import store from "@/store";
import { collection, addDoc, db } from "@/firebase";
export default {
  name: "usluge",

  data: function () {
    return {
      store,
      usluge: [],
      dani: [],
      vrijeme: "",
      today: "",
      sat: "",
      datum: "",
      id: this.$route.params.cardid,
    };
  },
  mounted() {
    this.getcurrenttime();

    var today = new Date();
    var day = today.getDay();

    var dd = today.getDate() + 10;
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    this.today = yyyy + "-" + mm + "-" + dd + "T" + "08" + ":" + "00";
  },

  methods: {
    dodajuslugu() {
      addDoc(collection(db, "rezervacije"), {
        name: store.currentUser,
        dani: this.dani,
        posted_at: Date.now(),
        vrijeme: this.vrijeme,
        usluge: this.usluge,
        docid: this.id,
      })
        .then((doc) => {
          console.log("Spremljeno", doc);
          (this.dani = ""), (this.vrijeme = ""), (this.usluge = "");
        })
        .catch((e) => {
          console.log(e);
        });
    },

    gettest() {
      alert(this.usluge + "Zakazani datum je: " + this.datum);
    },

    maxworkhours() {
      var today = new Date();
      var day = today.getDay();

      var dd = today.getDate() + 1;
      var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
      var yyyy = today.getFullYear();
      var hh = today.getHours();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }

      this.today = yyyy + "-" + mm + "-" + dd + "T" + "08" + ":" + "00";
    },

    getcurrentdatetime() {
      var today = new Date();

      var day = today.getDay();

      var dd = today.getDate();
      var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
      var yyyy = today.getFullYear();
      var hh = today.getHours();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }

      return (today = yyyy + "-" + mm + "-" + dd + "T" + hh + ":" + "00");
    },

    getcurrenttime() {
      var v = new Date();
      var hh = v.getHours();

      this.sat = hh + "00";
    },
  },
};
</script>