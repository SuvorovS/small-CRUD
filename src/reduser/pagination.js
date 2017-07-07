export default function pagination (state = [], action) {
    if (action.type === 'GET_DATA') {
        let newState = Object.assign({}, state);
        
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
        


        
        newState.userData = users;
        // newState.quantityTypes = action.payload.quantityTypes;


        return newState;
    }
    else {
        return state;
    }
}