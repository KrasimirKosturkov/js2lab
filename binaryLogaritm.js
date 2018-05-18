function binaryLogarithm(arr){
    for (let index in arr) {
        console.log(Math.log2(arr[index]))
    }
}
binaryLogarithm([1, 2, 3, 4, 5])