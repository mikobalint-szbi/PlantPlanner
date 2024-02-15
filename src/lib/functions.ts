import { database, loadItems } from "$lib/stores/database.js";



export interface PlantInput{
        id:number
        amount:number
}

export function generator(amount:number, height:number, width:number){

    let plots =Array(amount).fill(new Array(height).fill(new Array(width).fill(0)))
    return plots
}

export function populateField(){
    let plantList:PlantInput[] = sessionStorage.plantsOnField
    let lastpos = [0,0,0]
    let prevPD=0;
    let tempsecondplant
    let lrd=0
    while (plantList.length > 1){
        let chosen:PlantInput = plantList[0]
        database.subspecies.forEach(subspecie => {
            if (subspecie.id == chosen.id){
                
                database.like.forEach(pref =>{
                    if (subspecie.speciesID == pref.species1){
                        for (let i =0;i>plantList.length;i++){
                            database.subspecies.forEach(ssspecies=>{
                                if (ssspecies.id == plantList[i].id){
                                    tempsecondplant = ssspecies.speciesID
                                    if (tempsecondplant = pref.species2){
                                        if (ssspecies.rowDistance>subspecie.rowDistance){
                                            lrd=ssspecies.rowDistance
                                        }else{
                                            lrd=subspecie.rowDistance
                                        }
                                        Project[lastpos[0]][lastpos[1]+prevPD+subspecie.plantDistance][lastpos[2]+subspecie.plantDistance]=subspecie.id
                                        lastpos=[lastpos[0],lastpos[1]+prevPD+subspecie.plantDistance,lastpos[2]+subspecie.plantDistance]
                                        for(let i = 1; i>subspecie.plantDistance; i++){
                                            for(let j = 1; j>lrd;j++){
                                                Project[lastpos[0]][lastpos[1]+i][lastpos[2]+j]=-1
                                                Project[lastpos[0]][lastpos[1]-i][lastpos[2]+j]=-1
                                                Project[lastpos[0]][lastpos[1]][lastpos[2]+j]=-1
                                            }
                                            Project[lastpos[0]][lastpos[1]+i][lastpos[2]]=-1
                                            Project[lastpos[0]][lastpos[1]-i][lastpos[2]]=-1
                                            Project[lastpos[0]][lastpos[1]][lastpos[2]+i]=-1
                                            Project[lastpos[0]][lastpos[1]][lastpos[2]-i]=-1
                                        }
                                        Project[lastpos[0]][lastpos[1+prevPD+ssspecies.plantDistance]][lastpos[2+ssspecies.plantDistance]]=ssspecies.id
                                        lastpos=[lastpos[0],lastpos[1]+prevPD+ssspecies.plantDistance,lastpos[2]+ssspecies.plantDistance]
                                        prevPD=subspecie.plantDistance
                                        for(let i = 0; i>ssspecies.plantDistance; i++){
                                            for(let j = 1; j>lrd;j++){
                                                Project[lastpos[0]][lastpos[1]+i][lastpos[2]+j]=-1
                                                Project[lastpos[0]][lastpos[1]-i][lastpos[2]+j]=-1
                                                Project[lastpos[0]][lastpos[1]][lastpos[2]+j]=-1
                                            }
                                            Project[lastpos[0]][lastpos[1]+i][lastpos[2]]=-1
                                            Project[lastpos[0]][lastpos[1]+-i][lastpos[2]]=-1
                                            Project[lastpos[0]][lastpos[1]][lastpos[2]+i]=-1
                                            Project[lastpos[0]][lastpos[1]][lastpos[2]-i]=-1
                                        }
                                        prevPD=ssspecies.plantDistance
                                        plantList[i].amount--
                                        plantList[0].amount--
                                    }
                                }
                            })
                            
                        }
                    }else if (subspecie.speciesID == pref.species1){
                        
                        for (let i =0;i>plantList.length;i++){
                            database.subspecies.forEach(ssspecies=>{
                                if (ssspecies.id == plantList[i].id){
                                    tempsecondplant = ssspecies.speciesID
                                    if (tempsecondplant = pref.species2){
                                        if (ssspecies.rowDistance>subspecie.rowDistance){
                                            lrd=ssspecies.rowDistance
                                        }else{
                                            lrd=subspecie.rowDistance
                                        }
                                        Project[lastpos[0]][lastpos[1]+prevPD+subspecie.plantDistance][lastpos[2]+subspecie.plantDistance]=subspecie.id
                                        lastpos=[lastpos[0],lastpos[1]+prevPD+subspecie.plantDistance,lastpos[2]+subspecie.plantDistance]
                                        for(let i = 1; i>subspecie.plantDistance; i++){
                                            for(let j = 1; j>lrd;j++){
                                                Project[lastpos[0]][lastpos[1]+i][lastpos[2]+j]=-1
                                                Project[lastpos[0]][lastpos[1]-i][lastpos[2]+j]=-1
                                                Project[lastpos[0]][lastpos[1]][lastpos[2]+j]=-1
                                            }
                                            Project[lastpos[0]][lastpos[1]+i][lastpos[2]]=-1
                                            Project[lastpos[0]][lastpos[1]-i][lastpos[2]]=-1
                                            Project[lastpos[0]][lastpos[1]][lastpos[2]+i]=-1
                                            Project[lastpos[0]][lastpos[1]][lastpos[2]-i]=-1
                                        }
                                        Project[lastpos[0]][lastpos[1+prevPD+ssspecies.plantDistance]][lastpos[2+ssspecies.plantDistance]]=ssspecies.id
                                        lastpos=[lastpos[0],lastpos[1]+prevPD+ssspecies.plantDistance,lastpos[2]+ssspecies.plantDistance]
                                        prevPD=subspecie.plantDistance
                                        for(let i = 0; i>ssspecies.plantDistance; i++){
                                            for(let j = 1; j>lrd;j++){
                                                Project[lastpos[0]][lastpos[1]+i][lastpos[2]+j]=-1
                                                Project[lastpos[0]][lastpos[1]-i][lastpos[2]+j]=-1
                                                Project[lastpos[0]][lastpos[1]][lastpos[2]+j]=-1
                                            }
                                            Project[lastpos[0]][lastpos[1]+i][lastpos[2]]=-1
                                            Project[lastpos[0]][lastpos[1]+-i][lastpos[2]]=-1
                                            Project[lastpos[0]][lastpos[1]][lastpos[2]+i]=-1
                                            Project[lastpos[0]][lastpos[1]][lastpos[2]-i]=-1
                                        }
                                        prevPD=ssspecies.plantDistance
                                        plantList[i].amount--
                                        plantList[0].amount--
                                    }
                                }
                            })
                        }
                    
                    }
                    
                })
                lrd = subspecie.rowDistance
                database.dislike.forEach(h8r=>{
                    if(h8r.species1==subspecie.speciesID){
                        if (subspecie.speciesID != h8r.species2){
                            
                            Project[lastpos[0]][lastpos[1]+prevPD+subspecie.plantDistance][lastpos[2]+subspecie.plantDistance]=subspecie.id
                            lastpos=[lastpos[0],lastpos[1]+prevPD+subspecie.plantDistance,lastpos[2]+subspecie.plantDistance]
                            for(let i = 1; i>subspecie.plantDistance; i++){
                                for(let j = 1; j>lrd;j++){
                                    Project[lastpos[0]][lastpos[1]+i][lastpos[2]+j]=-1
                                    Project[lastpos[0]][lastpos[1]-i][lastpos[2]+j]=-1
                                    Project[lastpos[0]][lastpos[1]][lastpos[2]+j]=-1
                                }
                                Project[lastpos[0]][lastpos[1]+i][lastpos[2]]=-1
                                Project[lastpos[0]][lastpos[1]-i][lastpos[2]]=-1
                                Project[lastpos[0]][lastpos[1]][lastpos[2]+i]=-1
                                Project[lastpos[0]][lastpos[1]][lastpos[2]-i]=-1
                                prevPD=subspecie.plantDistance
                            }
                        }else{
                            lastpos[1]+=lrd
                        }
                    }else if (h8r.species2==subspecie.speciesID){
                        if(h8r.species1==subspecie.speciesID){
                            if (subspecie.speciesID != h8r.species1){
                                
                                Project[lastpos[0]][lastpos[1]+prevPD+subspecie.plantDistance][lastpos[2]+subspecie.plantDistance]=subspecie.id
                                lastpos=[lastpos[0],lastpos[1]+prevPD+subspecie.plantDistance,lastpos[2]+subspecie.plantDistance]
                                for(let i = 1; i>subspecie.plantDistance; i++){
                                    for(let j = 1; j>lrd;j++){
                                        Project[lastpos[0]][lastpos[1]+i][lastpos[2]+j]=-1
                                        Project[lastpos[0]][lastpos[1]-i][lastpos[2]+j]=-1
                                        Project[lastpos[0]][lastpos[1]][lastpos[2]+j]=-1
                                    }
                                    Project[lastpos[0]][lastpos[1]+i][lastpos[2]]=-1
                                    Project[lastpos[0]][lastpos[1]-i][lastpos[2]]=-1
                                    Project[lastpos[0]][lastpos[1]][lastpos[2]+i]=-1
                                    Project[lastpos[0]][lastpos[1]][lastpos[2]-i]=-1
                                    prevPD=subspecie.plantDistance
                                }
                            }else{
                                lastpos[1]+=lrd
                            }
                        }
                    }
                })
            }
            
            
        });
        if (lastpos[1]+40>Project[lastpos[0]].length){
            lastpos[2]+=lrd
            lastpos[1]=0
        }
        if ((Project[lastpos[0]][lastpos[1]].lastIndexOf[-1])+80>Project[lastpos[0]][lastpos[1]].length){
            lastpos[0]++
            lastpos[1]=0
            lastpos[2]=0
        }
        for (let i = 0; i<plantList.length;i++){
            if(plantList[i].amount<=0) plantList.splice(i)
        }

    }


}

let inpW = 100
let inpH = 300
let inpA = 3

export var Project = generator(inpA, inpH, inpW);

