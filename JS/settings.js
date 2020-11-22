
    var boxes = document.getElementsByClassName("check-draw");
    var clicked = boxes[0];
    clicked.checked = true;

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].onclick = function(){
            if(this != clicked){
                clicked.checked = false;
                clicked = this; 
            }
        };
        
    }

    var selector_grid_size = document.getElementById("grid-size");
    selector_grid_size.value = "20";
    martix_size = selector_grid_size.value;

    selector_grid_size.onchange = function(){
            martix_size = this.value;
            create_grid();
        };
