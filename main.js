const $board = $('#board') ;

function createBoard(rows, cols) {
    for (var i = 0; i < rows; i++) {
      const $row = $('<div>').addClass('row');
      for (var j = 0; j < cols; j++) {
        const $col = $('<div>')
        .addClass('col hidden')
        $row.append($col);
      }
      $board.append($row);
    }
  }

  createBoard (10,10)

  $board.on('click', '.col.hidden', function(){
    console.log($(this));
  })