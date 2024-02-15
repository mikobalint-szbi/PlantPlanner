<script lang="ts">

import { database, loadItems } from "$lib/stores/database.js";
    import { json } from "@sveltejs/kit";
import Layout from "../routes/+layout.svelte";
    import type { PlantInput } from "./functions";
    import { generator, populateField, } from "./functions";
    

// document.getElementById("plantBox").style.height = `${window.innerHeight - 50}px !important`

localStorage.plantsOnField = "[]"
let plantsOnField:PlantInput[] = []
let plantsOnField_display:any = []



function openPlant(id: string){

    let plant = document.getElementById(id)!
    let row2 = plant.querySelector('.row2')! as HTMLElement;
    let row1 = plant.querySelector('.row1')! as HTMLElement;
    let color = "rgb(212, 164, 115)"
    let color2 = "rgb(234, 192, 150)"

    // Megnyitja, ha zárva van:
    if (!Array.from(plant.classList).includes("opened")){
        // Először bezárja az összes többi elemet:
        let toClose = document.getElementById("plantBox")!.querySelectorAll(".plant.opened")
        
        toClose.forEach(element => {
            openPlant(element.id)
        });


        // Majd megnyitja a kiválasztottat:
        row2.style.display = "flex";
        plant.style.height = "fit-content"
        row1.style.backgroundColor = color
        row2.style.backgroundColor = color
        plant.classList.add("opened")


    }
    // Bezárja, ha nyitva van:
    else {
        row2.style.display = "none";
        plant.style.height = "fit-content"
        row1.style.backgroundColor = color2
        row2.style.backgroundColor = color2
        plant.classList.remove("opened")
    }
    



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

function openTab1(){
    document.getElementById("tab1")!.classList.add("active")
    document.getElementById("tab2")!.classList.remove("active")
    document.getElementById("plantBox")!.style.display = "flex"
    document.getElementById("statusBox")!.style.display = "none"
}
function openTab2(){
    document.getElementById("tab2")!.classList.add("active")
    document.getElementById("tab1")!.classList.remove("active")
    document.getElementById("statusBox")!.style.display = "flex"
    document.getElementById("plantBox")!.style.display = "none"

}

function updatePlantAmount(subspeciesID: number, tab2:boolean){
    let ii = 0;
    plantsOnField = JSON.parse(localStorage.plantsOnField)


    let idPrefix;
    if (tab2)
        idPrefix = "tab2-subInput"
    else
        idPrefix = "subInput"

    if (document.getElementById(idPrefix + subspeciesID)!.value <= 0){
        document.getElementById(idPrefix + subspeciesID)!.value = 0


        while (ii < plantsOnField.length && !(plantsOnField[ii].id == subspeciesID)){
            ii++;
        }
        if (ii < plantsOnField.length){
            plantsOnField.splice(ii,1)
            plantsOnField_display.splice(ii,1)
        }   
    }
    else{
        ii = 0
        while (ii < plantsOnField.length && !(plantsOnField[ii].id == subspeciesID)){
            ii++;
        }
        if (ii >= plantsOnField.length){
            plantsOnField.push({"amount":document.getElementById(idPrefix + subspeciesID)!.value,"id":subspeciesID})

            let jj = 0
            while (jj < database.subspecies.length && !(database.subspecies[jj].id == subspeciesID)){
                jj++;
            }

            if (jj < database.subspecies.length){
                plantsOnField_display.push( database.subspecies[jj])
            }
            else{
                console.log("ÁÁÁÁÁÁÁÁÁ")
            }
        }
        else{
            plantsOnField[ii] = {"amount":document.getElementById(idPrefix+subspeciesID)!.value,"id":subspeciesID}
        }
    }

    localStorage.plantsOnField = JSON.stringify(plantsOnField)
    


    if (tab2){
        document.getElementById("subInput" + subspeciesID)!.value = document.getElementById("tab2-subInput" + subspeciesID)!.value
    }

}


const promise = loadItems()


</script>

<div class="sideMenu">

    <div class="tabs">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="tab active" id="tab1" on:click={openTab1} role="button" tabindex="0">
            <h3>Összes</h3>
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="tab" id="tab2" role="button" tabindex="0" on:click={openTab2}>
            <h3>Hozzáadott</h3>
        </div>
    </div>
    
    <div class="plantBox" id="plantBox">
    
        {#await promise}
        {:then database}
        {#each database.species as element}
    
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="plant" id="{"plant" + element.id}">
    
            <div class="row1 primary" tabindex="0" on:click={() => openPlant("plant" + element.id)} role="button">
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
                            <input type="number" value="0" min="0" id="{"subInput" + subelement.id}" on:change={() => updatePlantAmount(subelement.id, false)}>
                            <!--button>Hozzáad</button-->
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

    <div class="statusBox" id="statusBox">
        {#each plantsOnField as element, i(i)}
        <div class="plant">
            <div class="row1 primary">
                <div class="col1">
                    <div class="imgBox">
                        <img src="{`/Database/IMG/Subspecies/${String(plantsOnField_display[i].id).padStart(2, '0')}.jpg`}" alt="{plantsOnField_display[i].name_hun}">
                    </div>
                </div>
                <div class="col2 col2-at-tab2">
                    <h3>{plantsOnField_display[i].name_hun}</h3>
                    <input class="tab2-input" type="number" min="0" value="{element.amount}" id="{"tab2-subInput" + plantsOnField_display[i].id}" on:change={() => updatePlantAmount(plantsOnField_display[i].id, true)}>
                </div>
                <div class="col3-at-tab2">
                    <div class="color" style="background-color: #{plantsOnField_display[i].color};"/>
                </div>
            </div>
        </div>
        {/each}
    </div>

    <div class="subButton">
        <button >Algoritmus futtatása</button>
    </div>
    
</div>


<style lang="scss">

    $speciesColor: rgb(234, 192, 150);
    $subSpeciesColor: rgb(229, 189, 148);

    .plantBox{
        height:80% !important;
        display: flex;
        flex-direction: column;
        width: fit-content;
        overflow-y: auto;
        overflow-x: hidden;

        background-color: rgb(231, 205, 148);
    }
    .sideMenu{
        height: 100vh !important;
    }

    .statusBox{
        //box-shadow:  -1px -0.8px 6px black;
        background-color: rgb(214, 162, 112);
        width: 332px;
        height:80% !important;
        z-index: 10;
        overflow-y: scroll;
        position: relative;
        display: none;
        flex-direction: column;
    }

    .subButton{
        height: 12%;
        background-color: rgb(229, 189, 148);
        box-shadow: 0.1px -1px 4px black;
        position: relative;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: center;

        button{
            background-color: rgb(224, 200, 134);
            height: 70%;
            width: 85%;
            font-size: 22px;
            font-family: inherit;
            
        }
        button:hover{
            background-color: rgb(211, 158, 78);
        }
    }



    .tabs{
        height: 8%;
        display: flex;
        flex-direction: row;
        box-shadow: 0.1px 1px 4px black;
        position: relative;
        z-index: 30;
        
        .tab{
            height: 100%;
            width: 50%;
            background-color: rgb(229, 189, 148);;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            
            h3{
                text-align: center;
                display: block;
                width: fit-content;
            }
        }

        .tab.active{
            background-color: rgb(200, 141, 85);
            cursor: default;
        }
        #tab1{
            border-right: 1px solid black;
        }
        
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
    .plant * {
        z-index: 1;
    }

    .plant{

        display: flex;
        flex-direction: column;
        border: 0.5px solid rgb(63, 42, 19);
        border-right: none;
        border-left: none;

        .row1{
            width: 320px !important;
            height: 70px !important;
            display: flex;

        }

        .row1.primary:hover{
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
            padding-top: 3px;
            overflow: hidden;

            h3{
                font-size: 17px;
                white-space: nowrap;
            }
            p{
                font-size: 14px;
            }
            .tab2-input{
                    width: 50px;
                    background-color: rgb(221, 202, 178);
                    margin-top: auto;
                    margin-bottom: auto;
                }

            .addRow{
                padding-top: 10px;
                padding-right: 10px;
                height: 40px;
                display: flex;
                justify-content: right;
                align-items: center;
                gap: 2.5px;


                input{
                    width: 60px;
                    background-color: rgb(221, 202, 178);
                }
                button{
                    background-color: rgb(224, 200, 134);

                }

                button:hover{
                        cursor: pointer !important;
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

    .col2-at-tab2{
        width: 175px !important;
    }

    .col3-at-tab2{
        width: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-right: 2px;

        .color{
            width: 70%;
            height: 68%;
            box-shadow: inset 1px 1px 2px black,
                        inset -1px -1px 2px black;
        }
    }



    /* width */
    ::-webkit-scrollbar {
    width: 12px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: rgb(238, 222, 205); 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: rgb(153, 124, 94);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: rgb(120, 97, 76);
    }


</style>





