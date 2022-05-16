async function GetAdvice() {
  const url = `https://api.adviceslip.com/advice`;
  const results = await fetch(url);
  const json = await results.json();
  if (results.status === 200) {
    WriteAdvice({
      advice: `"${json.slip.advice}"`,
      number: `Advice #${json.slip.id}`
    })
  }
  else {
    WriteAdvice({
      advice: 'Sorry, something went wrong! Try again later!',
      number: 'ERROR!'
    })
  }
  console.log(results, json);
}

function WriteAdvice(obj) {
  const advice = document.querySelector('#advice');
  const number = document.querySelector('#advice-id');

  advice.innerHTML = obj.advice;
  number.innerHTML = obj.number;
}

GetAdvice();

document.querySelector('#button').addEventListener('click', GetAdvice);