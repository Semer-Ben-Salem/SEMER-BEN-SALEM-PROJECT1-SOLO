const $grid = ('#grid') ;

function CreatGrid (rows,columns){

    for (var i=0 ; i<rows ; i++){
        const $rows = $('<div>').addClass('rows');
        $grid.append($row);
    }
}

CreatGrid (10,10)