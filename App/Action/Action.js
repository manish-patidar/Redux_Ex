export const LIST_SUCCESS = 'LIST_SUCCESS'
export const LIST_FAILURE = 'LIST_FAILURE'

import axios from 'axios'

// export const List = list =>({
//     type: 'LIST',
//     payload: list
// })

export const listData = () =>{
    return(dispatch, getState)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (response){
            console.log(response);
            if(response.status == 200){
                dispatch({type:LIST_SUCCESS,data:response.data, isListData:true});
            }else{
                dispatch({type:LIST_FAILURE,data: [], isListData:false});
            }
        })
        .catch(function (error) {
            console.log(error);
            dispatch({type:LIST_FAILURE, data: [], isListData:false});
        });
    }
}