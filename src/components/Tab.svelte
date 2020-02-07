<script>
  export let tabs;

  let selected = 0;

  const changeSelected = id => {
    selected = id;
    console.log(`selected: ${selected}`);
  };
</script>

<style>
  .tab-container {
    background: grey;
  }
  .tab-item {
    background: tomato;
    width: 10%;
    display: flex;
    justify-content: center;
  }

  .tab-header {
    display: flex;
    width: 100%;
  }
</style>

<div class="tab-container">
  <div class="tab-header">
    {#each tabs as tab (tab.id)}
      <div
        class="tab-item"
        id={tab.id - 1}
        on:click={() => changeSelected(tab.id - 1)}>
        tab
      </div>
    {/each}
  </div>
  <div class="tab-content">{tabs[selected].id}</div>

  <!-- {#each tabs as tab }
    <div class="tab">{tab.id}</div>
  {/each} -->
</div>
