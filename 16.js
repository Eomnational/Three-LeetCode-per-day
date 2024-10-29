/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let t=1,res=1;
    nums=Array.from(new Set(nums.sort((a,b)=>a-b)));
    if(nums.length===0){
        return 0;
    }
    if(nums.length===1){
        return 1;
    }
    for(let i=1;i<nums.length;i++){
        if(nums[i]-nums[i-1]===1){
            t++;
            res=Math.max(res,t);
        }else{
            t=1;
        }
    }
    return res;
};