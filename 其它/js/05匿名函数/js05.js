/**
 * 直接调用匿名函数
 */
(function () {
    alert('直接调用匿名函数')
})();


/**
 * 创建无参无返回值的匿名函数
 */
var fun = function () {
    alert('匿名函数测试')
};
fun();

/**
 * 创建有参有返回值的匿名函数
 */
var sum = function (a, b) {
    return a + b;
};

// alert(sum(2, 3))
// alert(sum(2, true))//true会被当做1进行计算
// alert(sum(2, 'abc'))//结果是2abc
/**
 * 返回结果是NaN(not a number)
 * 1.js并不对函数的参数进行检查，它只匹配参数的个数
 * 2.调用sum(2)后a=2，b是undefine，此时2与undefine就会认为undefine不是a number,所以会有ot a number的错误
 */
alert(sum(2))//结果是2abc

alert(sum(5, 4))//程序不会报错，得到结果是9