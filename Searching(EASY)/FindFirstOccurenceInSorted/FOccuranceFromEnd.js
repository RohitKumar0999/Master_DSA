// Problem:- Find the First Occurance of element in sorted array from the End.
// T.C: O(log(n)) 


export const FirstOccurceIndexFromEnd = (arr,element)=>{
    let low = 0, n=arr.length, high=n-1 ;

    while(low<=high){
        // console.log("Inital Low",low);
        // console.log( "Initial High",high);

        
        let mid = Math.floor((low+high)/2);
        // console.log("mid",mid);
        if(arr[mid]===element){
            if(mid==n-1 || arr[mid+1] != element)
                return mid;
            else{
                low=mid+1;
                // console.log("low Indcrsesed")
            }
        }
        else if(arr[mid]<element){
          low= mid+1;
        //   console.log("low",low);
        }
        else        
        {
            high = mid-1;
            // console.log("high",high);
        }
    }

    return -1;
}

console.log("Result",FirstOccurceIndexFromEnd([5,10,10,10,10,20,20],10));
