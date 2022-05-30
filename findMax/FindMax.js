let arr = [2, 5, 6, 456, 2, 76, 1000, 123, 888];

function findMax(arr){
    let max = arr[0];
    arr.forEach((value) => {
        if(max < value){
            max = value;
        }
    })

    return max;
}

console.log(findMax(arr));