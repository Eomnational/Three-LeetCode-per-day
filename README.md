# Three-LeetCode-per-day

记录刷题过程

1.136.只出现一次的数字：巧用异或，a^a=0,a^0=a 满足交换律和结合律  
2.169. 多数元素:摩尔算法，初始化候选人和计数器，第一遍遍历数组，选出候选人  
3.75. 颜色分类:排序秒了  
4.31. 下一个排列:定义一个交换函数，先从后往前找第一个降序的位置，然后找到了 l 再找比 l 大的就交换，最后将将 l+1 到 r-1 的部分反转  
5.287. 寻找重复数：二分查找  
6.35. 搜索插入位置:简单二分，左闭右闭  
7.74. 搜索二维矩阵:二分查找 把矩阵转换成一维数组然后用二分查找  
8.153. 寻找旋转排序数组中的最小值 二分，左开右闭,middle > right ：代表最小值一定在 middle 右侧，middle < right ：代表最小值一定在 middle 左侧，middle 既不大于 left 指针的值，也不小于 right 指针的值，代表着 middle 可能等于 left 指针的值，或者 right 指针的值，这时候让 right--找  
9.33. 搜索旋转排序数组:二分，如果中间数小于最右边数，则右半段是有序的，如果中间数大于最右边数，则左半段是有序的  
10.34. 在排序数组中查找元素的第一个和最后一个位置:二分，先找到 target，然后从 target 两边找  
11.283. 移动零:简单双指针，先删除 0，然后在后面补 0  
12.11. 盛最多水的容器 简单双指针，判断高度和面积，然后 hi，hj 对比搜索  
13.15. 三数之和 先判断 k 定 k(nums[k]>0 或者 nums[k]===nums[k-1]),然后判断 i，j 根据 sum 的大小来
