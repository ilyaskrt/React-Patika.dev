
//kullanıcı adını girip yanındaki butona basıldığında kullanıcı adını Local storage e yazar ve ekrana alert verir
let btn=document.getElementById("welcome");
		btn.onclick=function(){
			let user=document.getElementById("user");
            localStorage.setItem("user",user.value);
			window.alert("Hoşgeldin: "+user.value);
			
		}		

//veri girilip + butonuna basıldığında html kısmındaki listeye eklemeye çalıştım ama olmadı :(
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("data").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myList").appendChild(li);
    
 
    document.getElementById("data").value = "";
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    /*
   // POST isteği ile verimizi servera gönderelim  
    let payload = {
        "content": "inputValue",
        "isCompleted": "false",
        "id": "23"
    }
    fetch('https://61c37fd59cfb8f0017a3ebde.mockapi.io/api/todos', {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

*/
}

//fetch ile mock api daki verileri console a yazdırabiliyoruz
fetch('https://61c37fd59cfb8f0017a3ebde.mockapi.io/api/todos')
    .then((response) => response.json())
    .then((json) => console.log(json));


// clear a tıkladığımızda sayfadaki verileri kaldırıyor
let clear = document.getElementsByClassName("clear");
    let i;
    for (i = 0; i < clear.length; i++) {
      clear[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }



