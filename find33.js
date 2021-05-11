let inventory = [{"id":1,"car_make":"Lincoln","car_model":"Navigator","car_year":2009},

{"id":2,"car_make":"Mazda","car_model":"Miata MX-5","car_year":2001},

{"id":3,"car_make":"Land Rover","car_model":"Defender Ice Edition","car_year":2010},

{"id":4,"car_make":"Honda","car_model":"Accord","car_year":1983},

{"id":5,"car_make":"Mitsubishi","car_model":"Galant","car_year":1990},

{"id":6,"car_make":"Audi","car_model":"riolet","car_year":1995},

{"id":7,"car_make":"Smart","car_model":"Fortwo","car_year":2009},

{"id":8,"car_make":"Audi","car_model":"4000CS Quattro","car_year":1987},

{"id":9,"car_make":"Ford","car_model":"Windstar","car_year":1996},

{"id":10,"car_make":"Mercedes-Benz","car_model":"E-Class","car_year":2000},

{"id":11,"car_make":"Infiniti","car_model":"G35","car_year":2004},

{"id":12,"car_make":"Lotus","car_model":"Esprit","car_year":2004},

{"id":13,"car_make":"Chevrolet","car_model":"Cavalier","car_year":1997},

{"id":14,"car_make":"Dodge","car_model":"Ram Van 1500","car_year":1999},

{"id":15,"car_make":"Dodge","car_model":"Intrepid","car_year":2000},

{"id":16,"car_make":"Mitsubishi","car_model":"Montero Sport","car_year":2001},

{"id":17,"car_make":"Buick","car_model":"Skylark","car_year":1987},

{"id":18,"car_make":"Geo","car_model":"Prizm","car_year":1995},

{"id":19,"car_make":"Oldsmobile","car_model":"Bravada","car_year":1994},

{"id":20,"car_make":"Mazda","car_model":"Familia","car_year":1985},

{"id":21,"car_make":"Chevrolet","car_model":"Express 1500","car_year":2003},

{"id":22,"car_make":"Jeep","car_model":"Wrangler","car_year":1997},

{"id":23,"car_make":"Eagle","car_model":"Talon","car_year":1992},

{"id":24,"car_make":"Toyota","car_model":"MR2","car_year":2003},

{"id":25,"car_make":"BMW","car_model":"525","car_year":2005},

{"id":26,"car_make":"Cadillac","car_model":"Escalade","car_year":2005},

{"id":27,"car_make":"Infiniti","car_model":"Q","car_year":2000},

{"id":28,"car_make":"Suzuki","car_model":"Aerio","car_year":2005},

{"id":29,"car_make":"Mercury","car_model":"Topaz","car_year":1993},

{"id":30,"car_make":"BMW","car_model":"6 Series","car_year":2010},

{"id":31,"car_make":"Pontiac","car_model":"GTO","car_year":1964},

{"id":32,"car_make":"Dodge","car_model":"Ram Van 3500","car_year":1999},

{"id":33,"car_make":"Jeep","car_model":"Wrangler","car_year":2011},

{"id":34,"car_make":"Ford","car_model":"Escort","car_year":1991},

{"id":35,"car_make":"Chrysler","car_model":"300M","car_year":2000},

{"id":36,"car_make":"Volvo","car_model":"XC70","car_year":2003},

{"id":37,"car_make":"Oldsmobile","car_model":"LSS","car_year":1997},

{"id":38,"car_make":"Toyota","car_model":"Camry","car_year":1992},

{"id":39,"car_make":"Ford","car_model":"Econoline E250","car_year":1998},

{"id":40,"car_make":"Lotus","car_model":"Evora","car_year":2012},

{"id":41,"car_make":"Ford","car_model":"Mustang","car_year":1965},

{"id":42,"car_make":"GMC","car_model":"Yukon","car_year":1996},

{"id":43,"car_make":"Mercedes-Benz","car_model":"R-Class","car_year":2009},

{"id":44,"car_make":"Audi","car_model":"Q7","car_year":2012},

{"id":45,"car_make":"Audi","car_model":"TT","car_year":2008},

{"id":46,"car_make":"Oldsmobile","car_model":"Ciera","car_year":1995},

{"id":47,"car_make":"Volkswagen","car_model":"Jetta","car_year":2007},

{"id":48,"car_make":"Dodge","car_model":"Magnum","car_year":2008},

{"id":49,"car_make":"Chrysler","car_model":"Sebring","car_year":1996},

{"id":50,"car_make":"Lincoln","car_model":"Town Car","car_year":1999}];


/*
function make(inventory1)

{

i=0;

for (i=1;i<inventory1.length+1;i++)

                {

                if (inventory1[i].id==33)

                                {

                                console.log("Car 33 is a " + inventory1[i].car_year + " " + inventory1[i].car_make + " " + inventory1[i].car_model + "\n")

                                }

                }

 

}

make(inventory)

function last(inventory1)

{

console.log("Last car is a " + inventory1[inventory1.length-1].car_make + " " + inventory1[inventory1.length-1].car_model)

}

last(inventory)
*/

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

sort1(inventory)


//console.log(yest.length)

/*
function years(inventory1)

{

k=0;

var year_car=new Array()

for (k=0;k<inventory1.length;k++)

{

year_car.push(inventory1[k].car_year)

}

year_car.sort()

console.log("All the years are: " + year_car)

let b=new Array()
m=0;
for (m=0;m<year_car.length;m++)
{
if (! b.includes(year_car[m]))
{
    b.push(year_car[m])
}

}
console.log(" Only the unique years are: " + b)


}

 

years(inventory)
*/
/*
function year2000(inventory1)

{

var acceptable= new Array();
l=0;
for (l=0;l<inventory1.length;l++)
{
    if (inventory1[l].car_year<2000)
    {
        acceptable.push(inventory1[l])
    }
}
console.log("No. of Cars older than the year 2000 is:" + acceptable.length)
m=0
for (m=0;m<acceptable.length;m++)
{
    console.log(acceptable[m])
}
}
year2000(inventory)
*/
/*
function BMWandAUDI(inventory1)

{

var BMWAUDI= new Array();
v=0;
for (v=0;v<inventory1.length;v++)
{
    if (inventory1[v].car_make=="BMW" || inventory1[v].car_make=="Audi")
    {
        BMWAUDI.push(inventory1[v])
    }
}

m=0
for (m=0;m<BMWAUDI.length;m++)
{
    console.log(JSON.stringify(BMWAUDI[m]))
}
}
BMWandAUDI(inventory)
*/