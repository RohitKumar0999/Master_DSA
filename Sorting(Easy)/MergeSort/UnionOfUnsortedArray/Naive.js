// Here will do union of two unsorted array
// Approch Navive
// T.C => 
    // Theta(m) for pushing m elements.
    // Theta(n) for pushing n elements.
    // Theta(m+n(log(m+n)) for sorting 
// Overall T.C => theta((m+n)log(m+n))
// S.C => theta(m+n);

function UnionOfUnSortedArray(arr1,arr2){
    let res = [];
    res.push(...arr1); // pushing m elemensts which takes theta(m)
    res.push(...arr2); // pushing n elements which takes theta(n)
    res.sort((a,b)=>a-b) // Soting m+n elements take O((m+n)log(m+n))
    let disticElementCount = 0;
    for(let i=0;i<res.length;i++){
        if(res[i] != res[i+1]){
            disticElementCount++;  // Counting the distinct elements.
            }
        }
    return disticElementCount;
    }
    
    let arr1 = [15,20,5,15]; // of size m
    let arr2 = [15,15,20,17]; // of size n
    
    console.log(UnionOfUnSortedArray(arr1,arr2))