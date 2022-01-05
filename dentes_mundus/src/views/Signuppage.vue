<template>
  <div class="signup">
    <div class="divider" />
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="container pacijent">
            <h1>PACIJENT</h1>
            <div class="container">
              <h3>Boli vas zub? Klikni ovdje i registriraj se!</h3>
              <small>Jer karijes ne bira!</small>
            </div>
            <div class="container but">
              <router-link
                class="btn btn-lg"
                :to="{
                  name: 'Signup',
                }"
                >Sign Up</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="container doktor">
            <h1>DOKTOR</h1>
            <h3>Doktor ste? Brzom registracijom do pacijenata!</h3>
            <small>Jer pacijenti biraju!</small>
            <div class="but">
              <router-link
                class="btn btn-lg"
                :to="{
                  name: 'Signupdoc',
                }"
                >Sign Up</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="divider" />
  </div>
</template>
<style lang="scss" scoped>
.divider {
  height: 50px;
}
.signup {
  color: rgb(255, 255, 255);
  //background-color: rgb(201, 227, 247);
}
.pacijent {
  padding: 50px;
  height: 700px;
  border: 2px solid rgb(177, 237, 255);
  background-image: url("~@/assets/patient2.jpg");
  filter: grayscale(80%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0px 7px 24px 13px rgba(0, 0, 0, 0.51);
  border-radius: 15%;
}
.but {
  padding: 150px 100px 20px 100px;
}
.pacijent:hover {
  filter: grayscale(0%);
}

.doktor:hover {
  filter: grayscale(0%);
}
.doktor {
  padding: 50px;
  height: 700px;
  border: 2px solid rgb(177, 237, 255);
  background-image: url("~@/assets/doctor.jpg");
  filter: grayscale(80%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0px 7px 24px 13px rgba(0, 0, 0, 0.51);
  border-radius: 15%;
}
.btn {
  background-color: rgb(96, 193, 231);
  color: white;
  border: none;
}
</style>

<script>
export default {
  name: "sigunppage",
  setup() {},
};
</script>
