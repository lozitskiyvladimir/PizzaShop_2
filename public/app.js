

function something()
{
    var x = localStorage.getItem('bbb');
    x = x * 1 + 1;
    window.localStorage.setItem('bbb', x);
    alert(x);
}

function add_to_cart(id)
{
<<<<<<< HEAD

=======
>>>>>>> tag_2
  var key = 'product_' + id;
  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x);
<<<<<<< HEAD

=======
}

function cart_get_number_of_items()
{
  for (var i = 0; i < localStorage.length; i++)
  {
      var key = window.localStorage.key(i);
      var value = window.localStorage.getItem(key);
      if(key.indexOf('product_') == 0)
      {
        snt = snt + value * 1;
      }
    }
      //return from method the string variable  "orders"
      return snt;

   }
>>>>>>> tag_2
}
