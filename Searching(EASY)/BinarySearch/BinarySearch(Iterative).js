// Binary Search In Iterative way
//T.C -> O(log(n))
//S.C -> O(1)
let arr = [10,11,13,15,19,20,23,27,29,30,34,39,40,43,49,50,55,58,60];

function BinarySearch(arr,element){
    let low =0,high=arr.length-1,mid=Math.floor((low+high)/2);
    while(low<=high){
    if(arr[mid] == element)
    return mid;
   if(element>arr[mid])
    {
   low = mid+1;
    }
   if(element<arr[mid]){
   high = mid-1;
   }
   mid=Math.floor((low+high)/2);
    }
 return -1;
}
console.log(binary(arr,61)); // Output: -1