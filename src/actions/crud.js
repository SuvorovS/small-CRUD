import axios from 'axios';

//thunk: получение с сервера данных о всех пользователях
export const resiveData = ()=> {
    return dispatch => {
    dispatch ( showLoader() ); // отобразить прелодер
    axios.post('/api', {type : 'getData'})
        .then((res) => {
            // console.log('ответ с сервера:', res.data);
            
            // проверить ответ
            dispatch( getData(res.data) );
            setTimeout(function() {
                dispatch(stopLoader());
            }, 500);
            
        })
        .catch( err => {
            console.error('axios ошибка', err);
            dispatch(connectionError()); // обработать ошибку
        })
    }
}
//thunk: удаление пользователя из БД 
export function deleteUserHandler(e){
    return dispatch => {
        let id = +e.target.id;
        console.log('user_id: ', id, typeof (id));
        axios.post('/api', {type : 'deleteUser', data : id})
        .then( (res)=> {
            console.log(res.data);
            if (res.data === 'correct') {
                dispatch({type : 'DELETE_USER', payload : id});
            }
            else{
                throw new Error;
            }
        } )
        .catch( (err)=>console.log(err) );
    }
}

//thunk: сохранение формы пользователя

export function userFormSaveHandler(e) {
        return dispatch =>{
            e.preventDefault();
            let id = e.target.id;
            console.log(id);
        
            var elems = e.target.elements, // все элементы формы
            params = {},
            quantity = [],
            elName,
            elType;
            for(var i = 0; i < elems.length; i++){
                elType = elems[i].type; // тип текущего элемента (атрибут type)
                elName = elems[i].name; // имя текущего элемента (атрибут name)
                if(elName){ // если атрибут name присутствует
                    if((elType === 'checkbox' || elType === 'radio') && !elems[i].checked) continue; // если это переключатель или чекбокс, но он не отмечен, то пропускаем
                    if(elType !== 'checkbox'){ // в остальных случаях - добавляем параметр "ключ(name)=значение(value)
                        params[elName] = elems[i].value;
                    } 
                    else{
                        quantity.push( elems[i].value);
                    }
                }
            }
            params.quantity = quantity;
            console.log('передаю на сервер:', params);


            axios.post('/api', {data : params, type: 'createUser', id : id})
                .then(res=>{
                    console.log('ответ c сервера', res.data);
                    if (res.data === 'correct') {
                    
                        $('#myModal').modal('hide'); //!!!!!!!!!
                        dispatch( resiveData() ); // проба
                    }
                })
                .catch(err =>{console.log('ошибка', err)});
        }
    }


//thunk: изменение формы пользователя

export function userChangeHandler(e){
    e.preventDefault();
    return {type : 'CHANGE_USER', payload : e.target.id}
}

export function resetUserFormHandler(e){
    let user_id = e.target.id;
    // console.log(user_id);
    return {type: 'RESET_USER_FORM', payload : user_id}
    }

function showLoader(){
    return {'type' : 'SHOW_LOADER'}
}

function stopLoader(){
    return {'type' : 'STOP_LOADER'}
}

function getData (payload) {
    return {'type' : 'GET_DATA', 'payload' : payload}
}
function connectionError(params) {
    console.log('connectionError');
    
    return {'type' : 'CONNECTION_ERROR'}
}