const symbols = [
  'h',
  'he',
  'li',
  'be',
  'b',
  'c',
  'n',
  'o',
  'f',
  'ne',
  'na',
  'mg',
  'al',
  'si',
  'p',
  's',
  'cl',
  'ar',
  'k',
  'ca',
  'sc',
  'ti',
  'V',
  'cr',
  'mn',
  'fe',
  'co',
  'ni',
  'cu',
  'zn',
  'ga',
  'ge',
  'as',
  'se',
  'br',
  'kr',
  'rb',
  'sr',
  'Y',
  'zr',
  'nb',
  'mo',
  'tc',
  'ru',
  'rh',
  'pd',
  'ag',
  'cd',
  'in',
  'sn',
  'sb',
  'te',
  'i',
  'xe',
  'cs',
  'ba',
  'la',
  'ce',
  'pr',
  'nd',
  'pm',
  'sm',
  'eu',
  'gd',
  'tb',
  'dy',
  'ho',
  'er',
  'tm',
  'Yb',
  'lu',
  'hf',
  'ta',
  'w',
  're',
  'os',
  'ir',
  'pt',
  'au',
  'hg',
  'tl',
  'pb',
  'bi',
  'po',
  'at',
  'rn',
  'fr',
  'ra',
  'ac',
  'th',
  'pa',
  'u',
  'np',
  'pu',
  'am',
  'cm',
  'bk',
  'cf',
  'es',
  'fm',
  'md',
  'no',
  'lr',
  'rf',
  'db',
  'sg',
  'bh',
  'hs',
  'mt',
  'ds',
  'rg',
  'cn',
  'nh',
  'fl',
  'mc',
  'lv',
  'ts',
  'og'
];
const bannedSymbols = ["q",1,2,3,4,5,6,7,8,9,0];

window.onload = function() {
  document.getElementById('convertButton').addEventListener("click", beforeGenerate);
  beforeGenerate();
}

const generate = function (normal = true){
  let text = document.getElementById('input').value.toLowerCase();
  let symbolsFromText=[];

  console.clear();
  for (var i = 0; i < text.length; i++) {
    for (var q = 3; q != -1; q--) {
      console.log(text.substr(i,i + q) +"  "+ symbols.includes(text.substr(i,i + q)) +"  "+ q);
      if (symbols.includes(text.substr(i,i + q))) {
        symbolsFromText.push(text.substr(i,i + q));
        if (normal) i++;
        break;
      }
    }
  }
  let msg = ""
  for (var i = 0; i < symbolsFromText.length; i++) {
    msg += symbolsFromText[i] + " ";
  }
  return msg;
}

const beforeGenerate = function(){
  if (generate(false).length > 0) {
    document.getElementById('output').innerHTML="1: " + generate();
    document.getElementById('output2').innerHTML="2: " + generate(false);
  }else{
    document.getElementById('output').innerHTML="nothink find";
    document.getElementById('output2').innerHTML="";
  }
}
