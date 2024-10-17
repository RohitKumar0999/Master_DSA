/* --- Intersection b/w two sorted array----
T.C => O(N^2)
S.C => O(N) if stores and return O(1) if want to print the values.

Output Should contains only the distinct interseting elements b/w the two arrays.

* T.C can be Optimized to O(nLogn) by using binary search.
*/
const IntersectionOfSortedArray = (arr1,arr2)=>{
    let m = arr1.length;
    let n = arr2.length;
    let i=0, j=0;
    while(i<m && j<n){
        if(i>0 === arr1[i]===arr1[i-1]){
             console.log(arr1[i])
             i++;
        }
        else if(arr2[j]<arr1[i]){
            j++;
        }
        else if(arr1[i]<arr2[j])
            i++;
        else{
            // console.log(arr1[i]) ;
            process.stdout.write(`${arr1[i]} `); // \r returns the cursor to the start of the line

            i++;
            j++;
        }
        }
}

let arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35,35,35 ,37, 39];
let arr2 = [2, 3, 4, 5, 6, 7, 8];

IntersectionOfSortedArray(arr1,arr2)