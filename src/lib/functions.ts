function generator(amount:number, height:number, width:number){

    let plots =Array(amount).fill(Array(height).fill(new Array(width).fill(0)))
    return plots
}