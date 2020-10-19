const $board = $('#board') ;

function createBoard(rows, cols) {
    $board.empty();
    for (var i = 0; i < rows; i++) {
      const $row = $('<div>').addClass('row');
      for (var j = 0; j < cols; j++) {
        const $col = $('<div>')
        .addClass('col hidden')
        if (Math.random() < 0.1){
            $col.addClass('mine');
        }
        $row.append($col);
      }
      $board.append($row);
    }
  }
  
  function restart (){
      createBoard(10, 10)
  }

  function gameOver(isWin) {
    var message = null ;
    if (isWin) {
      message = 'YOU WON!';
    } else {
      message = 'YOU LOST!';
     }
      alert(message);
      restart();
 }
  

  $board.on('click', '.col.hidden', function(){
    const $cell = $(this);
    if ($cell.hasClass('mine')){
        gameOver(false);
    }    
})

restart();