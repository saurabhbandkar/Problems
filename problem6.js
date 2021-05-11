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