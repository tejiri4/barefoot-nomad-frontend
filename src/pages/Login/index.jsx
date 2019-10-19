// react liberies
import React, { Component } from 'react';

// components
import LoginNavigation from '../../components/LoginNavigation';
import AppModal from '../../components/AppModal';
import LoginForm from '../../components/LoginForm'

class Login extends Component {
    render(){
        return(
            <>
            <AppModal>
                <LoginNavigation />
                <LoginForm />
            </AppModal>
            </>
        );
    }
}

export default Login;
