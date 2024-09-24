// Smallest Positive missing number
// Difficulty: Medium 
// Given an array arr[] of size N, find the smallest positive number missing from the array.

 

// Example 1:

// Input:
// N = 5
// arr[] = {1,2,3,4,5}
// Output: 6
// Explanation: Smallest positive missing
// number is 6.

const SmallestPosNum = (arr,N)=>{
    let i =0;
    for(;i<N;i++){
        let FindBool=-1;
        for(let j=0;j<N;j++){
            if(arr[j]==i+1){
                FindBool=1;
                break;
            }
        }
        if(FindBool==-1){
            console.log("return i",i);
            return i+1;
        }
    }
    console.log("End i",i+1);
    return i+1;
}

console.log(SmallestPosNum([2, 3, -7, 6, 8, 1, -10, 15],8));