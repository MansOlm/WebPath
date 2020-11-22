var d = Array(matrix_size).fill(inf);
var e = Array(matrix_size).fill(null);
var Q = Array(matrix_size);
for (let i = 0; i < Q.length; i++) {Q[i] = i;}
var S = []; 

function extract_min(d, Q, S){
    var min = inf;
    var min_node = null;

    for (let i = 0; i < Q.length; i++) {
        if(min <= Q[i]){
            min = Q[i];
            min_node = i;
        }
    }
    Q.splice(min_node, 1);
    S.push(min_node);
    return min_node;
}

function adj_list(min_node){
    var adj_list;
    var number_of_nodes = matrix_size * matrix_size;

    if(min_node >= matrix_size){
        if(adj_mat[min_node][min_node - matrix_size] > 0){
            adj_list.push(min_node - matrix_size);
        }
        if(min_node % number_of_nodes != 0){
            if(adj_mat[min_node][min_node - matrix_size - 1] > 0){
                adj_list.push(min_node - row_size - 1);
            }
        }
        if(min_node % matrix_size != matrix_size - 1){
            if(adj_mat[min_node][min - matrix_size + 1] > 0){
                adj_list.push(min_node - matrix_size + 1);
            }
        }
    }

    if(min_node <= number_of_nodes - matrix_size - 1){
        if(adj_mat[min_node][min_node + matrix_size] > 0){
            adj_list.push(min_node + matrix_size);
        }
        if(min_node % number_of_nodes != 0){
            if(adj_mat[min_node][min_node + matrix_size - 1] > 0){
                adj_list.push(min_node + matrix_size - 1);
            }
        }
        if(min_node % matrix_size != (matrix_size - 1)){
            if(adj_mat[min_node][min_node + matrix_size + 1] > 0){
                adj_list.push(min_node + matrix_size + 1);
            }
        }
    }
        
    if(min_node % number_of_nodes != 0){
        if(adj_mat[min_node][min_node - 1] > 0){
            adj_list.push(min_node - 1);
        }
    }

    if(min_node % matrix_size != (matrix_size - 1)){
        if(adj_mat[min_node][min_node + 1] > 0){
            adj_list.push(min_node + 1);
        }
    }

    return adj_list;
}

function relax(min_node, adj_list, d, e){
    for (let i = 0; i < adj_list.length; i++) {
        if(d[i] > d[min_node] + adj_mat[min_node][i] & adj_mat[min_node][i] != null){
            d[i] = d[min_node] + adj_mat[min_node][i];
            e[i] = min_node;
        }
    }
}
function dijkstras(){
    var min_node;
    var adj_list;

    min_node = extract_min(d, Q, S);
    adj_list = adj_list(min_node);
    relax(min_node, adj_list, d, e);
}