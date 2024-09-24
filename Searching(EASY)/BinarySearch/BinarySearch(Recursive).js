// Time Complexity: O(log N)
// Space Comp;exity: O(log N)

function binary(arr,low,high,element){
    // let high=arr.length-1;
    let mid = Math.floor((low+high)/2);
    console.log("low = "+low,"mid = "+mid,"high = "+high,"arr[mid]="+arr[mid]+"element"+element)
    if(low>high)
    return -1;
    if(arr[mid]==element)
    return mid;
    
    if(element>arr[mid]){
        low = mid+1;
    }else if(element<arr[mid]){
        high = mid-1;
    }
    return binary(arr,low,high,element)
}
console.log(binary(arr,0,arr.length-1,61));