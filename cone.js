function cone(r, h){
    let l = Math.sqrt(r * r + h * h)
    console.log('volume =' +Math.PI * r * r * h /3)
    let b = Math.PI * r * r
    let L = Math.PI * r * l
    console.log('area =' +(b + L));
}
cone(3, 5)