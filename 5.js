var findDuplicate = function(nums) {
    let left = 1;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;

        // 计算小于等于 mid 的元素数量
        for (let num of nums) {
            if (num <= mid) count++;
        }

        // 根据 count 和 mid 的关系调整左右边界
        if (count > mid) {
            right = mid; // 重复元素在 [left, mid]
        } else {
            left = mid + 1; // 重复元素在 [mid + 1, right]
        }
    }

    // 当 left == right 时就是重复的数字
    return left;
};
