<!-- views/Layout.svelte -->
<script>
  import Nav from './Nav.svelte';
</script>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="PODIO" />
    <meta name="author" content="PODIO" />
    <meta name="keywords" content="PODIO" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Prompt&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    %head%
  </head>
  <body>
    <header>
      <Nav />
    </header>
    <main>
      <slot />
    </main>
  </body>
</html>

<style>

  :global(body) {
    --background-color: #101818;
    --font-color: #E7EEEE;
    --accent-color: #709999;
    --main-font: 'Prompt', sans-serif;
    --secondary-font: 'Inter', sans-serif;
    font-family: var(--secondary-font);
    color: var(--font-color);
    overflow-x: hidden;
    background-color: var(--background-color);
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    transition: 0.5s;
  }

  :global(body::-webkit-scrollbar) {
    display: none;
  }


</style>