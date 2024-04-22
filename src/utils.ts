export function displayDialogue(
  text: string,
  onDisplayEnd: { (): boolean; (): void }
) {
  const dialogueUI = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");

  if (dialogueUI) {
    dialogueUI.style.display = "block";
  }

  let index = 0;
  let currentText = "";
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      if (dialogue) {
        dialogue.innerHTML = currentText;
      }
      index++;
      return;
    }

    clearInterval(intervalRef);
  }, 1);

  const closeBtn = document.getElementById("close");

  function onCloseBtnClick() {
    onDisplayEnd();
    if (dialogueUI) {
      dialogueUI.style.display = "none";
    }
    if (dialogue) {
      dialogue.innerHTML = "";
    }
    clearInterval(intervalRef);
    if (closeBtn) {
      closeBtn.removeEventListener("click", onCloseBtnClick);
    }
  }

  closeBtn?.addEventListener("click", onCloseBtnClick);
}
