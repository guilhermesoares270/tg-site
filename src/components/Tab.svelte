<script>
  import { Button } from "carbon-components-svelte";
  import Login from "./Login.svelte";
  export let tabs;

  let selected = 0;

  const changeSelected = id => {
    selected = id;
    console.log(`selected: ${selected}`);
  };
</script>

<!-- <style>
  .tab-content {
    display: flex;
    background: #ecf0f1;
    height: 100%;
    width: 100%;
    padding: 4.5px;
  }

  .tab-item {
    background: #bdc3c7;
    width: 10%;
    display: flex;
    justify-content: center;
    margin-right: 3.5px;
    border-radius: 2px 2px 0 0;
  }

  .tab-header {
    display: flex;
    width: 100%;
  }
</style> -->

<svelte:head>
  <link rel="stylesheet" href="tabmain.css" />
</svelte:head>

<div class="tab-container">
  <div class="tab-header">
    {#each tabs as tab (tab.id)}
      <div
        class="tab-item"
        style={tab.id - 1 === selected ? 'background: #ecf0f1;' : ''}
        id={tab.id - 1}
        on:click={() => changeSelected(tab.id - 1)}>
        tab
      </div>
    {/each}
  </div>
  <div class="tab-content">
    {tabs[selected].id}
    <Button>Primary</Button>
  </div>
</div>
