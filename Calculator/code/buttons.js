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
    if(string[size-1]=='/')
    { 
        string=-eval(string.substring(0,size-1));
        document.getElementById('pole').value=string+ '/' 
    }
    if(string[size-1]=='*')
    { 
        string=-eval(string.substring(0,size-1));
        document.getElementById('pole').value=string+ '*' 
    }
    else if(string[size-1]=='-')
    {
        string=string.substring(0,size-1);
        document.getElementById('pole').value=string+ '+'
    }
    else if((string[size-1]=='-')||(string[size-1]=='.'))
    {
        string=string.substring(0,size-1);
        document.getElementById('pole').value=string+ '-'   
    }
    else document.getElementById('pole').value=string+ '-'
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
    let string=document.getElementById('pole').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('pole').value+= '.1'
    }
    else
    document.getElementById('pole').value+= 1
}
function two(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('pole').value+= '.2'
    }
    else
    document.getElementById('pole').value+= 2
}
function three(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('pole').value+= '.3'
    }
    else
    document.getElementById('pole').value+= 3
}
function four(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('pole').value+= '.4'
    }
    else
    document.getElementById('pole').value+= 4
}
function five(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('pole').value+= '.5'
    }
    else
    document.getElementById('pole').value+= 5
}
function six(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('pole').value+= '.6'
    }
    else
    document.getElementById('pole').value+= 6
}
function seven(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('pole').value+= '.7'
    }
    else
    document.getElementById('pole').value+= 7
}
function eight(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('pole').value+= '.8'
    }
    else
    document.getElementById('pole').value+= 8
}
function nein(){
    let string=document.getElementById('pole').value;
    let size=string.length;
    if(string=='0')
    {
        document.getElementById('pole').value+= '.9'
    }
    else
    document.getElementById('pole').value+= 9
}