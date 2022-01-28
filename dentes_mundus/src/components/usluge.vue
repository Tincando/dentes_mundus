<template>
  <div class="container">
    <form class="form-group" @submit.prevent="dodajuslugu">
      <div class="container usluge">
        <h2>Rezerviraj Termin :</h2>
        <!-- test sa kalendarom
          <input
            v-model="datum"
            class="calendar"
            type="datetime-local"
            :min="getcurrentdatetime()"
            :max="this.today"
          />
          -->
        <div class="container dan">
          <label class="form-select-label" for="form-select">
            Odaberi Dan
          </label>
          <select
            class="form-select"
            v-model="dani"
            aria-label="Default select example"
            required
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
        <div class="container vrijeme">
          <input
            class="appt-time"
            id="appt-time"
            type="time"
            name="appt-time"
            min="08:00"
            max="18:00"
            v-model="vrijeme"
            required
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
            Pregled
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
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Bijela plomba"
            id="flexCheckChecked"
            v-model="usluge"
          />
          <label class="form-check-label" for="flexCheckChecked"
            >Bijela Plomba
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Amalgam"
            id="flexCheckChecked"
            v-model="usluge"
          />
          <label class="form-check-label" for="flexCheckChecked"
            >Amalgam
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="Zdrastveno osiguranje"
            id="flexCheckChecked"
            v-model="usluge"
          />
          <label class="form-check-label" for="flexCheckChecked"
            >Imam Zdravsteno Osiguranje
          </label>
        </div>
        <button class="btn btn-primary btn-lg" type="submit">Potvrdi</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.appt-time {
  margin: 20px;
}
.dan {
  padding-bottom: 30px;
}
.vrijeme {
  padding-bottom: 35px;
}
div {
  margin-bottom: 10px;
  position: relative;
}
.usluge {
  border: 1px solid rgb(124, 124, 124);
  padding: 100px 50px 50px 100px;
  background-color: white;
  box-shadow: 0px 7px 24px 13px rgba(0, 0, 0, 0.51);
}

input[type="number"] {
  width: 100px;
}
</style> >

<script>
import store from "@/store";
import { collection, addDoc, db, getDocs } from "@/firebase";
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
      rezerve: [],
      id: this.$route.params.cardid,
    };
  },
  mounted() {
    this.getcurrenttime();
    this.dohvatrezervacija();

    var today = new Date();
    var day = today.getDay();

    var dd = today.getDate() + 10;
    var mm = today.getMonth() + 1;
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
      let postoji = 0;

      this.rezerve.forEach((el) => {
        if (this.dani == el.dani && this.vrijeme == el.vrijeme) {
          postoji++;
        }
      });
      if (postoji == 0) {
        addDoc(collection(db, "rezervacije"), {
          name: store.currentUser,
          dani: this.dani,
          posted_at: Date.now(),
          vrijeme: this.vrijeme,
          usluge: this.usluge.join(" i "),
          docid: this.id,
        })
          .then((doc) => {
            console.log("Spremljeno", doc);
            (this.dani = ""), (this.vrijeme = ""), (this.usluge = []);
            alert("Vaša rezervacija je uspješno obavljena!Vidimo se");
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        alert("Odabrani termin je zauzet molim birajte ponovno");
      }
    },

    dohvatrezervacija() {
      const test = getDocs(collection(db, "rezervacije"));

      test.then((results) => {
        results.forEach((doc) => {
          let id = doc.id;
          let data = doc.data();

          let card = {
            name: data.name,
            dani: data.dani,
            vrijeme: data.vrijeme,
            usluge: data.usluge,
            docid: data.docid,
          };
          if (this.id == card.docid) {
            this.rezerve.push(card);
          }
        });
      });
    },

    gettest() {
      alert(this.usluge + "Zakazani datum je: " + this.datum);
    },

    maxworkhours() {
      var today = new Date();
      var day = today.getDay();

      var dd = today.getDate() + 1;
      var mm = today.getMonth() + 1;
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
      var mm = today.getMonth() + 1;
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