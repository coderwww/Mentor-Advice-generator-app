const adviceGenerator = document.querySelector(".advice-generator");
const adviceId = document.querySelector(".advice-id span");
const adviceText = document.querySelector(".advice-text span");

async function getAdvice(){
    const url = 'https://api.adviceslip.com/advice';

    await fetch(url, {cache: "no-store"})
    .then(response => {
        if (response.status >= 400 && response.status < 600) 
            throw new Error("Bad response from server");
        return response;
    })
    .then(response => response.json())
    .then(json => {
        if (json.slip){
            adviceId.textContent = json.slip.id;
            adviceText.textContent = json.slip.advice;
            adviceGenerator.classList.toggle('is-flipped');
        }else{
            console.log(json);
        }
    })
    .catch(err => console.log(err))
};

getAdvice();
document.querySelector(".advice-button").addEventListener('click', event => { getAdvice() });


