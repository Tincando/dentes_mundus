
<template>
  <div class="card-body">
    <div class="container">
      <img class="kutia" :src="info.url" />
      <p style="text-align: center">{{ info.name }}</p>
    </div>
    <p class="card-text">
      {{ info.description }}
      <router-link :to="{ name: 'Termin', params: { cardid: info.id } }">
        Read More
      </router-link>
    </p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <div class="card-footer text-muted text-left"></div>
        <a type="button" class="btn btn-sm btn-outline-secondary"
          ><router-link to="/Termin">View</router-link></a
        >
        <button type="button" class="btn btn-sm btn-outline-secondary">
          Edit
        </button>
      </div>
      <small class="text-muted">{{ info.time }}</small>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.kutia {
  height: 250px;
  width: 250px;
  border-radius: 25px;
}
</style>

<script>
export default {
  name: "karticastom",
  props: ["info"],
};
</script>

