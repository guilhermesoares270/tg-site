<script>
  import Router from "../router/Router.svelte";
</script>

<style>
  .app-container {
    display: flex;
    width: 100%;
    height: 100%;
    /* background: khaki; */
  }
</style>

<!-- <svelte:head>
  <link rel="stylesheet" href="./custom_css/carbon-components.min.css" />
</svelte:head> -->

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/carbon-components@10.9.0/css/carbon-components.min.css" />
</svelte:head>

<div class="app-container">
  <Router />
</div>
