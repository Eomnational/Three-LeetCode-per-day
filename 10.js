var searchRange = function(nums, target) {
    let left = 0, mid, right = nums.length - 1;
    while (left <= right) {
        mid = left + ((right - left) >> 1);
        if (nums[mid] > target) {
            right = mid - 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            break;
        }
    }
    // 如果找不到目标值
    if (left > right) return [-1, -1];
    
    let i = mid, j = mid;
    // 向左找到第一个目标值
    while (i >= 0 && nums[i] === target) {
        i--;
    }
    // 向右找到最后一个目标值
    while (j < nums.length && nums[j] === target) {
        j++;
    }
    return [i + 1, j - 1];
 };