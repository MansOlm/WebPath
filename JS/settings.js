//Sets up the three boxes so that only one can be cecked at the same time.
//Sets the size of the first grid to 20 and selects the right value in the drop down menue.
//Sets up the reset of the grid in a new size when the grid size is changed


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