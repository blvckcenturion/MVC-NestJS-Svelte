<script>
    import Layout from './Layout.svelte';
    import Container from './components/Container.svelte';
import { copyFile } from 'fs';
    export let conferences;
</script>
<Layout>
  <div class="page-container">
    {#each conferences as conf}
      <Container city={conf.city} conferences={conf.conferences}/>
    {/each}
  </div>
</Layout>

<style>
  .page-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
</style>