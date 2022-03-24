
if (!localStorage.getItem('counter')) {
    localStorage.setItem('counter', 0);
}

function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);
}

//DOMContentLoaded라는 event가 실행되면 function() 실행됨
//DOMContentLoaded는 html 페이지 전체가 다 로딩되는 이벤트
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter');
    document.querySelector('button').onClick = count;
});