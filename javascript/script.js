const container = document.querySelector('.container')

for (let i=1; i<=100; i++){
  console.log(i);
  


  if ((!(i % 3)) && (!(i % 5))){
    container.innerHTML +=`
    <div class="square threefive">${'FizzBuzz'}</div>
    `
  } else if (!(i % 3)){
    container.innerHTML +=`
    <div class="square three">${'Fizz'}</div>
    `
  } else if (!(i % 5)){
    container.innerHTML += `
    <div class="square five">${'Buzz'}</div>
    `
  } else{
    container.innerHTML += `
    <div class="square">${i}</div>
    `
  }

}