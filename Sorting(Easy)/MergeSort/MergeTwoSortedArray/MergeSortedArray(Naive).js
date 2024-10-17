/*
Merge  Two Sorted Arrays.
================================
Given two sorted arrays, merge them into a single sorted array.
Solution: Naive
For two sorted arrays a of length m and b of length m
TimeComplexity : O((m+n)log(m+n))
SpaceComplexity : O(m+n)
*/
const MergeTwoSorted = (a,b)=>{
    let result = [];
    result.push(...a);
    result.push(...b);

    result.sort((a,b)=>a-b);
    return result;    
}

let a = [10,15,20];
let b = [5,6,6,13,15];
console.log(MergeTwoSorted(a,b));