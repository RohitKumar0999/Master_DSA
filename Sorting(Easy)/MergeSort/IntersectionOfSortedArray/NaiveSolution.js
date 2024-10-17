/* --- Intersection b/w two sorted array----
T.C => O(N^2)
S.C => O(N) if stores and return O(1) if want to print the values.

Output Should contains only the distinct interseting elements b/w the two arrays.

* T.C can be Optimized to O(nLogn) by using binary search.
*/
const IntersectionOfSortedArray = (arr1,arr2)=>{
    let m = arr1.length;
    let n = arr2.length;
    let res = [];
    for(let i=0;i<m;i++){
        if(arr1[i]!=arr1[i-1]){
            for(let j=0;j<n;j++){
                if(arr1[i] == arr2[j] && arr2[j-1] != arr2[j]){
                        res.push(arr1[i]);
                    }
            }
        }
    }
    return res;
}

let arr1 = [5, 10, 15, 20];
let arr2 = [1, 5, 10, 20, 25];

console.log(IntersectionOfSortedArray(arr1,arr2));