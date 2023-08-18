const enterName = document.getElementById('name');
const submitButton = document.querySelector('#submitButton');
const outPutDiv = document.querySelector('#outputDiv');


submitButton.addEventListener('click', function(e){
  e.preventDefault(); 

 
  let yourName = enterName.value;
 console.log(yourName);
 
 const newContent = outPutDiv.innerHTML

 outPutDiv.innerHTML = newContent + `Your Name: ${yourName}<br>`;
});

