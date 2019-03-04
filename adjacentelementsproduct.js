//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example
//For inputArray = [3, 6, -2, -5, 7, 3], the output should be
//adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.


function adjacentElementsProduct(inputArray) {
    let c =inputArray[0]*inputArray[1];   // c is current product of first two elements of an arrays
    let  p = c;
    
    for(let i=0; i<inputArray.length-1; i++){
        let c=inputArray[i]*inputArray[i+1];
        if(c > p){
            p=c;
        }
    }
        return p;
}