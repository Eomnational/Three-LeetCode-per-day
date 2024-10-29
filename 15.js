/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map(); // 创建哈希表

    for (let str of strs) {
        // 将字符串排序并转换为数组的形式作为键
        const sortedStr = str.split('').sort().join('');

        // 如果键不存在，则初始化一个空数组
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }

        // 将原字符串添加到对应的数组中
        map.get(sortedStr).push(str);
    }

    // 返回哈希表中所有的值，即字母异位词的分组
    return Array.from(map.values());
};