function solution(nums){
    // set output to array
    let output = [];
    // ternary statement to check if nums is null or empty
    return nums == null || nums.length < 1 ? output = [] : output = nums.sort((a, b) => a-b);
  }