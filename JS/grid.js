function button_on_click(button){
    if (clicked.id == "check-start") {
        // If the clicked button is the end node return
        if(button == end_node){
            return;
        }
        //If the clicked button is a wall replace it with start node
        if(walls.includes(button)){
            for (let i = 0; i < walls.length; i++) {
                if(walls[i] == button){
                    walls.splice(i, 1);
                }
            }
        }
        //If there is another start node turn it unmarked.
        if(start_node != null) {
            start_node.style.backgroundColor = unmarked_color;
        }
        //Set clicked to start node and color right. 
        start_node = button;
        start_node.style.backgroundColor = start_color;
    }
    else if (clicked.id == "check-end") {
        // If clicked is start return
        if(button == start_node){
            return;
        }
        //If the clicked button is a wall replace it with end node
        if(walls.includes(button)){
            for (let i = 0; i < walls.length; i++) {
                if(walls[i] == button){
                    walls.splice(i, 1);
                }
            }
        }
        //If there is a end node turn it unmarked.
        if (end_node != null) {
            end_node.style.backgroundColor = unmarked_color;
        }
        //Set clicked button to end node.
        end_node = button;
        end_node.style.backgroundColor = end_color;
    }
    else if(clicked.id == "check-wall"){
        //Give start and end node higher priority
        if(button != start_node && button != end_node){
            //If the clicked button is a wall unmark it
            if(walls.includes(button)){
                for (let i = 0; i < walls.length; i++) {
                    if(walls[i] == button){
                        walls.splice(i, 1);
                    }
                }
                button.style.backgroundColor = unmarked_color;
                reatatch_node(parseInt(button.id    ));
            }
            //If clicked node is unmarked make it a wall.
            else{
                walls.push(button);
                button.style.backgroundColor = wall_color;
                detatch_node(parseInt(button.id));
            }
        }
    }
}

function create_grid_buttons(id){
    var button = document.createElement("button");
    button.classList.add("grid-button");
    button.id = id;
    button.addEventListener("click", function(){button_on_click(button);});

    return button;
}

function create_grid_item(id){
    var grid_item = document.createElement("div");
    grid_item.classList.add("grid-item");
    grid_item.id = "grid_item" + id;

    var button = create_grid_buttons(id);


    grid_item.appendChild(button);

    return grid_item;
}

function auto_string(){
    var string = "";
    for (let i = 0; i < martix_size; i++) {
         string = string + "auto ";
    }
    return string;
}

function create_grid() {
    //created a lenxlen grid of divs with class grid-item inside a div with class grid-container.
    if(global_grid != null){
        global_grid.remove();
    }
    
    var grid_container = document.createElement("div");
    grid_container.classList.add("grid-container");

    grid_container.style.gridTemplateColumns = auto_string();

    for (let i = 0; i < martix_size; i++) {
        for (let j = 0; j < martix_size; j++) {
            grid_container.appendChild(create_grid_item(String(j + (martix_size*i)), martix_size));
        }
        
    }

    //Sätt globala grid till grid_container.
    global_grid = grid_container;
    //Setter upp adjacanary matrix. 
    adj_mat_setup();
    
    var reference = document.getElementById("under-grid");
    document.body.insertBefore(grid_container, reference);
} 
