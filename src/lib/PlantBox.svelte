<script lang="ts">

import { database } from "$lib/stores/database.js";
import { loadItems } from "$lib/stores/database.js";

function openPlant(id: string){

    let plant = document.getElementById(id)
    let row2 = plant.querySelector('.row2');
    
    row2.style.display = "flex";
    plant.style.height = "fit-content"


}


const promise = loadItems()


</script>

<div class="plantBox">
	{#await promise}
    {:then database}
    {#each database.species as element}

    <div class="plant" id="{"plant" + element.id}" on:click={() => openPlant("plant" + element.id)}>

        <div class="row1">
            <div class="col1">
                <img src="{`/Database/IMG/Species/${String(element.id).padStart(2, '0')}.jpg`}" alt="{element.name_hun}">
            </div>
            <div class="col2">
                <h3>{element.name_hun}</h3>
                <p>{element.name_lat}</p>
            </div>
        </div>

        <div class="row2">
            {#each database.subspecies as subelement}
            <div class="row1 indent1">

                <div class="col1">
                    <img src="{`/Database/IMG/Subspecies/${String(subelement.id).padStart(2, '0')}.jpg`}" alt="{subelement.name_hun}">
                </div>
                <div class="col2">
                    <h3>{subelement.name_hun}</h3>
                    <p>{subelement.name_lat}</p>
                </div>
            </div>
            {/each}
        </div>
    </div>

    {/each}
    {/await}


</div>


<style lang="scss">
    .plantBox{
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: 100vh !important;
        overflow-y: auto;
        overflow-x: hidden;
    }



    img{
        height: 60px;
        width: 60px;
        object-fit: cover;
        
    }

    .plant{

        display: flex;
        flex-direction: column;

        .row1{
            width: 320px !important;
            height: 70px !important;
            border: 0.5px solid black;
            display: flex;

            :hover{
                cursor: pointer !important;
            }
        }

        .row1.indent1{
            margin-left: 40px;
            width: 280px !important;
        }
  
        .row2{
            display: none;
            flex-direction: column;
        }


        .col1{
            display: flex;
            align-items: center;
            width: 60px;
        }
        .col2{
            display: flex;
            align-content: center;
            flex-direction: column;
            width: 100%;
        }

        h3{
            margin:  0 0;
        }
        p{
            margin: 0;
        }
    }




</style>





