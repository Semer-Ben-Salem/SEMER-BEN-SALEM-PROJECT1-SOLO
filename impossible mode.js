const $board = $('#board') ;
const ROWS=10;
const COLS=10;
function createBoard(rows, cols) {
    $board.empty();
    for (var i = 0; i < rows; i++) {
      const $row = $('<div>').addClass('row');
      for (var j = 0; j < cols; j++) {
        const $col = $('<div>')
        .addClass('col hidden')
        .attr('data-col',j)
        .attr('data-row',i);
        if (Math.random() < 0.5){
            $col.addClass('mine');
        }
        $row.append($col);
      }
      $board.append($row);
    }
  }
  
  function restart (){
      createBoard(20, 20)
  }

  function gameOver(isWin) {
    var message = null ;
    if (isWin) {
      message = 'YOU WON!';
    } else {
      message = 'YOU LOST!';
     }
     setTimeout(function() {
        alert(message);
        restart();
      }, 700);
    
 }
  
 function reveal (oi, oj){
     const seen ={}
 }

 function reveal(oi, oj) {
    const seen = {};
  
    function helper(i, j) {
      if (i >= ROWS || j >= COLS || i < 0 || j < 0) return;
      const key = `${i} ${j}`
      if (seen[key]) return;
      const $cell =
        $(`.col.hidden[data-row=${i}][data-col=${j}]`);
      if (
        !$cell.hasClass('hidden') ||
        $cell.hasClass('mine')
      ) {
        return;
      }
  
      $cell.removeClass('hidden');
  
     
     
          helper(i , j );
              
      
    }
  
    helper(oi, oj);
  }

  $board.on('click', '.col.hidden', function(){
    const $cell = $(this);
    const row = $cell.data('row');
    const col = $cell.data('col');
    console.log(row, col);
    if ($cell.hasClass('mine')){
        gameOver(false);
    }   else {
        reveal(row, col)
        const isGameOver = $('.col.hidden').length === $('.col.mine').length
        console.log(isGameOver)
    if (isGameOver) gameOver(true);
    } 
})

restart();