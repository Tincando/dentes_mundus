<template>
  <div class="signup">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm-6">
          <h1>Sign up forma</h1>
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
            <div class="mb-3">
              <label for="passwordRepeat">Confirm password</label>
              <input
                v-model="passwordRepeat"
                type="password"
                class="form-control"
                id="passwordRepeat"
                placeholder="Repeat password"
              />
            </div>
            <button type="button" @click="signup" class="btn btn-primary">
              Sign up
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>



<script>
import { getAuth, createUserWithEmailAndPassword } from "@/firebase";

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      const auth = getAuth();

      if (this.password != this.passwordRepeat) {
        alert("lozinke nisu jednake");
      } else {
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(function () {
            console.log("Uspješna registracija");
          })
          .catch(function (error) {
            console.error("Došlo je do greške", alert(error));
          });
        console.log("Nastavak");
      }
    },
  },
};
</script>