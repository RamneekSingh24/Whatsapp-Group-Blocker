/* 
  README
  Get rid of messages from a person in a whatsapp group.
   Replace BLOCKED_NAME and GROUP_NAME 
   Load the file / add the code below in developer console 
   (https://developer.mozilla.org/en-US/docs/Tools) 
 */

// Saved Contact Name
BLOCKED_NAME = "Shreyansh Zanskar";
// Group name
GROUP_NAME = "Chomusuke";

const insideGroup = () => {
  e = document.querySelector("._21nHd");
  return e?.childNodes[0].innerText?.includes(GROUP_NAME);
};

const isBlockedMsg = (msgElem) => {
  const elem = msgElem.querySelector(".copyable-text");
  const f1 =
    elem &&
    elem.dataset.prePlainText &&
    elem.dataset.prePlainText.includes(BLOCKED_NAME);
  const f2 = msgElem
    .querySelector(".hooVq")
    ?.childNodes[0].innerText.includes(BLOCKED_NAME);
  return f1 || f2;
};

document.addEventListener(
  "DOMNodeInserted",
  function (event) {
    if (!insideGroup()) return;
    msgs = document.querySelector(".y8WcF")?.querySelectorAll(".message-in");
    if (msgs.length) {
      msgs.forEach((msg) => {
        if (isBlockedMsg(msg)) {
          msg.innerHTML = `<a> Blocked msg from ${BLOCKED_NAME} <\a>`;
        }
      });
    }
  },
  false
);
