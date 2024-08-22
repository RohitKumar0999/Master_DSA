// Who has the majority?
// Difficulty: Basic
// Given an array arr[] of size N and two elements x and y, use counter variables to find which element appears most in the array. If both elements have the same frequency, then return the smaller element.
// Note:  We need to return the element, not its count.


// Approach : Just use the simple conditional statement to get the desired output;
function MostFrequentElement(arr,n,x,y){
    let xCount=0,yCount=0;

    for(let i=0;i<n;i++){
        
        if(arr[i]===x)
            xCount++;

        if(arr[i]===y)
            yCount++;
    }

    if(xCount>yCount)
        return x;
    else if(yCount>xCount)
        return y;
    else
      { 
         if(x<y)
            return x;
        else
            return y;
       }
}


console.log(MostFrequentElement([1,2,3,4,5,6,7,8],8,1,7));