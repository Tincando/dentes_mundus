<template>
  <div class="col-lg-4">
    <img
      class="bd-placeholder-img rounded-circle"
      width="140"
      height="140"
      :src="info.url"
      role="img"
    />
    <title>Placeholder</title>
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

<script>
export default {
  name: "top3",
  props: ["info"],
};
</script>
