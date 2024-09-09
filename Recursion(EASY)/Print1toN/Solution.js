// Print the Number from 1 to Nv.
// S.C: theta(N)
// T.C: theta(N)
// Problem is not good to solve with recursion, Iterative way is better.

function Print1toN(num){
    if(num==0)
    return
    Print1toN(num-1);
    console.log(num);
    return;    
}

Print1toN(33); //Output: 1 2 3 4 5