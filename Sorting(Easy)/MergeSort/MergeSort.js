//  --------------- Merge Sort Algorithm ----------------------------

// Time Complexity :
// Best Case: O(n log n)
// Average Case: O(n log n)
// Worst Case: O(n log n)
// It's time complexity is theta(N log(N)) always do these operation in all cases.

// Space Complexity:
// In case of recusrion space complexity is depends upon noOfLevels and the operation we are are doing at each level.
// So in this case ,the no of Level is calculated as (Log2 N + 1) so that's T.C is : theta(logN);
// At each level in merge function we are storing Maximum N elements at each time so it is: theta(N);
// Overall T.C : theta(NlogN)

// This is the Merge Function That we used before
const MergeFunc = (arr, low, mid, high) => {
  let n1 = mid - low + 1,
    n2 = high - mid;
  let left = new Array(n1),right = new Array(n2);

  for (let i = 0; i < n1; i++) left[i] = arr[low + i];
  for (let j = 0; j < n2; j++) right[j] = arr[mid + j + 1];

  let i = 0,
    j = 0,
    k = low;

  while (i < n1 && j < n2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
      k++;
    } else {
      arr[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = right[j];
    j++;
    k++;
  }
};


const MergeSort = (arr, low, high) => {
  if (low >= high) { // Return if array has single element.
    return;
  }

  let mid = Math.floor((low + high) / 2);
  MergeSort(arr, low, mid);
  MergeSort(arr, mid + 1, high);
  MergeFunc(arr, low, mid, high); // Merge FUnction
};

let arr = [55, 3, 22, 11, 2, 4, 5, 11, 132];
MergeSort(arr, 0, arr.length - 1);
console.log(arr);
