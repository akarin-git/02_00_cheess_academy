'use strict'

{
  // ローディング
  window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}




  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  
  // 🍔 open close----------------
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  // fadein----------------
  
  let fadeInTarget = document.querySelectorAll('.fade_in');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++) {
      const rect = fadeInTarget[i].getBoundingClientRect().top;
      // topから要素の位置座標
      const scroll = window.pageXOffset ||
        // スクロール量を取得
        document.documentElement.scrollTop;
      // スクロールしたtop
      const offset = rect + scroll;
      const windowHeight = window.innerHeight;
      // 現在のブラウザの高さ
      if (scroll > offset - windowHeight + 150) {
        fadeInTarget[i].classList.add('scroll_in');
      }
    }
  })

  // ----------about slide------------------------------------
   






}