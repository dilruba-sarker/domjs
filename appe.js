const mainContainer=document.getElementById('main-container')
const section=document.createElement('section')
const h1=document.createElement('h1')
h1.innerText='My food belove'
section.appendChild(h1);
mainContainer.appendChild(section)
 const ul =document.createElement('ul')
const li =document.createElement('li')
li.innerText = 'biriny'
 ul.appendChild(li)
 const li2 = document.createElement('li')
 li2.innerText = 'tehari'
  ul.appendChild(li2)
   const li3 = document.createElement('li')
  li3.innerText ='biriny'
 ul.appendChild(li3)
 section.appendChild(ul)