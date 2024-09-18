const changeButton = document.getElementById('changeButton');
const targetParagraph = document.querySelector('#conceitos-basicos p');
let originalText = targetParagraph.textContent; // Store the original text

changeButton.addEventListener('click', () => {
  if (targetParagraph.classList.contains('changed')) {
    // If the text is changed, revert it
    targetParagraph.textContent = originalText; 
    targetParagraph.classList.remove('changed');
  } else {
    // If the text is not changed, apply the change
    targetParagraph.textContent = "O DNA é a molécula que carrega a informação genética!";
    targetParagraph.classList.add('changed');
  }
});