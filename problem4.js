
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