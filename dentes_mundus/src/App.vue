<template>
  <div id="app">
    <nav
      class="
        navbar navbar-expand-lg navbar-light
        bg-light
        d-flex
        flex-wrap
        align-items-center
        justify-content-center justify-content-md-between
        py-3
        mb-4
        border-bottom
      "
    >
      <div class="container-fluid">
        <router-link to="/">
          <svg
            class="bi me-2"
            width="50"
            height="50"
            role="img"
            aria-label="Bootstrap"
          >
            <image
              href="https://media.istockphoto.com/vectors/white-tooth-flat-design-vector-id912441172?k=20&m=912441172&s=612x612&w=0&h=s2w6vXvov4denJBMXKHvZ0woLx4Qh33kdg2dn8OGikg="
              width="50"
            />
          </svg>
        </router-link>
        <a class="navbar-brand" href="#">Dentes Mundus</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="
            collapse
            navbar-collapse
            col-12 col-md-auto
            mb-2
            justify-content-center
            mb-md-0
          "
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav">
            <li class="nav-item px-2">
              <router-link to="/">Home</router-link>
            </li>
            <li class="nav-item px-2">
              <a href="#onama">About &raquo;</a>
            </li>
            <li class="nav-item px-2">
              <router-link
                :to="{
                  name: 'Profil',
                  params: { userid: store.currentUserid },
                }"
              >
                Profil
              </router-link>
            </li>
            <!-- ovo ce vjerovatno bit izbrisi profil -->
            <li class="nav-item px-2">
              <router-link to="/Dodaj">Dodaj +</router-link>
            </li>
          </ul>
          <div class="col-md-9 text-end">
            <a
              v-if="!store.currentUser"
              type="button"
              class="btn btn-outline-primary"
              ><router-link
                to="/Signin"
                style="color: blue; text-decoration: none"
                >Login</router-link
              ></a
            >
            <a v-if="!store.currentUser" type="button" class="btn btn-primary"
              ><router-link
                to="/Signup"
                style="color: white; text-decoration: none"
                >Sign up</router-link
              ></a
            >
            <a
              v-if="store.currentUser"
              href="#"
              @click.prevent="logout()"
              type="button"
              class="btn btn-outline-primary"
              >Logout</a
            >
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  font-weight: bold;
  color: #6e51d6;

  &.router-link-exact-active {
    color: #42b983;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%),
    inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
}

.pocetna {
  width: 100%;
  height: 70%;
  position: relative;
  justify-content: center;
}

.container-uvod {
  position: absolute;
  top: 25%;
}
</style>

<script>
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  collection,
  db,
  query,
  onSnapshot,
} from "@/firebase";
import store from "@/store";
import router from "@/router";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  const currentRoute = router.currentRoute;

  if (user) {
    // User is signed in
    const uid = user.uid;
    console.log("***", user.email);
    store.currentUser = user.email;
    store.currentUserid = uid;

    if (!currentRoute.meta.needsAuth) {
      router.push({ name: "Home" });
    }
  } else {
    // User is signed out
    console.log("*** No user");
    store.currentUser = null;
    store.Userrole = null;
    store.currentUserid = null;
    store.Userrole = null;

    if (currentRoute.meta.needsAuth) {
      router.push({ name: "Home" });
    }
  }
});

export default {
  name: "app",
  data() {
    return {
      store,
    };
  },
  beforeUpdate() {
    this.test123();
  },

  methods: {
    logout() {
      signOut(auth).then(() => {
        this.$router.push({ name: "Sigin" });
      });
    },
    test123() {
      console.log("firebase dohvat...");

      const q = query(collection(db, "doktori"));

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let id = doc.id;
          let data = doc.data();

          let card = {
            email: data.email,
            role: data.role,
            docid: doc.id,
          };

          if (card.role == "doc" && card.email == store.currentUser) {
            store.Userrole = "doc";
            store.docid = card.docid;
          }
        });
      });
    },
  },
};
</script>

