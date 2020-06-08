const buttonSend = document.querySelector(`.form__submit`);
const textSend = document.querySelector(`.form__text`);

const textResult = document.querySelector(`.form__textarea`);

const addResultText = (text) => {
  textResult.value = `${textResult.value} \n ${text}`;
}

buttonSend.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  addResultText(textSend.value);

  sendQuery(textSend.value);
});


const sendQuery = (data) => {
  fetch(`http://localhost:8081`, {
    method: `POST`,
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => addResultText(response));
}
