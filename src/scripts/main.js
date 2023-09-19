


async function getAdvice() {
    
    const res = await fetch('https://api.adviceslip.com/advice');
    const {slip} = await res.json();
    displayAdvice(slip);
  
}

function displayAdvice(data){
    const idElement = document.querySelector('.id');
    const adviceElement = document.querySelector('.advice');   
    idElement.innerHTML = data.id;
    adviceElement.innerHTML = data.advice; 
}

getAdvice()

 document.querySelector('.btn').addEventListener('click', getAdvice )


