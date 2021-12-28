<template>
  <div class="signup">
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm-6 login-forma">
          <div class="container kutija">
            <img src="@/assets/zub1.png" width="60px" />
            <h1>Login</h1>
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
              <button type="button" @click="login" class="btn btn-primary">
                Login
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
  padding: 80px 50px 75px;
  border-radius: 15%;
  box-shadow: 0px 7px 24px 13px rgba(0, 0, 0, 0.51);
}

h1 {
  color: rgb(39, 111, 139);
}

.login-forma {
  padding: 150px 20px;
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

          this.$router.replace({ name: "Home" });
        })

        .catch(function (e) {
          console.error("Greška", e);
        });
    },
  },
};
</script>
