/*
Merge  Two Sorted Arrays.
================================
Given two sorted arrays, merge them into a single sorted array.
Solution: Optimized
For two sorted arrays a of length m and b of length m
TimeComplexity : theta(m+n)
SpaceComplexity : theta(m+n)
*/
const MergeTwoSorted = (a,b)=>{
    let res = [];
    let i = 0, j = 0;
    let m = a.length , n=b.length;

    while(i<m && j<n){
        if(a[i] <= b[j]){        // Here = for equal we consider left array for stability
            res.push(a[i]);
            i++;
        }
        else{
            res.push(b[j]);
            j++;
        }
    }

    while(i<m){
        res.push(a[i]);
        i++;
    }


    while(j<m){
        res.push(b[j]);
        j++;
    }

    return res;    
}

let a = [10,15,20];
let b = [5,6,6,13,15];
console.log(MergeTwoSorted(a,b));