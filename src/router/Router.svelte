<script>
  import { Router, Link, Route } from "svelte-routing";
  import Login from "../components/Login.svelte";
  import Upload from "../components/Upload.svelte";
  import Tabs from "../components/Tab.svelte";
  import Container from "../components/Container.svelte";

  const tabs = [
    { id: 1, name: "tab1", component: "" },
    { id: 2, name: "tab1", component: "" }
  ];

  export let url = "";
  console.log(`url: ${url}`);
</script>

<Router {url}>
  <Route path="/">
    <!-- <Container /> -->
    <Login />
  </Route>
</Router>
