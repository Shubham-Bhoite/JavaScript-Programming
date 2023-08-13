//adding button 
let btn = document.getElementById('btn');

//note array
mainNodes = [];

//title
let title = document.getElementById('title');

//alert 
let galert = document.getElementById('galert')
let balert = document.getElementById('balert')

galert.style.display = 'none';
balert.style.display = 'none';

btn.addEventListener('click', function(e) {
  let getNodes = localStorage.getItem('node');
  if (getNodes != null) {
    
    mainNodes = JSON.parse(getNodes);
  }
  let obj = {
    title:title.value
  }
  if (title.value.length == 0) {
    //bad alert
    setTimeout(() => {
      balert.style.display = 'none';
    }, 3000)
    balert.style.display = 'block';

  } else {
    //good alert 
    galert.style.display = 'block';
        setTimeout(() => {
      galert.style.display = 'none';
    }, 3000)

  mainNodes.push(obj);
  localStorage.setItem('node', JSON.stringify(mainNodes));
  }
  title.value='';
  
  
node();
})
function node() {
    let getNodes = localStorage.getItem('node');
let html ="";
  if (getNodes != null) {
    
    mainNodes = JSON.parse(getNodes);
  }
  let color = ['danger', 'success', 'primary', 'grey', 'danger', 'success', 'primary', 'grey', 'danger', 'success'];
  
  let ran = Math.random().toFixed(1) * 10;
    let ran2 = Math.random().toFixed(1) * 10;



mainNodes.forEach(function(element, index) {
  html += `
    <div class="m-3">
    <div class="card my-2 text-bg-${color[ran]} mb-3" style="max-width: 18rem;">
       <div class="card-body">
        <h5 class="card-title">${index+1}.${element.title}</h5>
        <button class="btn btn-danger" id="${index}" onclick="removeElement(this.id)">DELETE</button>
      </div>
    </div>
  </div>
  
  `;
})
let nodee = document.getElementById('note');

if(getNodes != '[]' && getNodes != null)  {
  
  nodee.innerHTML = html;
}else{
  nodee.innerHTML = `<h1> There is no note here write your first list`
}
}

node();
function removeElement(index) {
    let getNodes = localStorage.getItem('node');

  (index);
    if (getNodes != null) {
    mainNodes = JSON.parse(getNodes);
  }
mainNodes.splice(index , 1);
  localStorage.setItem('node', JSON.stringify(mainNodes));
node();
}
