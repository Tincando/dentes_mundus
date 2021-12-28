<template>
  <div class="signup">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm-6 login-forma">
          <div class="container kutija">
            <div class="divider" />
            <img src="@/assets/zub1.png" width="60px" />
            <h1>Sign up forma za pacijenta</h1>
            <div class="divider" />
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
              <button
                type="button"
                @click="signup"
                class="btn btn-primary btn-lg"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.divider {
  height: 60px;
}

.kutija {
  border: solid rgb(107, 194, 245);
  padding: 50px 50px 75px;
  border-radius: 15%;
  box-shadow: 0px 7px 24px 13px rgba(0, 0, 0, 0.51);
}

h1 {
  color: rgb(39, 111, 139);
}

.login-forma {
  padding: 100px 20px;
}
.btn:hover {
  box-shadow: none;
  transform: translateY(5px);
}

.btn {
  background-color: rgb(96, 193, 231);
  color: white;
  box-shadow: 0 4px 8px 0 rgb(39, 111, 139), 0 6px 20px 0 rgb(67, 166, 206);

  border: none;
}
</style>


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