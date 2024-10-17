// Here will do union of two unsorted array
// Approch Navive
// T.C => // Theta(m+n) for lineraly traversing. 
// S.C => O(m+n); // May be not equal to size of both array.

function UnionOfUnSortedArray(arr1,arr2){
    let res = new Set(arr1); // liner time
    for(let i=0;i<arr2.length;i++){ //liner time
        res.add(arr2[i]);
        }
    return res.size;
    }
    
    let arr1 = [15,20,5,15]; // of size m
    let arr2 = [15,15,20,17,3]; // of size n
    
    console.log(UnionOfUnSortedArray(arr1,arr2)) // O/P: 5