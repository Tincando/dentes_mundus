<template>
  <div class="signup">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="container pacijent">
            <h1>Sign up forma za pacijenta</h1>
            <img />
          </div>
        </div>
        <div class="col-sm">
          <div class="container doktor">
            <h1>Sign up forma za Doktora</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.signup {
  color: blue;
}
.pacijent {
  padding: 50px;
  height: 700px;
  border: 2px solid black;
  background-image: url("~@/assets/patient2.jpg");
  background-repeat: no-repeat;

  border-radius: 15%;
}
.doktor {
  padding: 50px;
  height: 700px;
  border: 2px solid black;
  background-image: url("~@/assets/doctor.jpg");
  background-repeat: no-repeat;

  border-radius: 15%;
}
</style>

<script>
export default {
  name: "sigunppage",
  setup() {},
};
</script>
