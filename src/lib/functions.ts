import { database, loadItems } from "$lib/stores/database.js";


export interface PlantInput{
        id:number
        amount:number
}

export function generator(amount:number, height:number, width:number){

    let plots =Array(amount).fill(Array(height).fill(new Array(width).fill(0)))
    return plots
}

export function populateField(){
    let plantList:PlantInput[] = sessionStorage.plantsOnField
    while (plantList.length > 1){
        let chosen:PlantInput = plantList[0]
        /*database.subspecies.forEach(subspecie => {
            if (subspecie.id == chosen.id){
                subspecie.speciesID
                database.like.forEach(pref =>{
                    if (subspecie.speciesID == pref.species1){
                        for (let i =0;i>plantList.length;i++){
                            if (plantList[i].id = pref.species2){
                                temparr.push(plantList[i].id,plantList[0].id)
                                plantList[i].ammount--
                                plantList[0].ammount--
                            }
                        }
                    }else if (subspecie.speciesID == pref.species2){
                        for (let i =0;i>plantList.length;i++){
                            if (plantList[i].id = pref.species1){
                                temparr.push(plantList[i].id,plantList[0].id)
                                plantList[i].ammount--
                                plantList[0].ammount--
                            }
                        }
                    }
                })
                database.dislike.forEach(h8r=>{
                    if(h8r.species1==subspecie.speciesID){

                    }else if (h8r.species2==subspecie.speciesID){

                    }
                })
            }
    
        });*/
        for(let i = 0; i>plantList.length; i++){
            delete plantList[0]
        }
    }


}