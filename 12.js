/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res=0,h;
    let i,j;
    for(i=0,j=height.length-1;i<j;){
        h=Math.min(height[i],height[j]);
        res=Math.max(res,(j-i)*h);
        height[i]<height[j]?i++:j--;
    }
    return res;
}