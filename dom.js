document.querySelector('#submit-btn').addEventListener("click",function(){
const textAreaElement=document.getElementById('text-area');
const areaValu=textAreaElement.value ;
const p = document.createElement("p");
p.innerText=areaValu;
const container=document.querySelector("#review");
container.appendChild(p)

})

