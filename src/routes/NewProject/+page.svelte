<script lang="ts">
    import { onMount } from 'svelte';

    onMount(() => {
        document.body.classList.add("newProject-body");
    });

    function submit(){
        let allow:boolean = true

        let name:string = document.getElementById("name")!.value
        let amount:number = document.getElementById("amount")!.value
        let width:number = document.getElementById("width")!.value
        let height:number = document.getElementById("height")!.value
        let error = document.getElementById("error")
            
        if (!(name.length >= 1)){
            error!.innerText = 'A "Projekt neve" mező nem maradhat üresen'
        }
        else if (!(amount >= 1)){
            error!.innerText = 'Az ágyások számának nagyobbnak kell lennie nullánál.'
        }
        else{
            error!.innerText = ''

            let stor = {
                name: name,
                amount: amount,
                width: width,
                height: height,
            }

            localStorage.newProject = JSON.stringify(stor)
            console.log(stor)
            window.location.href = "./Planner"


        }



    }

</script>

    <svelte:body class="newProject-body"/>
<div class="body">
    <div class="mainBox">
        <h1>Projekt létrehozása</h1>
        <label for="name">Projekt neve: </label> <input type="text" id="name">
        <label for="amount">Ágyások száma: </label> <input type="number" min="1" value="1" id="amount">
        <label for="width">Ágyások szélessége (cm):</label> <input type="number" min="200" placeholder="cm" value="200" id="width">
        <label for="height">Ágyások hosszúsága (cm): </label> <input type="number" min="200" value="200" id="height">
        <button on:click={submit}>Létrehozás</button>
        <p id="error"></p>
    </div>
</div>





<style>

    .app{
        height: 100vh;
    }

    :global(.newProject-body){
        background-color: rgb(245, 206, 167);
    }

    .body{
        display: flex;
        padding-top: 15vh;
        justify-content: center;
        height: 100%;
        width: 100%;

    }

    .mainBox{
        display: flex;
        flex-direction: column;
        width: 250px;
        height: fit-content;
        padding: 20px;
        padding-bottom: 10px;
        border: solid rgb(97, 79, 71) 1px;
        border-radius: 2px;
        background-color: rgb(221, 169, 113);

    }

    #error{
        margin-bottom: 0;
        margin-top: 10px;
        color: rgb(199, 0, 0);
        font-size: 15px;
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
    button{
        background-color: rgb(224, 200, 134);
    }
    button:hover{
        background-color: rgb(224, 168, 84);
    }
    input{
        background-color: rgb(223, 202, 176);
    }

</style>
