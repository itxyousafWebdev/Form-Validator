const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var a2 = ["one", "two", "three", "four"];

var str = "sdfljndsl";
str.length

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();

    var a1 = [userName, email, password, password2]; 
    for(var j=0;j<4;j++)
    {
        if(a1[j].value==='')
        {
            emptybox(a1[j].id + " is required", a2[j]);
        }
        else{
            if(a2[j]==="one")
            {
                checkLenght("one", userName, 5, 15);
            }
            else if(a2[j]==="two")
            {
                checkLenght("two", email, 5, 25);
            }
            else if(a2[j]==="three")
            {
                checkLenght("three", password, 5, 10);
            }
            else if(a2[j]==="four")
            {
                checkLenght("four", password2, 5, 10);
            }
            
        }
  
    }
});


function errorFunction(massage, no)
{
    for(var i=0;i<4;i++)
    {
        if(a2[i]===no)
        {
            document.querySelector("." + no).classList.add("error");
            document.querySelector(".error" + (i+1)).innerHTML = massage;
        }
    }
}

function emptybox(Boxmassage,boxName)
{
    errorFunction(Boxmassage, boxName);
    if(document.querySelector("." + boxName).matches(".success")==true)
    {
        document.querySelector("." + boxName).classList.remove('success');
    }
        
}

function filledBox(boxName)
{
    document.querySelector("." + boxName).classList.add("success");
        if(document.querySelector("." + boxName).matches(".error")==true)
        {
            document.querySelector("." + boxName).classList.remove('error');
        }
}

function checkLenght(typ, inputValue, min, max)
{
    var str = "" + inputValue.value;
    for(var l=0;l<4;l++)
    {    
        if(a2[l]===typ)
        {
            if(str.length<min&&str.length>0)
            {
                emptybox("Minimum lenght for " + inputValue.id + " is " + min, a2[l]);
            }
            else if(str.length>max)
            {
                emptybox("Maximum lenght for " + inputValue.id + " is " + max, a2[l]);
            }
            else{
                if(password.value!=password2.value)
                {
                    emptybox("Passwords are not matching!","four");
                }
                else{
                    filledBox(a2[l]);
                }       
            }
        }   
    }   
}
