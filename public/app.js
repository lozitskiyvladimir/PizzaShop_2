

function something()
{
    var x = localStorage.getItem('aaa');
    window.localStorage.setItem('aaa', 555);
    alert(x);
}
