// reverse
function reverse(arr) {
    const result = [];
    for (let i = arr.length-1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
}
console.log(reverse([2,3,4,56,5,8]));


//every
function every(arr, myFunc) {
   return everyCallBack(arr);
}
function everyCallBack(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]>40) {
            return false; 
        }
    }
    return true;
}
console.log(every([5,32,12,34,5,23]))


//some
function some(arr, myFunc) {
    return someCallBack(arr);
}
function someCallBack(arr) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i]<40) {
            return true; 
        }
    }
    return false
}
console.log(some([523,323,112,2234,225,23]))


//filter
function filter(arr, myFunc) {
    const result = [];
    for(let i=0; i<arr.length; i++) {
        result.push(filterCallBack(arr[i]))
    }
    return result;
}
function filterCallBack(num) {
    if(num>18) {
        return num;
    }
}
console.log(filter([23,43,13,54,23,12]))


//foreach
function forEach(arr, myFunc) {
    return forEachCallBack(arr);
}
function forEachCallBack(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;   
}
console.log(forEach([12,23,23,34,45,65]));


//map
function map(arr, myFunc) {
    return mapCallBack(arr);
}
function mapCallBack(arr) {
    const result = [];
    for(let i=0; i<arr.length; i++){
        result.push(Math.sqrt(arr[i]));
    }
    return result;
}
console.log(map([1,4,9,16,25,36]))


