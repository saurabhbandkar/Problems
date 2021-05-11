function sort1(inventory1)

{

inventory1.sort(function(x, y) {

  var carmodel1 = x.car_model.toUpperCase();
  var carmodel2 = y.car_model.toUpperCase();

  if (carmodel1 < carmodel2) 
  {
    return -1;
  }
  else if (carmodel1 > carmodel2) 
  {
    return 1;
  }
  else
  {
  return 0;
  }
});

j=0;

for (j=0;j<inventory1.length;j++)
{
console.log(inventory1[j])
}
}
