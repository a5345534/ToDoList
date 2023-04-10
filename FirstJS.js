function showMyName(x, y, z) {
    console.log('x', x);
    console.log('y', y);
    console.log('z', z);
}

function Math(operator, x, y) {
    switch (operator) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y
        case '/':
            return x / y
        default:
            return 'error'
    }
}



var money = 1000;
var 菜販 = true;
var 水果行 = false;
var 飲料店 = true;
var 茶葉行 = "william"
//你媽給你1000買東西
console.log("媽媽給我" + money + "元");
//菜販有開買500
if (菜販) {
    money = money - 500;
    console.log("我在菜販花了500元，剩下" + (money) + "元");
}
//水果行有開買300，沒開到飲料店買200
if (水果行) {
    money = money - 300;
    console.log("我在水果行花了300元，剩下" + (money) + "元");
}
else if (飲料店) {
    money = money - 200;
    console.log("我在飲料店花了200元，剩下" + (money) + "元");
}
//茶葉行老闆如果叫william買50不是買100
if (茶葉行 == "william") {
    money = money - 50;
    console.log("我在茶葉行花了50元，剩下" + (money) + "元");
} else {
    money = money - 100;
    console.log("我在茶葉行花了10元，剩下" + (money) + "元");
}

var point = 2;
switch (point) {
    case 1:
    case 2:
    case 3:
        console.log("小");
        break;
    case 4:
    case 5:
    case 6:
        console.log("大");
        break;
    default:
        console.log("你用的是哪一牌骰子?")
        break;
}

var a = Object;
console.log(a == 1 && a == 2 && a == 3);

for (i = 2; i <= 10; i += 2) {
    console.log(i)
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {

        arr.splice(i, 1);
    }
}
console.table(arr)