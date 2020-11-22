var adj_mat;

function adj_mat_setup(){
    //Setting adj_mat as an empty adj_mat_size * adj_mat_size matrix. adj_mat[colonn][row]
    var adj_mat_size = matrix_size * matrix_size;
    adj_mat = new Array(adj_mat_size);
    for (let i = 0; i < adj_mat.length; i++) {
        adj_mat[i] = new Array(adj_mat_size).fill(0);
        
    }

    //Put ones in for connected nodes.
    for (let i = 0; i < adj_mat_size; i++) {
        if (i >= matrix_size){
            adj_mat[i][i - matrix_size] = 1;
            if (i % matrix_size != (matrix_size - 1)){
                    adj_mat[i][i - matrix_size + 1] = 1;
            }
            if (i % matrix_size != 0){
                adj_mat[i][i - matrix_size - 1] = 1;
            }
                    
        }

        if(i <= (adj_mat_size - (matrix_size + 1))){
                adj_mat[i][i + matrix_size] = 1
                if(i % matrix_size != (matrix_size - 1)){
                    adj_mat[i][i + matrix_size + 1] = 1;
                }
                if(i % matrix_size != 0){
                    adj_mat[i][i + matrix_size - 1] = 1;
                }        
        }

        if(i % matrix_size != (matrix_size - 1)){
            adj_mat[i][i + 1] = 1;
        }
            
        if(i % matrix_size != 0){
            adj_mat[i][i - 1] = 1
        } 
    }
}

function detatch_node(id){
    var adj_mat_size = matrix_size * matrix_size;
    if (id >= matrix_size){
        adj_mat[id][id - matrix_size] = 0;
        adj_mat[id - matrix_size][id] = 0;
        if (id % matrix_size != (matrix_size - 1)){
                adj_mat[id][id - matrix_size + 1] = 0;
                adj_mat[id - matrix_size + 1][id] = 0;
        }
        if (id % matrix_size != 0){
            adj_mat[id][id - matrix_size - 1] = 0;
            adj_mat[id - matrix_size - 1][id] = 0;
        }
                
    }

    if(id <= (adj_mat_size - (matrix_size + 1))){
            adj_mat[id][id + matrix_size] = 0;
            adj_mat[id + matrix_size][id] = 0;
            if(id % matrix_size != (matrix_size - 1)){
                adj_mat[id][id + matrix_size + 1] = 0;
                adj_mat[id + matrix_size + 1][id] = 0;
            }
            if(id % matrix_size != 0){
                adj_mat[id][id + matrix_size - 1] = 0;
                adj_mat[id + matrix_size - 1][id] = 0;
            }        
    }

    if(id % matrix_size != (matrix_size - 1)){
        adj_mat[id][id + 1] = 0;
        adj_mat[id + 1][id] = 0;
    }
        
    if(id % matrix_size != 0){
        adj_mat[id][id - 1] = 0;
        adj_mat[id - 1][id] = 0;
    } 
}

function reatatch_node(id){
    var adj_mat_size = matrix_size * matrix_size;
    if (id >= matrix_size){
        adj_mat[id][id - matrix_size] = 1;
        adj_mat[id - matrix_size][id] = 1;
        if (id % matrix_size != (matrix_size - 1)){
                adj_mat[id][id - matrix_size + 1] = 1;
                adj_mat[id - matrix_size + 1][id] = 1;
        }
        if (id % matrix_size != 0){
            adj_mat[id][id - matrix_size - 1] = 1;
            adj_mat[id - matrix_size - 1][id] = 1;
        }
                
    }

    if(id <= (adj_mat_size - (matrix_size + 1))){
            adj_mat[id][id + matrix_size] = 1;
            adj_mat[id + matrix_size][id] = 1;
            if(id % matrix_size != (matrix_size - 1)){
                adj_mat[id][id + matrix_size + 1] = 1;
                adj_mat[id + matrix_size + 1][id] = 1;
            }
            if(id % matrix_size != 0){
                adj_mat[id][id + matrix_size - 1] = 1;
                adj_mat[id + matrix_size - 1][id] = 1;
            }        
    }

    if(id % matrix_size != (matrix_size - 1)){
        adj_mat[id][id + 1] = 1;
        adj_mat[id + 1][id] = 1;
    }
        
    if(id % matrix_size != 0){
        adj_mat[id][id - 1] = 1;
        adj_mat[id - 1][id] = 1;
    } 
}