/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res=[];
    for(let i=0;i<numRows;i++){
        const arr= new Array(i+1).fill(1);
        for(let j=1;j<arr.length-1;j++){
            arr[j]=res[i-1][j]+res[i-1][j-1];
        }
        res.push(arr);
    }
    return res;
}
