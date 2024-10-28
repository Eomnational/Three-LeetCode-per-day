var nextPermutation = function(nums) {
    let swap = (l, r, t) => {
        t = nums[l];
        nums[l] = nums[r];
        nums[r] = t;
    }

    let l = -1, r = nums.length;

    // 从后向前找到第一个降序位置
    for (let i = r; i--; ) {
        if (nums[i] > nums[i - 1]) {
            l = i - 1;
            i = 0;
        }
    }

    // 如果找到了降序位置 l
    if (l !== -1) {
        for (let i = r; i-- > l; ) {
            if (nums[i] > nums[l]) {
                swap(i, l);
                i = 0;
            }
        }
    }

    // 将 l+1 到 r-1 的部分反转
    while (++l < --r) {
        swap(l, r);
    }
};