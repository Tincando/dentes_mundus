<template>
  <div class="about">
    <section class="jumbotron text-center" style="height:150px;">
    <div class="container">
    <h1 class="jumbotron-heading">Odaberi svog Stomatologa</h1>
    </div>
    </section>
    <div class="b-example-divider" />
    <div class="container">
    <div class="row">
      <div class="col-md-4"> <karticastom /> <karticastom /> </div>
      <div class="col-md-4"><karticastom /> <karticastom /> </div>
      <div class="col-md-4"><karticastom /> <karticastom /> </div>
      <div>
      </div>
  </div>
    </div>
  </div>

</template>

<script>
import  karticastom  from '@/components/karticastom.vue'

export default {
  name: 'about',
  components: {
    karticastom
  }
  }
</script>
