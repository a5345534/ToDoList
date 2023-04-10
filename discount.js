var reds = {
    height: 185,
    firstName: "Wang",
    lastName: "Reds",
    run: function () {
        console.log('我跑超快');
    },
    isBoy: true,
    phones: ['0987654321', '097878778'],
    myDad: {
        firsrName: 'Wang',
        lastName: 'Andy'
    }
}
var arr = ['lastName', 'firstName', 'height']

function getReds() {
    for (i = 0; i < arr.length; i++) {
        console.log(reds[arr[i]]);
    }
}