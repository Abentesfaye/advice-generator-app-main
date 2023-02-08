var number =document.getElementById("number");
console.log(number);
var advice = document.getElementById("quot");
console.log(advice);
const getAdvice = async () =>{
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    return data;
};

/*some commet */

getAdvice().then(data => {
    advice.innerText = data.slip.advice;
    number.innerText = " ADVICE #"+data.slip.id;
    console.log('resolved', data)
}).catch(error => console.log('error', error));
