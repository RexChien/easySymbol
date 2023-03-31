document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.code === 'Comma') {
    // your code here
    <div id="panel" style="display:none; position:absolute; top:0; left:0; background-color:#fff; border:1px solid #ccc; padding:10px;">
  <button onclick="insertPunctuation('。')">。</button>
  <button onclick="insertPunctuation('，')">，</button>
  <button onclick="insertPunctuation('！')">！</button>
</div>

<textarea id="myTextarea"></textarea>

<script>
function insertPunctuation(punctuation) {
  var textarea = document.getElementById('myTextarea');
  var cursorPosition = textarea.selectionStart;
  var text = textarea.value;
  var newText = text.slice(0, cursorPosition) + punctuation + text.slice(cursorPosition);
  textarea.value = newText;
}
</script>
  }
});
