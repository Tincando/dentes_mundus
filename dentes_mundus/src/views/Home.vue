<template>
  <div class="home">
    <div class="b-example-divider"></div>
    <div class="d-flex pocetna">
      <div class="container-uvod">
        <h1>Odaberi svoj termin ?</h1>
        <router-link to="/about" class="btn btn-success btn-lg">
          Klikni ovdje
        </router-link>
      </div>
      <img
        class="img-fluid"
        src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        width="100%"
        height="70%"
      />
    </div>
    <div class="b-example-divider"></div>
    <div class="container">
      <h1>Ocjene najboljih stomatologa</h1>
    </div>
    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>
            Some representative placeholder content for the three columns of
            text below the carousel. This is the first column.
          </p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>
            Another exciting bit of representative placeholder content. This
            time, we've moved on to the second column.
          </p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <svg
            class="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 140x140"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#777" />
            <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
          </svg>

          <h2>Heading</h2>
          <p>
            And lastly this, the third column of representative placeholder
            content.
          </p>
          <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
    </div>
    <hr class="featurette-divider" />
    <div class="container" id="onama">
      <h1>O Nama</h1>
      <p>skupina zaljubljenika u stomatolgiju</p>
      <p>pojačajte svoj brand</p>
      <p>zašto ne</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
