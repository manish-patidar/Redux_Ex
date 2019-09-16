import {LIST_SUCCESS, LIST_FAILURE} from '../Action/Action'

const initialState = {
    isListData: true,
    required_data: [],
}

const List = (state = initialState, action) =>{
    if(state === null || state === undefined || action === null){
        return { ...state }
    }
    switch(action.type){
        case LIST_SUCCESS : 
            return {
                ...state,
                isListData: true,
                required_data: action,

            };
        case LIST_FAILURE : 
            return {
                ...state,
                isListData: false,
                required_data: []
            } 
        default:
            return state;
    }

}

export default List;