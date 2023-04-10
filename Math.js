function CreateEle(a, b, c) {
    var Ele = document.createElement(a);
    b.forEach(e => { Ele.setAttribute(e[0], e[1]) });
    Ele.innerText = c;
    var bodyEles = document.querySelector('body');
    bodyEles.append(Ele);
}
//var divArrA = [['id','d1'],['class','red'],['style','color:red']];
//CreateEle('div',divArrA,'我應該要變成紅色')
//var inputArrA = [['type','text'],['value','你看到我了']]
//CreateEle('input',inputArrA,'')
function reSort() {
    document.querySelector('#gg').remove()
    document.querySelector('body').prepend(
        document.querySelector('#c2'),
        document.querySelector('#d1'),
        document.querySelector('#c1'),
        document.querySelector('#d2'))
    document.querySelector('body').style.display = 'flex'
}

function doubleDiv() {
    Array.from(document.querySelector('.test').children).forEach(x => x.innerText = parseInt(x.innerText) * 2)
}
