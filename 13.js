/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res=[];
    nums.sort((a,b)=>a-b);
    for(let k=0;k<nums.length;k++){
        //当前值>0,三数必然>0
        if(nums[k]>0){
            break;
        }
        //两数相等,已经找过了
        if(nums[k]===nums[k-1]){
            continue;
        }
        //简单边界找完后，定k，动i,j;
        let i=k+1;
        let j=nums.length-1;
        //双指针开始，处理i，j
        while(i<j){
            let sum=nums[k]+nums[i]+nums[j];
            //判断sum<0,说明numsi小了要右动,注意i相同
            if(sum<0){
                i++;
                while(i<j&&nums[i]===nums[i-1]){
                    i++;
                }
            }

            //判断sum>0，sumsj打了左动
            if(sum>0){
                j--;
                while(i<j&&nums[j]===nums[j+1]){
                    j--;
                }
            }
            //sum===0，可能不止一个解继续找
            if(sum===0){
                res.push([nums[k],nums[i],nums[j]]);
                i++;
                j--;
                while(i<j&&nums[i]===nums[i-1]){
                    i++;
                }
                while(i<j&&nums[j]===nums[j+1]){
                    j--;
                }
            }    
        }
    
    }
    return res;
};