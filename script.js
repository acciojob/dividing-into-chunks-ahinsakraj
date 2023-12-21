const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let subarray = [],ans=[],maxsum=0;
	for(let i=0;i<arr.length;i++){
		if(maxsum+arr[i] <= n){
			maxsum+=arr[i];
			subarray.push(arr[i]);
		}
		else{
			ans.push(subarray);
			maxsum=arr[i];
			subarray[arr[i]];
		}
	}
	return ans;
};