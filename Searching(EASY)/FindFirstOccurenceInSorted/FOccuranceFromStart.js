// Problem:- Find the First Occurance of element in sorted array from the starting.
// T.C: O(log(n)) 


export const FOccuranceFromStart = (arr,element)=>{
    let n = arr.length;
    let low = 0;
    let high = n-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]===element){
            if(mid==0 || arr[mid-1]!=element){
                return mid;
            }
            else{
                high = mid-1;
            }
        }
        else if(arr[mid]<element){
          low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return -1;
}

console.log("Result",FOccuranceFromStart([5,10,10,10,10,20,20],20));

