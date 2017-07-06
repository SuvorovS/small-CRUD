const initialState = {isLoading : false, userData : [],
     connectionError: false, quantityTypes : [] }

export default function user (state = initialState, action) {
    
    if (action.type === 'SHOW_LOADER') {
        let newState = Object.assign({}, state, {isLoading : true})
        return newState;
    }
    ///////
    else if(action.type === 'GET_DATA'){
        
        let users = action.payload.users;
        let quantity = action.payload.quantity;
        let quantityTypes = action.payload.quantityTypes;
        
        
        users = users.map((user)=>{
            user.quantity = quantity.filter((item)=>{return item.user_id === user.id}); //для вывода в карточке
            user.editing = false;
            user.quantityTypes = quantityTypes.map(i=>{
                return {label: i, checked : user.quantity.some(el => {return el.label === i})} //для вывода в форме
            })
    
            return user;
        });
        console.log('users', users);


        let newState = Object.assign({}, state);

        newState.userData = users;
        newState.quantityTypes = action.payload.quantityTypes;
        return newState;
    }
    ///////
    else if(action.type === 'STOP_LOADER'){
        let newState = Object.assign({}, state, {isLoading : false})
        newState.isLoading = false;
        return newState;
    }
    ///////
    else if(action.type === 'DELETE_USER'){
        let newState = Object.assign({}, state);
        let users = newState.userData.filter(item=>{
            return +item.id !== action.payload
        });
        newState.userData = users;
        
        return newState;
    }
    else if(action.type === 'CHANGE_USER'){
        let newState = Object.assign({}, state);

        newState.userData = newState.userData.map(item =>{
            if (item.id !== action.payload) {
                return item;
            } 
            else {
                item.editing = true;
                return item;
            }
        });
        
        return newState;
    }



    else if(action.type === 'CONNECTION_ERROR'){
        let newState = Object.assign({}, state, {connectionError : true});
        return newState;
    }
    
    else {
        return state
    }
}