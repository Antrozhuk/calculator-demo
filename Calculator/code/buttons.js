function delite(){
    document.getElementById('pole').value= ""
}
function division(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if((string[size-1]=='/')||(string[size-1]=='+')||
       (string[size-1]=='*')||(string[size-1]=='-')||(string[size-1]=='.'))
    {
        string=string.substring(0,size-1);
    }
    document.getElementById('pole').value=string+ '/'
}
function multiplication(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if((string[size-1]=='/')||(string[size-1]=='+')||
       (string[size-1]=='*')||(string[size-1]=='-')||(string[size-1]=='.'))
    {
        string=string.substring(0,size-1);
    }
    document.getElementById('pole').value=string+ '*'
}
function difference(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if((string[size-1]=='/')||(string[size-1]=='+')||
       (string[size-1]=='*')||(string[size-1]=='-')||(string[size-1]=='.'))
    { 
        string=string.substring(0,size-1);
    }
    document.getElementById('pole').value=string+ '-'   
}
function sum(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if((string[size-1]=='/')||(string[size-1]=='+')||
       (string[size-1]=='*')||(string[size-1]=='-')||(string[size-1]=='.'))
    {
        string=string.substring(0,size-1);
    }
    document.getElementById('pole').value=string+ '+'
}
function sqrt(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if((string[size-1]=='/')||(string[size-1]=='+')||
       (string[size-1]=='*')||(string[size-1]=='-')||(string[size-1]=='.'))
    {
        string=string.substring(0,size-1);
    }
    document.getElementById('pole').value=Math.sqrt(eval(string));
}
function square(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if((string[size-1]=='/')||(string[size-1]=='+')||
       (string[size-1]=='*')||(string[size-1]=='-')||(string[size-1]=='.'))
    {
        string=string.substring(0,size-1);
    }
    document.getElementById('pole').value=eval(string)**2;
}
function equal(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if((string[size-1]=='/')||(string[size-1]=='+')||
       (string[size-1]=='*')||(string[size-1]=='-')||(string[size-1]=='.'))
    {
        string=string.substring(0,size-1);
    }
    document.getElementById('pole').value=eval(string);
}
function dot(){
    let string=document.getElementById('pole').value+'.';
    if(eval(string))
    {
        document.getElementById('pole').value+= '.'
    }
}
function nul(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('pole').value+= '.0'
    }else
     if((size==0)||(string[size-1]=='/')||(string[size-1]=='+')||
    (string[size-1]=='*')||(string[size-1]=='-'))
    {
        document.getElementById('pole').value+= '0.'
    }
    else
    document.getElementById('pole').value+= 0
}
function one(){
    document.getElementById('pole').value+= 1
}
function two(){
    document.getElementById('pole').value+= 2
}
function three(){
    document.getElementById('pole').value+= 3
}
function four(){
    document.getElementById('pole').value+= 4
}
function five(){
    document.getElementById('pole').value+= 5
}
function six(){
    document.getElementById('pole').value+= 6
}
function seven(){
    document.getElementById('pole').value+= 7
}
function eight(){
    document.getElementById('pole').value+= 8
}
function nein(){
    document.getElementById('pole').value+= 9
}