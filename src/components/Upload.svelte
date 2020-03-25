<script>
  console.log("Upload");
  import {
    FileUploader,
    FileUploaderDropContainer,
    FileUploaderButton,
    FileUploaderItem
  } from "carbon-components-svelte";

  let status = "uploading";
  let outerFiles = [];

  function handleFiles(files) {
    console.log(files);
    outerFiles = files;
  }
</script>

<style>
  div {
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1 1;
  }

  .teste {
    background: khaki;
  }
</style>

<!-- <div> -->
<!-- <FileUploader
  buttonLabel="Arquivos"
  labelTitle="labelTitle"
  labelDescription="Coloque os arquivos a serem submetidos aqui"
  multiple={true}
  on:add={event => {
    console.log(event);
  }}
  {status} />
<button
  on:click={() => {
    status = 'edit';
  }} /> -->

<FileUploaderDropContainer multiple={true} validateFiles={handleFiles} />
{#each outerFiles as file}
  <!-- <Thing current={thing.color} /> -->
  console.log(`Outer file: ${file.name});
  <FileUploaderItem iconDescription={file.name} />
{/each}
<!-- </div> -->
