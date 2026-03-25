(function () {
  const board  = document.getElementById('board');
  const handle = document.getElementById('boardHandle');

  if (!board || !handle) return;

  handle.addEventListener('click', function () {
    board.classList.toggle('board--open');
  });
})();
