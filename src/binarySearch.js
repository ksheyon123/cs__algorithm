// What is the Binary Search?

// > Binary search is an algorithm that finds a way to reach a target in a sorted list.
// 

/*
Q. 1 ~ 10까지의 정렬된 수에서 target을 찾는 함수를 구하시오.

startIdx = 0;
lastIdx = nums.length - 1;
**/


const binarySearch = (nums, target) => {
  let startIdx = 0;
  let lastIdx = nums.length - 1;
  let m = 0;
  let iteration = 0;
  while (startIdx <= lastIdx) {
    ++iteration;
    m = Math.floor((startIdx + lastIdx) / 2);
    if (nums[m] < target) {
      startIdx = m + 1;
    } else if (nums[m] > target) {
      lastIdx = m - 1;
    } else {
      console.log("iteration : ", iteration, " idx : ", m);
      return m;
    }
  }
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 9);

