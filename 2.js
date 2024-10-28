/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length===0) return null;
    let count=1;
    let res=nums[0];
    for(let i=1;i<nums.length;i++){
        if(nums[i]===res){
              count++;
        }else{
         count--;
         if(count===0){
             res=nums[i];
             count=1;
         }
        }
    }
     count=0;
    for(let key of nums){
         if(key===res){
             count++;
         }
    }
    if(count>Math.floor(nums.length/2)){
         return res;
    }
    return null;
 };