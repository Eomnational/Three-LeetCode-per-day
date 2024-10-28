/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let s=[];
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            s.push(matrix[i][j]);
        }
    }
    let left=0,mid,right=s.length-1;
 
    while(left<=right){
       mid=left+((right-left)>>1);
       if(s[mid]>target){
         right=mid-1;
       }else if(s[mid]<target){
         left=mid+1;
       }else if(s[mid]===target){
         return true;
       }
    }
    return false;
 };