// OPTIMIZED VERSION OF BUBBLE SORT.
// In case of sorted elements Time Complexity is O(N)
const BubbleSortOptimized = (arr)=>{
    let n= arr.length;
    for(let i=0;i<n-1;i++){
        let swapped = false;
        for(let j=0;j<n-i-1;j++){
            if(arr[j].marks>arr[j+1].marks){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                swapped=true
                }
            }
            if(!swapped) break;
    }
    return arr;
}



let arr=[{name:"a",marks:20}, {name:"d",marks:50}, {name:"b",marks:260}, {name:"c",marks:50}, {name:"e",marks:3}];

console.log("Sorted Array: ", BubbleSort(arr));