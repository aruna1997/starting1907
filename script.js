function check()
{
    var x=document.form1.name.value;
    var y=document.form1.age.value;
    var z=document.form1.email.value;
    if(x.length===0)
    {
        window.alert("Name Cannot Be Empty");
    }
    if(y===0||y<18)
    {
     window.alert("Sorry you are not eligible");
    }else
    if(y>100)
    {
        window.alert("age limit is 18-100");
    }
    var a=z.search(/@/);
    var b=z.length;
    var c=z.search(/.com/);
    var d=b-4;
    if(b===0)
    {
        window.alert("email field cannot be empty");
    }else
    if(c!=d||c===-1||a===-1)
    {
        window.alert("incorrect Email"+c);
    }    
    
}


