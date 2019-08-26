// function to make random color generator

function changeColor()
{
    var x = Math.floor(Math.random()* 256);
    var y = Math.floor(Math.random()* 256);
    var z = Math.floor(Math.random()* 256);
    
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background =bgColor;
}

// create a close button and append it to list

var myNodelist  = document.getElementsByTagName("LI");
var i;

for(var i =0; i<myNodelist.length; i++)
    {
        var span = document.createElement("span");
        var txt  = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

// when click on the close button its hides the current list item
var close = document.getElementsByClassName("close");
var i;
for(var i =0; i<close.length; i++)
    {
        close[i].onclick = function()
        {
            this.parentElement.style.display ="none";
        }
    }
// add checked symbol when clicking on list item

var list = document.querySelector("ul");
list.addEventListener('click',function(ev){
                      if(ev.target.tagName == "LI"){
    ev.target.classList.toggle('checked');
}
                      },false);

// function which will add a new to do item when we will click on add button

function AddElement()
{
   var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue =="")
        {
            alert("please enter something!")
        }
    else{
        document.getElementById("myul").appendChild(li);
    }
    document.getElementById("input").value ="";
    
    // add close button to the list
    
    var span = document.createElement("span");
var txt = document.createTextNode("\u00D7");
 span.className ="close";
span.appendChild(txt);
li.appendChild(span);
    
    for(i=0; i<close.length; i++)
        {
            close[i].onclick = function()
            {
                this.parentElement.style.display ="none";
            }
        }
}

// user can also press enter to add new item to the list
// this is an IIFE

(function(){
    var inputValue = document.getElementById("input");
    inputValue.onkeyup = function(e)
    {
        if(e.keyCode == 13)
            {
                AddElement();
            }
    }
})();


