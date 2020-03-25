<script>
  import { Router, Link, Route } from "svelte-routing";
  import Add16 from "carbon-icons-svelte/lib/Add24";
  import Home from "carbon-icons-svelte/lib/Home24";
  import Login from "../components/Login.svelte";
  import Upload from "../components/Upload.svelte";

  export let url = "";

  let isActive = true;
</script>

<style>
  .sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40px;
    height: 100%;
    padding: 7px 0 0 0;
    background: #171717;
  }

  .side-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-bottom: 5px;
    min-height: 36px;
    fill: #ffffff;
  }

  .side-item:hover {
    background: #262626;
  }

  .content {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    background: #555555;
    padding: 5px 0 0 10px;
  }
</style>

<div class="sidebar">

  <Router>
    <nav>
      <div class="side-item">
        <Home
          title="Home"
          on:mouseenter={() => {
            console.log('HOVER');
          }} />
      </div>
      <div class="side-item">
        <Add16 title="Add16" />
        <!-- <Link to="login">Login</Link> -->
      </div>
    </nav>

    <Route path="login">
      <Login />
    </Route>
  </Router>

</div>
<div class="content">
  {#if isActive === true}
    <!-- <h1>You can see me</h1> -->
    <Upload />
  {:else if isActive === 4}
    <h1>You can see me only if isActive is 4</h1>
  {:else}
    <h2>You can't see me</h2>
  {/if}
</div>
