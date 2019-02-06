

function something()
{
    var x = localStorage.getItem('bbb');
    x = x * 1 + 1;
    window.localStorage.setItem('bbb', x);
    alert(x);
}

function add_to_cart(id)
{

  var key = 'product_' + id;
  var x = window.localStorage.getItem(key);
  x = x * 1 + 1;
  window.localStorage.setItem(key, x);

}

function cart_get_number_of_items()
{
  var cnt = 0;
  for (var i = 0; i < localStorage.length; i++)
  {
      var key = window.localStorage.key(i);
      var value = window.localStorage.getItem(key);
      if(key.indexOf('product_') == 0)
      {
        cnt = cnt + value * 1;
      }
    }
      //return from method the string variable  "orders"
      return cnt;

}

function cart_get_orders()
{
  //variable "orders" contain string like this
  //"'product_1' = 'count', 'product_2' = 'count', 'product_3 ' = 'count' "
  var orders = '';
  // take each elements  localStorage and if a key begin with " product_"
  // that  add it to  variable "orders"
  for (var i = 0; i < localStorage.length; i++)
  {
      var key = window.localStorage.key(i);
      var value = window.localStorage.getItem(key);
      if(key.indexOf('product_') == 0)
      {
        orders = orders + key + '=' + value + ',';
      }

  }
  //return from method the string variable  "orders"
  return orders;

}
