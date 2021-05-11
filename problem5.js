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