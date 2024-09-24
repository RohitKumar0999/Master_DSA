// Problem:- Return Number of times an element occures within the array;
//T.C: O(log n)
import { FirstOccurceIndexFromEnd } from "../FindFirstOccurenceInSorted/FOccuranceFromEnd.js";
import {FOccuranceFromStart} from "../FindFirstOccurenceInSorted/FOccuranceFromStart.js";
console.log(FOccuranceFromStart);
const NoOfOccurance = (arr,element)=>{
    let Fi = FOccuranceFromStart(arr,element);
    console.log("Fi",Fi);
    if(Fi==-1)
        return 0;
    else{
       console.log(FirstOccurceIndexFromEnd(arr,element))
        return (FirstOccurceIndexFromEnd(arr,element)-Fi+1);
    }
}

let arr=[1,2,3,4,4,5,6,7,7,7,7,7,7,7,7,7,8,9,];
console.log("No Of Occurance of 7 is:",NoOfOccurance(arr,7));