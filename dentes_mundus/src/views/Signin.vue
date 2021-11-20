<template>
  <div class="signup">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm-6">
          <h1>Login forma</h1>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                v-model="email"
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                v-model="password"
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="button" @click="login" class="btn btn-primary">
              Login
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "@/firebase";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((result) => {
          console.log("Uspiješna prijava", result);

          this.$router.replace({ name: "About" });
        })

        .catch(function (e) {
          console.error("Greška", e);
        });
    },
  },
};
</script>
