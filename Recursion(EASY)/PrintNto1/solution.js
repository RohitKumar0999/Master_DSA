// Print the Number from N to 1.
// S.C: theta(N)
// T.C: theta(N)
// Problem is not good to solve with recursion, Iterative way is better.

function PrintNto1(num){
    if(num==0)
        return;    
      console.log(num);
      PrintNto1(num-1);
}

PrintNto1(5); //Output: 5 4 3 2 1