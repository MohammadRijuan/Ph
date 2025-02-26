// 1. where to add
const subList = document.getElementById('sub-list');

// 2. what to be added
const li = document.createElement('li');
li.innerText = 'computer science';

// 3. add the child
subList.appendChild(li)




const bodyContainer = document.getElementById('body-container');
// console.log(bodyContainer)

const section = document.createElement('section');
const h1 = document.createElement('h1');

h1.innerText='vALO LAGENA'
section.appendChild(h1);

bodyContainer.appendChild(section);










// set innerHtml directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>
<ul>
<li>tshirt</li>
<li>pant</li>
<li>chaddi</li>
<li>shirt</li>
</ul>
`

bodyContainer.appendChild(sectionDress);

