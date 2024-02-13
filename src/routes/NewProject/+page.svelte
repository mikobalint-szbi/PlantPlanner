<script>
    import { onMount } from 'svelte';

    onMount(() => {
        document.body.classList.add("newPage-body");
    });

</script>

<body>
    <div class="mainBox">
        <h1>Projekt létrehozása</h1>
        <label for="name">Projekt neve: </label> <input type="text" id="name">
        <label for="amount">Ágyások száma: </label> <input type="number" id="amount">
        <label for="width">Ágyások szélessége: </label> <input type="number" id="width">
        <label for="height">Ágyások hosszúsága: </label> <input type="number" id="height">
        <button>Létrehozás</button>
    </div>
</body>





<style>

    :global(body){
        height: 100vh;
    }

    .app{
        height: 100vh;
    }

    body{
        display: flex;
        padding-top: 15vh;
        justify-content: center;
        height: 100%;
        width: 100%;
        background-color: rgb(238, 222, 205);
    }

    .mainBox{
        display: flex;
        flex-direction: column;
        width: 250px;
        height: fit-content;
        padding: 20px;
        border: solid black 1px;

    }

    .mainBox input{
        margin-bottom: 10px;
        margin-top: 1px;
    }
    .mainBox button{
        margin-top: 10px;
        font-family: inherit;
        font-size: 20px;
    }
    .mainBox h1{
        margin-top: 5px;
        margin-bottom: 25px;
        text-align: center;
        font-size: 26px;
    }
    #name{
        margin-bottom: 20px;
    }

</style>
