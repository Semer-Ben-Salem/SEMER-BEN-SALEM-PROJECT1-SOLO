const $board = $('#board') ;

function createBoard(rows, cols) {
    for (var i = 0; i < rows; i++) {
      const $row = $('<div>').addClass('row');
      for (var j = 0; j < cols; j++) {
        const $col = $('<div>')
        .addClass('col hidden')
        if (Math.random() < 0.1){
            $col.addClass('beez');
        }
        $row.append($col);
      }
      $board.append($row);
    }
  }

  createBoard (10,10)

  function gameOver(isWin) {
    var message;
    if (isWin) {
      message = 'YOU WON!';
    } else {
      message = 'YOU LOST!';
     }
      alert(message);
 }
  

  $board.on('click', '.col.hidden', function(){
    const $cell = $(this);
    if ($cell.hasClass('beez')){
        gamOver(false);
    }    
})