
<template>
  <div class="col-lg-4">
    <img class="kutia" :src="info.url" />
    <p style="text-align: center">{{ info.name }}</p>
    <p class="card-text">
      {{ info.description }}
      <router-link :to="{ name: 'Termin', params: { cardid: info.id } }">
        Read More
      </router-link>
    </p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <div class="card-footer text-muted text-left">
          ocjena: {{ info.prosjek }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.kutia {
  height: 250px;
  width: 250px;
  border-radius: 50%;
  border: 5px solid rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>

<script>
export default {
  name: "karticastom",
  props: ["info"],
};
</script>

