// T.C: O(N)
// S.C: O(1)

// Problem is solved with the help of the Moore Algorithm.


function majorityElement(arr) {
    let n = arr.length;
    let count=0
    let candidate = -1;
    for(let i=0;i<n;i++){  // Finding the candidate with max probobility to win
        if(count==0){
            candidate = arr[i];
            count = 1;
        }
        else if(candidate == arr[i]){
            count++;
        }
        else{
            count--;
        }
    }
    
    count = 0;
    
    for(const num of arr){       // again checking count of Candidate
        if(num===candidate)
          count++;
    }
    
    if(count>n/2)
      return candidate;
    else
      return -1;
}