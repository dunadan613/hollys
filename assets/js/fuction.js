//display 제어함수
function fnClose(el){
  el.style.display='none';
}
function fnOpen(el){
  el.style.display='block';
}
function fnDisplayNone(el){
  for(let i=0;i<el.length;i++){
    el[i].style.display='none';
  }
}
function fnDisplayBlock(el){
  for(let i=0;i<el.length;i++){
      el[i].style.display='block';
  }
}

//class('active') 제어함수
function fnAddActive(el){
  el.classList.add('active');
}
function fnRemoveActive(el){
  el.classList.remove('active');
}

//cookie value 읽어오기
let getCookie = function(name){
  let value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value? value[2] : null;
}

//유저환경 확인
function fnTestSitu(variabilis){
  let osStr=navigator.userAgent;
  let testWindow=osStr.includes('Windows');
  let testIphone=osStr.includes('iPhone');
  let testAndroid=osStr.includes('Linux');
  if(testWindow==true){
    location.href='https://dunadan613.github.io/hollys/index.html';
  }
  else if(testAndroid==true || testIphone==true){
    location.href='https://dunadan613.github.io/hollys/m-index.html';
  }
  variabilis++;
  return variabilis;
}