const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  let result = [];
  let currentSubarray = [];

  for (const num of arr) {
    // Check if adding the current number exceeds the maximum sum
    if (currentSubarray.reduce((sum, value) => sum + value, 0) + num <= n) {
      currentSubarray.push(num);
    } else {
      // Start a new subarray if adding the current number exceeds the maximum sum
      result.push(currentSubarray);
      currentSubarray = [num];
    }
  }

  // Add the last subarray
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, parseInt(n))));
