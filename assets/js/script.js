async function getAdvice() {
  const url = `https://api.adviceslip.com/advice`
  const results = await fetch(url);
  const json = await results.json();
  console.log(json);

}

getAdvice();