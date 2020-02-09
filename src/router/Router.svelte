<script>
  import { Router, Link, Route } from "svelte-routing";
  import Login from "../components/Login.svelte";
  import Upload from "../components/Upload.svelte";
  import Tabs from "../components/Tab.svelte";

  const tabs = [
    { id: 1, name: "tab1", component: "" },
    { id: 2, name: "tab1", component: "" }
  ];

  export let url = "";
</script>

<Router {url}>
  <!-- <nav>
    <Link to="/">Home</Link>
    <Link to="upload">Upload</Link>
  </nav> -->
  <div>
    <Route path="login" component={Login} />
    <!-- <Route path="blog" component={'<h1>bbb</h1>'} /> -->
    <!-- <Route path="about" component={Upload} /> -->
    <Route path="tab">
      <Tabs {tabs} />
    </Route>
    <Route path="upload">
      <Upload />
    </Route>
    <Route path="/">
      <!-- <Tabs {tabs} /> -->
      <Login />
    </Route>
  </div>
</Router>
