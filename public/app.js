

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
  update_orders_input();
  update_orders_button();
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

function update_orders_input()
{
  // initialize "order" by string like this
  //"'product_1' = 'count', 'product_2' = 'count', 'product_3 ' = 'count' "
  var orders = cart_get_orders();
  //Access to button control through selector, using into the control  id = 'orders_input'
  //and output to the control the string like this
  //"'product_1' = 'count', 'product_2' = 'count', 'product_3 ' = 'count' "
  $('#orders_input').val(orders);
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



function update_orders_button()
{
  // variable text is string, that writed on button
  //create string like 'Cart (number_of_ordered_pizza)'
  var text = 'Cart('+ cart_get_number_of_items() + ')';
  // access to cart button by selector in layout.erb <button id = 'orders_button'
  $('#orders_button').val(text);
}
