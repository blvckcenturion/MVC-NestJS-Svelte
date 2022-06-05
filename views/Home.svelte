<script>
    import Layout from './Layout.svelte';
    export let message;
</script>
<Layout>
    <h1>{message}</h1>
</Layout>

<style>
    h1 {
      color: purple;
    }
    :global(body) {
      background-color: pink;
    }
</style>