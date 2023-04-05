// get the focusedElement element
var focusedElement;


// create the text panel element
const textPanel = document.createElement('div');
textPanel.id = 'textPanel';
textPanel.className = 'textPanel';
const textList = [
  { symbol: '。', name: "句號", description: "用於一個語義完整的句末，不用於疑問句、感嘆句。" },
  { symbol: '，', name: "逗號", description: "用於隔開複句內各分句，或標示句子內語氣的停頓。" },
  { symbol: '、', name: "頓號", description: "用於並列連用的詞、語之間，或標示條列次序的文字之後。" },
  { symbol: '；', name: "分號", description: "用於分開複句中平列的句子。" },
  { symbol: '：', name: "冒號", description: "用於總起下文，或舉例說明上文。" },
  { symbol: '「', name: "上單引號", description: "一、用於標示說話、引語、特別指稱或強調的詞語。\n二、引號分單引號及雙引號，通常先用單引號，如果有需要，單引號內再用雙引號，依此類推。\n三、一般引文的句尾符號標在引號之內。\n四、引文用作全句結構中的一部分，其下引號之前，通常不加標點符號。" },
  { symbol: '」', name: "下單引號", description: "一、用於標示說話、引語、特別指稱或強調的詞語。\n二、引號分單引號及雙引號，通常先用單引號，如果有需要，單引號內再用雙引號，依此類推。\n三、一般引文的句尾符號標在引號之內。\n四、引文用作全句結構中的一部分，其下引號之前，通常不加標點符號。" },
  { symbol: '『', name: "上雙引號", description: "一、用於標示說話、引語、特別指稱或強調的詞語。\n二、引號分單引號及雙引號，通常先用單引號，如果有需要，單引號內再用雙引號，依此類推。\n三、一般引文的句尾符號標在引號之內。\n四、引文用作全句結構中的一部分，其下引號之前，通常不加標點符號。" },
  { symbol: '』', name: "下雙引號", description: "一、用於標示說話、引語、特別指稱或強調的詞語。\n二、引號分單引號及雙引號，通常先用單引號，如果有需要，單引號內再用雙引號，依此類推。\n三、一般引文的句尾符號標在引號之內。\n四、引文用作全句結構中的一部分，其下引號之前，通常不加標點符號。" },
  { symbol: '（', name: "上夾注號甲式", description: "用於行文中需要注釋或補充說明。" },
  { symbol: '）', name: "下夾注號甲式", description: "用於行文中需要注釋或補充說明。" },
  { symbol: '──', name: "夾注號乙式或破折號", description: "夾注號乙式：用於行文中需要注釋或補充說明。ex. xxx──yyy──\n破折號：用於語意的轉變、聲音的延續，或在行文中為補充說明某詞語之處，而此說明後文氣需要停頓。ex. xxx──yyy" },
  { symbol: '？', name: "問號", description: "一、用於疑問句之後。\n二、用於歷史人物生死或事件始末之時間不詳。" },
  { symbol: '！', name: "驚嘆號", description: "用於感嘆語氣及加重語氣的詞、語、句之後。" },
  { symbol: '……', name: "刪節號", description: "用於節略原文、語句未完、意思未盡，或表示語句斷斷續續等。" },
  { symbol: '《', name: "上雙書名號", description: "一、《 》多用於書名，〈 〉多用於篇名。\n二、直行標在書名上下，橫行標在書名前後。\n三、每一種符號前半後半各占行中一格。前半不出現在一行之末，後半不出現在一行之首。" },
  { symbol: '》', name: "下雙書名號", description: "一、《 》多用於書名，〈 〉多用於篇名。\n二、直行標在書名上下，橫行標在書名前後。\n三、每一種符號前半後半各占行中一格。前半不出現在一行之末，後半不出現在一行之首。" },
  { symbol: '〈', name: "上單書名號", description: "一、《 》多用於書名，〈 〉多用於篇名。\n二、直行標在書名上下，橫行標在書名前後。\n三、每一種符號前半後半各占行中一格。前半不出現在一行之末，後半不出現在一行之首。" },
  { symbol: '〉', name: "下單書名號", description: "一、《 》多用於書名，〈 〉多用於篇名。\n二、直行標在書名上下，橫行標在書名前後。\n三、每一種符號前半後半各占行中一格。前半不出現在一行之末，後半不出現在一行之首。" },
  { symbol: '．', name: "間隔號", description: "一、用於書名號乙式書名與篇章卷名之間。\n二、用於書名號乙式套書與單本書名之間。\n三、用於原住民命名習慣之間隔。\n四、用於翻譯外國人的名字與姓氏之間。" },
  { symbol: '—', name: "連接號甲式", description: "用於連接時空的起止或數量的多寡等。" },
  { symbol: '～', name: "連接號乙式", description: "用於連接時空的起止或數量的多寡等。" }
];


let currentRow = document.createElement('div');
currentRow.className = 'textPanelRow';

for (let i = 0; i < textList.length; i++) {
  const textButton = document.createElement('button');
  textButton.innerText = textList[i].symbol;
  textButton.className = 'panelButton';
  textButton.tabIndex = '0';
  textButton.addEventListener('click', function () {
    insertText(textList[i].symbol);
  });

  currentRow.appendChild(textButton);

  if ((i + 1) % 11 === 0 || i === textList.length - 1) {
    textPanel.appendChild(currentRow);
    currentRow = document.createElement('div');
    currentRow.className = 'textPanelRow';
  }
}

document.body.appendChild(textPanel);

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
      if (textPanel.style.display === 'block') { textPanel.style.display = 'none'; }
      else {



        let focusedElementRect = focusedElement.getBoundingClientRect();
        let textPanelRect = textPanel.getBoundingClientRect();
        let focusedElementTop = focusedElementRect.top - window.pageYOffset;
        textPanel.style.display = 'block';
        textPanel.style.left = `${focusedElement.offsetLeft}px`;
        if (focusedElementTop > textPanelRect.height) {
          textPanel.style.top = `${focusedElement.offsetTop - textPanel.offsetHeight}px`;
        } else {
          textPanel.style.top = `${focusedElement.offsetTop + focusedElement.offsetHeight}px`;
        }
        // set focus to the text panel and bind keydown event to it
        textPanel.focus();

      }
      event.preventDefault();
    }
  }
});

textPanel.addEventListener('focus', function () {
  alert(firstButton);
  const firstButton = textPanel.querySelector('button');
  if (firstButton) { firstButton.focus(); }
});

textPanel.addEventListener('keydown', function (event) {
  if ((event.ctrlKey && event.key === '/') || event.key === 'Enter') {
    textPanel.style.display = 'none';
  }
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    const activeButton = document.activeElement;
    let nextButton;
    switch (event.key) {
      case 'ArrowLeft':
        nextButton = activeButton.previousElementSibling || textPanel.lastElementChild;
        break;
      case 'ArrowUp':
        nextButton = activeButton.previousElementSibling || textPanel.lastElementChild;
        break;
      case 'ArrowRight':
        nextButton = activeButton.nextElementSibling || textPanel.firstElementChild;
        break;
      case 'ArrowDown':
        nextButton = activeButton.nextElementSibling || textPanel.firstElementChild;
        break;
    }
    if (nextButton) { nextButton.focus(); }
  }
});


