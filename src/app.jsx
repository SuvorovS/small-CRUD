import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as CRUD  from './actions/crud';


import PreloaderPanel from './components/preloaderPanel';
import UsersPanel from './components/usersPanel';
import Test from './components/test';
import AddNewUserModal from './components/addNewUserModal';

import './app.scss';


class App extends Component {
    componentWillMount(){
        this.props.resiveData()
    }

    render (){
        if (this.props.isLoading) {
            return <PreloaderPanel />
        }
        else{
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <UsersPanel />
                    {/*<Test />*/}
                        </div>
                    </div>
                    <AddNewUserModal />
                </div>
            );
        }
    }
}



export default connect(
  state => ({
    isLoading: state.user.isLoading,
    // users : state.user.userData,
  }),
  dispatch => ({
    resiveData : (event) => {
        dispatch(CRUD.resiveData());
    }
})

)(App);