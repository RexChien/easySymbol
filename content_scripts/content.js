// symbol data
const symbolList = [
  { symbol: '，', name: "逗號", canSurround: false, description: "用於隔開複句內各分句，或標示句子內語氣的停頓。" },
  { symbol: '、', name: "頓號", canSurround: false, description: "用於並列連用的詞、語之間，或標示條列次序的文字之後。" },
  { symbol: '？', name: "問號", canSurround: false, description: "一、用於疑問句之後。\n二、用於歷史人物生死或事件始末之時間不詳。" },
  { symbol: '！', name: "驚嘆號", canSurround: false, description: "用於感嘆語氣及加重語氣的詞、語、句之後。" },
  { symbol: '：', name: "冒號", canSurround: false, description: "用於總起下文，或舉例說明上文。" },
  { symbol: '。', name: "句號", canSurround: false, description: "用於一個語義完整的句末，不用於疑問句、感嘆句。" },
  { symbol: '；', name: "分號", canSurround: false, description: "用於分開複句中平列的句子。" },
  { symbol: '……', name: "刪節號", canSurround: false, description: "用於節略原文、語句未完、意思未盡，或表示語句斷斷續續等。" },
  { symbol: '．', name: "間隔號", canSurround: false, description: "一、用於書名號乙式書名與篇章卷名之間。\n二、用於書名號乙式套書與單本書名之間。\n三、用於原住民命名習慣之間隔。\n四、用於翻譯外國人的名字與姓氏之間。" },
  { symbol: '—', name: "連接號", canSurround: false, description: "用於連接時空的起止或數量的多寡等。" },
  { symbol: '「', name: "上單引號", canSurround: true, description: "一、用於標示說話、引語、特別指稱或強調的詞語。\n二、引號分單引號及雙引號，通常先用單引號，如果有需要，單引號內再用雙引號，依此類推。\n三、一般引文的句尾符號標在引號之內。\n四、引文用作全句結構中的一部分，其下引號之前，通常不加標點符號。" },
  { symbol: '」', name: "下單引號", canSurround: false, description: "一、用於標示說話、引語、特別指稱或強調的詞語。\n二、引號分單引號及雙引號，通常先用單引號，如果有需要，單引號內再用雙引號，依此類推。\n三、一般引文的句尾符號標在引號之內。\n四、引文用作全句結構中的一部分，其下引號之前，通常不加標點符號。" },
  { symbol: '『', name: "上雙引號", canSurround: true, description: "一、用於標示說話、引語、特別指稱或強調的詞語。\n二、引號分單引號及雙引號，通常先用單引號，如果有需要，單引號內再用雙引號，依此類推。\n三、一般引文的句尾符號標在引號之內。\n四、引文用作全句結構中的一部分，其下引號之前，通常不加標點符號。" },
  { symbol: '』', name: "下雙引號", canSurround: false, description: "一、用於標示說話、引語、特別指稱或強調的詞語。\n二、引號分單引號及雙引號，通常先用單引號，如果有需要，單引號內再用雙引號，依此類推。\n三、一般引文的句尾符號標在引號之內。\n四、引文用作全句結構中的一部分，其下引號之前，通常不加標點符號。" },
  { symbol: '（', name: "上夾注號", canSurround: true, description: "用於行文中需要注釋或補充說明。" },
  { symbol: '）', name: "下夾注號", canSurround: false, description: "用於行文中需要注釋或補充說明。" },
  { symbol: '──', name: "破折號", canSurround: true, description: "用於語意的轉變、聲音的延續，或在行文中為補充說明某詞語之處，而此說明後文氣需要停頓。" },
  { symbol: '《', name: "上雙書名號", canSurround: true, description: "一、《 》多用於書名，〈 〉多用於篇名。\n二、前半不出現在一行之末，後半不出現在一行之首。" },
  { symbol: '》', name: "下雙書名號", canSurround: false, description: "一、《 》多用於書名，〈 〉多用於篇名。\n二、前半不出現在一行之末，後半不出現在一行之首。" },
  { symbol: '〈', name: "上單書名號", canSurround: true, description: "一、《 》多用於書名，〈 〉多用於篇名。\n二、前半不出現在一行之末，後半不出現在一行之首。" },
  { symbol: '〉', name: "下單書名號", canSurround: false, description: "一、《 》多用於書名，〈 〉多用於篇名。\n二、前半不出現在一行之末，後半不出現在一行之首。" }
];

