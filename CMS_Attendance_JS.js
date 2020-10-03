var Input=document.querySelectorAll('.Input');
var Output=document.querySelectorAll('.Output');
var Menu=document.querySelector('#Menu');
var Submit=document.querySelector('#S');
var Wafer=document.querySelector('#wafer');
var change=document.querySelector('#change');
var menu=document.querySelector('.Menu');
Menu.addEventListener("click",visible);
Submit.addEventListener("click",popup);
change.addEventListener("click",cls);
Wafer.style.visibility="hidden";
menu.style.display="none";
var choice=null;
for(let i=0;i<Input.length;i++)
{
    Input[i].addEventListener("click",enable);
}
function enable()
{
    for(let i=0;i<Input.length;i++){
        Input[i].disabled=true;
}
    this.disabled=false;
    choice=this.innerHTML;
    for(let i=0;i<Output.length;i++){
       Output[i].disabled=false;
}}
function visible(){
 if(menu.style.display=="none")
    menu.style.display="block";
    else
    menu.style.display="none";
}
function popup(){
    Wafer.style.visibility="visible";
    document.getElementById('p').innerHTML="STATUS: "+ choice;
}
function cls(){
    for (let i=0;i<Input.length;i++){
        Input[i].disabled=false;
    }
   for (let i=0;i<Output.length;i++){
       Output[i].disabled=true;
    }
    Wafer.style.visibility="hidden";
}