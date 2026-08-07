let display=document.getElementById("display");
function appendValue(value){
    display.value+= value;
}
function cleardisplay(){
    display.value="" ;
}

function deletelast(){
    display.value= display.value.slice(0,-1);
}
function calculate(){
    display.value= eval(display.value);
}

document.addEventListener("keydown",function(event){
if(event.key>="0"&& event.key<="9"){
    appendValue(event.key);
}
else if(event.key=="+"|| event.key=="-"||event.key=="*"||
    event.key=="/"|| event.key==".")
    {
     appendValue(event.key);
    }
    else if (event.key=="Enter") 
        {
            calculate();
        }
        else if (event.key=="Backspace") 
        {
           deletelast();
        }
        else if (event.key=="Escape") 
        {
           cleardisplay();
        
        }
    });
    