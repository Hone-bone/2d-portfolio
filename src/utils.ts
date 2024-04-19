export function displayDialog(text, onDisplayEnd) {
  const dialogueUI = document.getElementById("textbox-container");
  const dialoge = document.getElementById("dialoge");

  dialogueUI.style.display = "block";
  let index = 0;
  let currentText = "";
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText;
      index++;
      return;
    }

    clearInterval(intervalRef);
  }, 1);

  const closeBtn = document.getElementById("close");

  function onCloseBtnClick() {
    onDisplayEnd();
    dialogueUI.style.display = "none";
    dialogue.innerHTML = "";
    clearInterval(intervalRef);
    closeBtn.removeEventListener("click", onCloseBtnClick);
  }

  closeBtn.addEventListener("click", onCloseBtnClick);
}