//#region - Create panel element
const panel_all = document.createElement('div'); panel_all.setAttribute('easySymbolClass', "panel_all");
document.body.appendChild(panel_all);

const panel_head = document.createElement('div'); panel_head.setAttribute('easySymbolClass', "panel_head");
panel_all.appendChild(panel_head);

const panel_body = document.createElement('div'); panel_body.setAttribute('easySymbolClass', "panel_body");
panel_all.appendChild(panel_body);

//#region - Add item to panel_body
let panel_body_row = document.createElement('div'); panel_body_row.setAttribute('easySymbolClass', "panel_body_row");
for (let i = 0; i < symbolList.length; i++) {
  const symbolButton = document.createElement('button'); symbolButton.setAttribute('easySymbolClass', "symbolButton"); symbolButton.setAttribute('easySymbolId', `button${i}`);
  symbolButton.innerText = symbolList[i].symbol;
  symbolButton.tabIndex = i;
  symbolButton.addEventListener('click', function () { insertText(symbolList[i].symbol); });
  panel_body_row.appendChild(symbolButton);

  if ((i + 1) % 11 === 0 || i === symbolList.length - 1) {
    panel_body.appendChild(panel_body_row);
    panel_body_row = document.createElement('div'); panel_body_row.setAttribute('easySymbolClass', "panel_body_row");
  }
}
//#endregion
//#endregion

// get the focusedElement element
let focusedElement;

// function to insert text at the current cursor position
function insertText(text) {
  if (!focusedElement) { return; }
  const start = focusedElement.selectionStart;
  const end = focusedElement.selectionEnd;
  const textBefore = focusedElement.value.substring(0, start);
  const textAfter = focusedElement.value.substring(end, focusedElement.value.length);
  focusedElement.value = textBefore + text + textAfter;
  focusedElement.selectionStart = start + text.length;
  focusedElement.selectionEnd = start + text.length;
  focusedElement.focus();
}

// listen for the keydown event on the focusedElement
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === '/') {
    focusedElement = document.activeElement;
    if (!focusedElement) { return; }
    const tagName = focusedElement.tagName.toLowerCase();
    const type = typeof focusedElement.type !== 'undefined' ? focusedElement.type.toLowerCase() : '';
    if (focusedElement.isContentEditable || tagName === "input" && (type === "search" || type === "text") || tagName === "textarea") {
      if (panel_body.style.display === 'block') { panel_body.style.display = 'none'; }
      else {
        let focusedElementRect = focusedElement.getBoundingClientRect();
        let textPanelRect = panel_body.getBoundingClientRect();
        let focusedElementTop = focusedElementRect.top - window.pageYOffset;
        panel_body.style.display = 'block';
        panel_body.style.left = `${focusedElement.offsetLeft}px`;
        if (focusedElementTop > textPanelRect.height) {
          panel_body.style.top = `${focusedElement.offsetTop - panel_body.offsetHeight}px`;
        } else {
          panel_body.style.top = `${focusedElement.offsetTop + focusedElement.offsetHeight}px`;
        }
        // set focus to the text panel and bind keydown event to it
        // document.getElementById('button0').focus();
        document.querySelector("[easySymbolId=button0]");
        // panel_body.focus();

      }
      event.preventDefault();
    }
  }
});

panel_body.addEventListener('keydown', function (event) {
  if ((event.ctrlKey && event.key === '/') || event.key === 'Enter') {
    panel_body.style.display = 'none';
  }
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    const activeButton = document.activeElement;
    let nextButton;
    switch (event.key) {
      case 'ArrowLeft':
        nextButton = activeButton.previousElementSibling;
        break;
      case 'ArrowUp':
        nextButton = activeButton.previousElementSibling //|| panel_body.lastElementChild;
        break;
      case 'ArrowRight':
        nextButton = activeButton.nextElementSibling;
        break;
      case 'ArrowDown':
        nextButton = activeButton.nextElementSibling //|| panel_body.firstElementChild;
        break;
    }
    if (nextButton) { nextButton.focus(); }
  }
});
