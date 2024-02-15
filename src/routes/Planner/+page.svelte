<script lang="ts">

    import SideBar from "$lib/SideBar.svelte";

    import { generator, populateField, } from "$lib/functions";
    import type { PlantInput, } from "$lib/functions.ts";
    import {onMount} from "svelte";

    let project;

    function initializeProject(amount:number, height:number, width:number){
        let fieldContainer:any = document.getElementById("fieldContainer")!
        fieldContainer.innerHTML = "";

        project = generator(amount, height, width)

        if (height > width){
            let temp:number = height;
            height = width;
            width = temp;
        }

        width = (height / width) * 80
        height = 80

        for (let i = 0; i<amount; i++){
            fieldContainer.innerHTML += `<canvas class="field" id="canvas${i}" style="height: ${height}vh; width:${width}vh"/>`
        }

    }

    function displayPlants(){
        console.log("s",document.getElementById("field0")!.height)
    }

    onMount(() => {
        if (localStorage.newProject){

            let newProject = JSON.parse(localStorage.newProject)

            initializeProject(newProject.amount, newProject.height, newProject.width)
            displayPlants()
        }
        else{
            console.log("ERRR")
        }
    })





</script>


<section class="body">

    <div class="col1">
        <div class="plantBox-parent">
            <SideBar/>
        </div>

        <!--div class="separator">
            <div class="s-col1">
                <p>^^^</p>
            </div>
            <div class="s-col2"/>
        </div-->

    </div>
    <div class="col2" id="fieldContainer">

    </div>


</section>

<style lang="scss">
    :global(.field){
        border: 1px solid black;
        //height: 80vh;
        
        background-color: rgb(255, 255, 255);
    }

    .plantBox-parent{
        height: 100vh;
    }
    .statusBox-parent{
        height: 40%;
        display: none;
    }

    .body{
        display: flex;
        background-color: rgb(255, 232, 201);
        
        .col1{
            height: 100vh;
        }

        .col2{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            flex-wrap: nowrap;
            white-space: nowrap;
            overflow-x: auto;
            gap: 10px;
            padding: 0 20px 0 20px;
            height: 100vh;
        }
    }

    .separator{
        height: 16px;
        z-index: 10 !important;
        position: relative;
        display: flex;
        flex-direction: row;

        .s-col1{
            width: 320px;
            border-right: 1px solid black;
            height: 100%;
            background-color: rgb(234, 192, 150);
            background-color: rgb(214, 162, 112);
            box-shadow:  -1px -1.8px 6px black;
        }
        .s-col2{
            background-color: rgb(97, 88, 78);
            width: 11px;
            height: 105%;

        }
    }




</style>


