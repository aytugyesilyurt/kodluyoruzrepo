let nums = [2, 3, 6, 6, 5];

function getSecondLargest(nums) {
	let i;
	let maxValue = 0;
	let secondMaxValue = 0;

	for (i = 0; i < nums.length; i++) {
		if (nums[i] > maxValue) {
			secondMaxValue = maxValue;
			maxValue = nums[i];
		} else if (nums[i] < maxValue && nums[i] > secondMaxValue) {
			secondMaxValue = nums[i];
		} else if (i == nums.length + 1) {
			return secondMaxValue;
		}
	}
}

console.log(getSecondLargest(nums));
