export function generator(amount:number, height:number, width:number){

    let plots =Array(amount).fill(Array(height).fill(new Array(width).fill(0)))
    return plots
}

export function populateField(plantList:Array<object>){

 /*   while (plantList.length > 1){
        let chosen:object = plantList[0]

        for(let i = 0; i>plantList.length; i++){
            delete plantList[0]
        }
    }*/


}