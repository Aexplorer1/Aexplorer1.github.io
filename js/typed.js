document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('#subtitle')) {
    new Typed('#subtitle', {
      strings: [
        '坚冰还盖着北海的时候，我看到了怒放的梅花。',
        '青年人要准备好走曲折的路。',
        '成功总是在尝试之中。',
        'Forgive your pain last seconds.'
      ],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true
    });
  }
});