let string = "";
let buttons = document.querySelectorAll('.button');

function clear(string){
  string="";
}

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
      string ="";
      //document.querySelector('input').value = "Swet";
      
      if(e.target.innerHTML != "="){
        document.querySelector('input').value = "";
      }
      
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
