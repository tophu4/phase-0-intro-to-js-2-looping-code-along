// Code your solutions in this file

function writeCards(arr,msg) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(`Thank you, ${arr[i]}, for the wonderful ${msg} gift!`);
    }
    return newArr;
}

function countDown(n) {
    let i = n
    while(i >= 0) {
        console.log(i--);
    }
}