<script>
    export let name;
    export let date;
    export let presenters;

    function handleClick() {
        console.log("Clicked!");
    }
</script>


<div class="card">
    <div class="card-img">
        <img src="https://canada-insights.bakermckenzie.com/wp-content/uploads/sites/31/2019/12/Blockchain-1.jpg" alt="Blockchain img">
    </div>
    <div class="card-details">
        <div>
            <h3>{name}</h3>
        </div>
        <div>
            <p>{date.toDateString()}</p>
            <p>Por: {`${presenters[0]} ${presenters.length > 1 ? `y ${presenters.length-1}+` : ''}`}</p>
        </div>
    </div>
    <div class="card-action" on:click={handleClick}>
        <p>Quiero Inscribirme</p>
    </div>
</div>

<style>
.card{
    align-self: center;
    justify-self: center;
    width: 90%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 2px solid var(--font-color);
    color: var(--font-color);
    transition: 0.7s;
}
.card-img{
    width:100%;
    height: 50%;
    border-bottom: 2px solid var(--font-color);
}

img{
    width: 100%;
    height: 90%;
    object-fit: cover;
}

.card-action{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    border-top: 2px solid var(--font-color);
}

.card-details{
    height: 30%;
    width: 80%;
}

.card-details h3 {
    font-size: 1.5rem;
    font-family: var(--main-font);
}

.card-details p{
    font-size: 1.2rem;
    color: var(--accent-color);
}

.card-details div:last-child{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.card-action{
    transition: 0.5s;
}
.card-action p {
    margin: 0;   
}

.card-action:hover{
    cursor: pointer;
    background-color: var(--accent-color);
    color: var(--background-color);
}

.card:hover{
    width:100%;
    height: 65vh;
    border-radius: 10px;
}
</style>