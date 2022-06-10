<script>
    import Card from "./Card.svelte";
    export let city;
    export let conferences;
</script>

<div class="container">
    <h2>EVENTOS EN <strong>{city}</strong></h2>
    <div class="card-container">
        {#each conferences as conf}
            <Card name={conf.name} date={new Date(conf.startDate)} presenters={conf.presenters} />
        {/each}
    </div>
</div>

<style>
    .container{
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .container h2{
        height: 10%;
        font-size: 2.5rem;
    }

    .container h2 strong{
        color: var(--accent-color)
    }

    .card-container{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 40px;
    }
</style>


