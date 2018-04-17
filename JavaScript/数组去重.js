/**
 * Created by ttc on 18-2-5.
 */
var arr = [1,1,1,2,3,1,4,2,3,5];
for(var i = 0; i < arr.length; i++)
{
    for(var j = i+1; j<arr.length;j++)
    {
        if(arr[i] == arr[j])
        {
            arr.splice(j,1);
            j--;
        }
    }
}
console.log(arr);