var adj_mat = [];

function adj_mat_setup(){
    //Setting adj_mat as an empty adj_mat_size * adj_mat_size matrix. adj_mat[colonn][row]
    adj_mat = [];
    var adj_mat_size = martix_size * martix_size;
    for (let i = 0; i < adj_mat_size; i++) {
        adj_mat[i] = new Array(adj_mat_size).fill(0, 0, adj_mat_size - 1);
    }

    for (let i = 0; i < adj_mat_size; i++) {
        if (i >= martix_size){
            adj_mat[i][i - martix_size] = 1;
            if (i % martix_size != (martix_size - 1)){
                    adj_mat[i][i - martix_size + 1] = 1;
            }
            if (i % martix_size != 0){
                adj_mat[i][i - martix_size - 1] = 1;
            }
                    
        }

        if(i <= (adj_mat_size - (martix_size + 1))){
                self.adj_mat[i][i + martix_size] = 1
                if(i % martix_size != (martix_size - 1)){
                    adj_mat[i][i + martix_size + 1] = 1;
                }
                if(i % martix_size != 0){
                    adj_mat[i][i + martix_size - 1] = 1;
                }        
        }

        if(i % martix_size != (martix_size - 1)){
            adj_mat[i][i + 1] = 1;
        }
            
        if(i % martix_size != 0){
            adj_mat[i][i - 1] = 1
        } 
    }
}