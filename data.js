

    const pserialNumber=[1,2,3,4,5,6];

    const pproductName=["Book","pdf","book","book","book","book"]

    const pplanPrice=[12999,499,599,8999,3111,1001]

    const pquantity=[3,2,1,5,7,9];

    const pcgstPercent=["25%","17%","22%","5%","1%","21%"];

    const psgstPercent=["8%","3%","5%","6%","2%"];

    const pRow=[7];


///  for pcgstPercent Number of array
    var datastoring=[]
    pcgstPercent.map((e)=>{

        datastoring.push(e.substring(0,e.length-1))
    })
    console.log("datastoriing in data array",datastoring)
var datastoringLength=datastoring.length;
var datastoriingInNumber=[]
for(let i=0;i<datastoringLength;i++)
{
    datastoriingInNumber.push(+datastoring[i]);
}

console.log("data storing in number of array",datastoriingInNumber);

//    psgstPercent

var Sdatastoring=[]
psgstPercent.map((e)=>{

    Sdatastoring.push(e.substring(0,e.length-1))
})
console.log("datastoriing in data array",Sdatastoring)
var SdatastoringLength=Sdatastoring.length;
var SdatastoriingInNumber=[]
for(let i=0;i<SdatastoringLength;i++)
{
    SdatastoriingInNumber.push(+Sdatastoring[i]);
}
console.log("datastoriing in data array DATA file",SdatastoriingInNumber)

module.exports={pRow,pserialNumber,pproductName,pplanPrice,pquantity,pcgstPercent,
    psgstPercent,datastoriingInNumber,datastoringLength,SdatastoriingInNumber,SdatastoringLength}
