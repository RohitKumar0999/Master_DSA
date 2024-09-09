
// Program to Check String is Palindrom  or not 
//T.C : theta(N)
//S.c : theta(N)

// In General
// T.c : O(N)
// S.C : O(N)

const CheckPailndrom = (str,start,end)=>{
    if(start>=end) // Base Case:- Where there is no string
        return true;

    return ((str[start]==str[end]) && CheckPailndrom(str,start+1,end-1) ); // Calling recursion call make small solution and condition with it gives the solution for large problem.
}

console.log(CheckPailndrom("RadaR",0,4)); // Output: true