//matrix rain
const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

//canvas & brush
const canvaspic = document.getElementById('canvaspic');

//matrix rain
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//matrix rain
const matrixLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%^&*()_+{}|:<>?-=;,./>°í±ÐúŽEóäþåmóëDZ±§m¿×0Ùê7X¼þdl<^lÌwÜ#oÍ°|ž«Þ£m†·4Gõæã»8°º4Ôl!¥¾«¥¯È–uøÝâîž×·)¦ÕŠ`m§¬aðßÖuOœßêÓ÷nÓSÛ?kçè‰öÑ2Þ>úÈ£€à+ÌçÚ29ÖôþÏœ¶72õÁÚÏž›ciUéÜò9pƒ±àáÙòâ·j¤c¡¢£¤¥¦§¨ª«¬¯°±²³µ¶·¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĹĺĻļĽľĿŀŁłŃńŅņŇňŉŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǴǵǶǷǸǹǺǻǼǽǾ¡¢£¤¥¦§¨ª«¬¯°±😀´µ¶·¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưưƱƲƳƴƵƶ¿eK¿ƒÅB<¿ƒ¡–smõÄÙS±è«?ÌÙ–ÏxW|fiÛ|ðÛbãóGûMœ¾¿mMMœÑ¼tû2nÇ›qùwŽEÃ‰¨ohÞ½nc=yºÓë¶ŒO¯ÃÆ6Ÿ~ëÞ1ñÁ¾ý½´òª×ãÕ1m¿ïyåT8¬Ã6Ï½à»^H¼ïgöþðÄ©x¸1Jf,€·àÜzªú²J3›a<ðÄ–X[»7›K‹òšÎV¸¦¶»à³èxÒGÅåwÞãPSàóÂ/ÄeCFÄ£Ÿº±Ë8ïûËŽfVüvYÎEœrMÜÛ¯i¸0–lŸøŸÏÆä•Wfš:·ýD<|ô]qÁÅ¯Åûnè|p·ýÇmñoœ‹%cGeîËv+Ú»/Ò‡zSÒ¹Á»0;ë¬þÍšª~iñìXP3µM[~ÇñÿûPÎÚO«Æ';

//matrix rain
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

//canvas & brush
let isPainting = false;

for (let i = 0; i < columns; i++) {
  drops[i] = Math.random() * canvas.height;
}

//matrix rain
function draw() {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#0F0';
  context.font = fontSize + 'px arial';

  for (let i = 0; i < drops.length; i++) {
    const text = matrixLetters[Math.floor(Math.random() * matrixLetters.length)];
    context.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvaspic.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

//this section is the drawing canvas and paintbrush
function startPainting(e) {
  isPainting = true;
  paint(e);
}

//canvas & brush
function stopPainting() {
  isPainting = false;
  context.beginPath();
}

//canvas & brush
function paint(e) {
  if (!isPainting) return;
  context.lineWidth = 10;
  context.lineCap = 'round';
  context.strokeStyle = '#FFFFFF';
  context.lineTo(e.clientX - canvaspic.offsetLeft, e.clientY - canvaspic.offsetTop);
  context.stroke();
  context.beginPath();
  context.moveTo(e.clientX - canvaspic.offsetLeft, e.clientY - canvaspic.offsetTop);
}

//canvas & brush
canvaspic.addEventListener('mousedown', startPainting);
canvaspic.addEventListener('mouseup', stopPainting);
canvaspic.addEventListener('mousemove', paint);

//this is part of the matrix rain
setInterval(draw, 35);