

function something()
{
    var x = localStorage.getItem('bbb');
    x = x * 1 + 1;
    window.localStorage.setItem('bbb', x);
    alert(x);
}
