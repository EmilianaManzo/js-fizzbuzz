const container = document.querySelector('.container')

for (let i=1; i<=100; i++){
  console.log(i);
  
  const fizzbuzz = 'FizzBuzz';
  const fizz = 'Fizz';
  const buzz = 'Buzz';

  if ((!(i % 3)) && (!(i % 5))){
    container.innerHTML +=`
    <div class="square threefive">${fizzbuzz}</div>
    `
  } else if (!(i % 3)){
    container.innerHTML +=`
    <div class="square three">${fizz}</div>
    `
  } else if (!(i % 5)){
    container.innerHTML += `
    <div class="square five">${buzz}</div>
    `
  } else{
    container.innerHTML += `
    <div class="square">${i}</div>
    `
  }

}