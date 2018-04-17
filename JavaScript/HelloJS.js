/**
 * Created by ttc on 18-2-5.
 */
/*
var arr=["孙悟空","猪八戒","沙和尚","唐僧"];
var arr2=["太上老君","如来佛祖"];
arr.pop();
arr.push("蜘蛛精");
arr.shift();
arr.unshift("白骨精");
arr.splice(1,0,"红孩儿","牛魔王");
var arr3=arr.concat(arr2);
arr3.reverse();
var str=arr3.join(",");
console.log(str);
var arr4=[5,2,6,8,9,10,16,2,3]
arr4.sort(function (a,b) {
    return a-b;
});
console.log(arr4);*/
/*function fun() {
    console.log("语句一");
    console.log("语句二");
}
fun();
var fun2=function(){
    console.log("你好")
}
fun2();*/
function operate(fun,a,b) {
    console.log(fun(a,b));
};
operate(function (a,b) {
    return a*b;
},1,3);
