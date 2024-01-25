<script lang="ts">

import { database } from "$lib/stores/database.js";
import { loadItems } from "$lib/stores/database.js";



const promise = loadItems()


</script>

<div class="plantBox">
	{#await promise}
    {:then database}
    {#each database.species as element}

    <div class="plant">
        <div class="col1">
            <img src="{`/Database/IMG/Species/${String(element.id).padStart(2, '0')}.jpg`}" alt="{element.name_hun}">
        </div>
        <div class="col2">
            <h3>{element.name_hun}</h3>
            <p>{element.name_lat}</p>
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
        width: 55px;
        
    }

    .plant{

        width: 300px !important;
        height: 70px !important;
        border: 1px solid black;
        border-top: none;
        display: flex;

        .col1{
            display: flex;
            align-items: center;
            width: 60px;
        }
        .col2{
            display: flex;
            align-content: center;
            flex-direction: column;
        }

        h3{
            margin:  0 0;
        }
        p{
            margin: 0;
        }
    }




</style>





