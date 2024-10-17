// Worst Time Complexity is Theta(N^2)
const BubbleSort = (arr)=>{
    let n= arr.length;
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j].marks>arr[j+1].marks){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                }
            }
    }
    return arr;
}



let arr=[{name:"a",marks:20}, {name:"d",marks:50}, {name:"b",marks:260}, {name:"c",marks:50}, {name:"e",marks:3}];

console.log("Sorted Array: ", BubbleSort(arr));