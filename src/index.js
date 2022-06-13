// Time complexity O(N^2)
// SPACE complexity O(1) SINCE WE ARE NOT DEFINING TO ANY CONSTANT
var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log([i, j]);
      }
    }
  }
};
twoSum([2, 7, 11, 15], 9);

// Time complexity O(N)
// SPACE complexity O(N)
// USING HASH MAP

var twoSum = function (nums, target) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    var value = nums[i];
    var complementPair = target - value;
    //console.log(map[complementPair])
    //console.log(map[value])
    if (map[complementPair] !== undefined) {
      console.log([map[complementPair], i]);
    } else {
      map[value] = i;
    }
  }
};
twoSum([2, 7, 11, 15], 9);
