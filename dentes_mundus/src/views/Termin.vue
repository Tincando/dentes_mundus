<template>
  <div class="termin">
    <div class="container">
      <h1>TERMIN</h1>
      <div class="row">
        <div class="col"></div>
        <div class="col-lg-6">
          <div class="profil"></div>
          <hr class="featurette-divider" />
          <div class="lokacija">
            <h2>Stavit cemo ime lokacije i ispod sliku lokacije</h2>
          </div>
          <div class="slika_lok"></div>
          <div class="divider" />
          <div class="dropdown">
            <button
              class="btn btn-lg btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Izaberi Termin
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
        <div class="col"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.profil {
  height: 350px;
  width: 350px;
  border-radius: 25%;
  background-color: grey;
}

.divider {
  height: 50px;
}

.slika_lok {
  height: 150px;
  width: 100%;
  background-color: rgb(163, 165, 240);
}
</style>

<script>
</script>
