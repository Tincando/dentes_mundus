<template>
  <div class="col-lg-4">
    <router-link :to="{ name: 'Termin', params: { cardid: info.id } }">
      <img
        class="bd-placeholder-img rounded-circle"
        width="200"
        height="200"
        :src="info.url"
        role="img"
      />
    </router-link>
    <rect width="100%" height="100%" fill="#777" />
    <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>

    <h2>{{ info.name }}</h2>
    <p>
      {{ info.description }}
    </p>
    <p>{{ info.prosjek }}</p>
    <router-link :to="{ name: 'Termin', params: { cardid: info.id } }">
      View details &raquo;
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.rounded-circle {
  border: 2px solid rgb(177, 237, 255);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.rounded-circle:hover {
  width: 195px;
  height: 195px;
  box-shadow: none;
}
</style>

<script>
export default {
  name: "top3",
  props: ["info"],
};
</script>
