<template>
  <div id="app">
 <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
  <div class="container-fluid">
    <router-link to="/">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap" ><image href="C:\Users\Pc1\dentes_mundus\dentes_mundus\zub.jpg" width="200" height="200" /></svg>
     </router-link>
    <a class="navbar-brand" href="#">Dentes Mundus</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse col-12 col-md-auto mb-2 justify-content-center mb-md-0" id="navbarSupportedContent">
      <ul class="navbar-nav ">
        <li class="nav-item px-2">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item px-2">
              <router-link to="/about">About</router-link>
        </li>
      </ul>

      <div class="col-md-9 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </div>
  </div>
</nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  a {
    font-weight: bold;
    color: #6e51d6;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%);
}

</style>
