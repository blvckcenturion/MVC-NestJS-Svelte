<nav>
    <div>
        <a href="/">
            <h1>PODIO</h1>
        </a>    
    </div>
    <div>
        <a href="/search">
            Buscar conferencias
        </a>
        <a href="/login">
            Iniciar sesion
        </a>
    </div>
</nav>

<style>
    nav {
        width: 100vw;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid var(--font-color);
    }
    a{
        margin: 0;
        text-decoration: none;
        color: var(--font-color);
    }
    nav > div:first-child{
        width:20%;
        font-family: var(--main-font);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav > div:first-child a h1{
        margin: 0;
        color: var(--font-color);
        font-size: 3rem;
        letter-spacing: 10px;
    }

    nav > div:last-child {
        width: 45%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 1.5rem;
    }

    nav > div:last-child a{
        transition: 0.5s;
    }

    nav > div:last-child a:hover{
        color: var(--accent-color);
        font-size: 2rem;
        
    }

</style>
