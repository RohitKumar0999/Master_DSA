/* --- Intersection b/w two sorted array----
T.C => O(M*Log(N))
S.C => O(K) Where K is no of distinct elements, which is equal min(m,n)

Output Should contains only the distinct interseting elements b/w the two arrays.
*/

const IsElementExist = (arr,element,start,end)=>{
    let mid = Math.floor((start+end)/2);
    if(start>end)
        return false;
    if(arr[mid]===element)
        return true;
    if(arr[mid]>element)
        return IsElementExist(arr,element,start,mid-1);
    if(arr[mid]<element){
        return IsElementExist(arr, element, mid+1,end);
    }
}



const IntersectionOfSortedArray = (arr1,arr2)=>{
    let m = arr1.length;
    let n = arr2.length;
    let res = [];
    for(let i=0;i<m;i++){
        if(arr1[i]!=arr1[i-1]){
        const isPresent =  IsElementExist(arr2,arr1[i],0,n-1);
        if(isPresent)
            res.push(arr1[i]);
        }
    }
    return res;
}

let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39];
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

//O/P : [3, 5, 7, 9, 11, 13, 15, 17, 19, 21]

console.log(IntersectionOfSortedArray(arr1,arr2));