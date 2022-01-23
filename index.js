// function myfunction()
// {
//     document.getElementById("mid4").innerHTML="Durgesh Prajapat";
// }

function currentTime()
{
    let date=new Date();
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    let session ="AM";

    if(hh>12)
    {
        session="PM"
    }
    hh=(hh<10)?"0"+hh:hh;
    mm=(mm<10)?"0"+mm:mm;
    ss=(ss<10)?"0"+ss:ss;

    let time=hh+":"+mm+":"+ss+" "+session;

    document.getElementById("clock").innerText=time;
    var t=setTimeout(function(){
        currentTime() } ,1000);
}
currentTime();
var value=1;
var selectValue =document.getElementById("opt").value;
if(selectValue==value)
{
    const item=document.createElement("div");
    item.setAttribute("id","element");
    item.innerHTML="good morning";
    // const parentDiv=document.getElementById("students");
    // parentDiv.appendChild(item);
}
{/* <div id="mid3"></div> */}
