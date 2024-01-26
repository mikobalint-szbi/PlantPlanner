<script lang="ts">

import { database, loadItems } from "$lib/stores/database.js";

function openPlant(id: string){

    let plant = document.getElementById(id)
    let row2 = plant.querySelector('.row2');
    let row1 = plant?.querySelector('.row1')
    let color = "rgb(212, 164, 115)"
    
    row2.style.display = "flex";
    plant.style.height = "fit-content"
    row1.style.backgroundColor = color
    row2.style.backgroundColor = color
    row.style.boxShadow = "inset 1px 1px 1px"


}

function getSubspecies(id: string){
    // @ts-ignore
    let subelements = []
    let dbID = id.replace("plant","")

    // @ts-ignore
    database.subspecies.forEach(subspecie => {
        if (subspecie.speciesID == dbID){
            subelements.push(subspecie)
        }

    });
    // @ts-ignore
    return subelements;
}


const promise = loadItems()


</script>

<div class="plantBox">
	{#await promise}
    {:then database}
    {#each database.species as element}

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="plant" id="{"plant" + element.id}" tabindex="0" on:click={() => openPlant("plant" + element.id)} role="button">

        <div class="row1">
            <div class="col1">
                <div class="imgBox">
                    <img src="{`/Database/IMG/Species/${String(element.id).padStart(2, '0')}.jpg`}" alt="{element.name_hun}">
                </div>
            </div>
            <div class="col2">
                <h3>{element.name_hun}</h3>
                <p>{element.name_lat}</p>
            </div>
        </div>

        <div class="row2">
            {#each getSubspecies("plant" + element.id) as subelement}
            <div class="row1 indent1 subSpecies">

                <div class="col1">
                    <div class="imgBox">
                        <img src="{`/Database/IMG/Subspecies/${String(subelement.id).padStart(2, '0')}.jpg`}" alt="{subelement.name_hun}">
                    </div>
                </div>
                <div class="col2">
                    <h3>{subelement.name_hun}</h3>
                    <div class="addRow">
                        <input type="number" value="10">
                        <button>Letesz</button>
                    </div>
                    
                </div>
            </div>
            <div class="plantDetails indent1" style="display: none;">
                <p>
                    <!--{subelement.description}-->
                    Tőtáv: {subelement.plantDistance} cm <br> Sortáv: {subelement.rowDistance} cm
                </p>


            </div>
            {/each}
        </div>
    </div>

    {/each}
    {/await}


</div>


<style lang="scss">

    $speciesColor: rgb(234, 192, 150);
    $subSpeciesColor: rgb(224, 185, 145);

    .plantBox{
        display: flex;
        flex-direction: column;
        width: fit-content;
        height: 100vh !important;
        overflow-y: auto;
        overflow-x: hidden;

        background-color: rgb(231, 205, 148);
    }





    .imgBox{
        height: 70px;
        width: 70px !important;
        display: flex;
        align-self: center;
        margin-left: 4px;

        img{

            object-fit: cover;
            width: 60px;
            height: 60px;
            border: 1px solid black;
            align-self: center;
        
        }
    }

    .plant{


        display: flex;
        flex-direction: column;
        border: 0.5px solid black;

        .row1{
            width: 320px !important;
            height: 70px !important;
            display: flex;

            :hover{
                cursor: pointer !important;
            }
        }

        .row1, .plantDetails{
            background-color: $speciesColor;
        }

        .indent1{
            background-color: $subSpeciesColor;
            margin-left: auto;
            margin-right: auto;
            width: 292px !important;
            
        }
        .subSpecies{
            border: 1px solid rgb(120, 75, 16);
            box-shadow: 0.5px 0.5px 2px; 
        }

        .plantDetails{
            width: 320px !important;
            border: 0.5px solid black;
            border-top: none;
            display: flex;
            flex-direction: column;

            p{
                text-align: justify;
                margin: 10px;
            }

            // Amit el kellene érnem:
            //    - egyszerre csak egy species lehet nyitva
            //    - ha kinyitod, megváltozik az adott species színe
            //    - a subspeciesek színei a default többi species színével egyeznek


        }
  
        .row2{
            display: none;
            flex-direction: column;
            padding: 7px 0 12px 0;
            gap: 6px;
            background-color: $speciesColor;
        }




        .col1{
            display: flex;
            align-items: center;
            width: 70px;
        }
        .col2{
            display: flex;
            align-content: center;
            flex-direction: column;
            width: 100%;

            .addRow{
                padding-top: 10px;
                padding-right: 10px;
                height: 40px;
                display: flex;
                justify-content: right;
                align-items: center;
                gap: 2.5px;


                input{
                    width: 55px;
                    background-color: rgb(221, 202, 178);
                }
                button{
                    background-color: rgb(224, 200, 134);
                }
            }
        }

        h3{
            margin: 0 0;
            margin-top: 3px;
        }
        p{
            margin: 0;
        }
    }

    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: #888; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }


</style>





