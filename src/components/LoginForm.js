

import React, {Component} from 'react';
import firebase from 'firebase';

import {
    View,
    TextInput,
    Button,
    Text
} from 'react-native';

import { Card, CardSection, Spinner} from './common';


class LoginForm extends Component {

    constructor(props) {

        super(props);
        // Initialize state.
        this.state = {
            userEmailText :'',
            passwordText :'',
            error :'',
            isLoading : false
            };
      }
    
    // Error Alert show
    buttonClickListener = () => {
        alert("Clicked On Button !!!");
      };
    

      onLoginButtonPressed() {

        const { userEmailText, passwordText} = this.state;
        // Fire base Auth
        console.log("user email ==",userEmailText);
        console.log("user password ==",passwordText);

         // show loading indicator - updating the state
          this.setState ({
            isLoading : true,
            error : ''
          });

         console.log("user loading  ==",this.state.isLoading);

        firebase.auth().signInWithEmailAndPassword(userEmailText,passwordText)
        .then(this.onLoginSuccess.bind(this)) // Login sucess . then promises 
          .catch(()=> { // Sign in failed catch 
             firebase.auth().createUserWithEmailAndPassword (userEmailText,passwordText)
             .then(this.onLoginSuccess.bind(this)) // Login user creation success
             .catch(this.onLoginFailed.bind(this));  // Auth failed
             });
    }

    // Login Failed
    onLoginFailed () {
        this.setState({
            error: 'Authentication failed',
            isLoading: false
        });

    }
   // Login Success
    onLoginSuccess () {
        // Reset the state
        this.setState ({
            userEmailText :'',
            passwordText :'',
            error :'',
            isLoading : false

        });
    }

    // If loading show spinner else show login button
    renderLoginButton () {

        console.log("renderLoginButton loading  ==",this.state.isLoading);
        if(this.state.isLoading === true) {
            return <Spinner />
        }
        return (
            <Button style = {loginFormStyle.buttonStyle}
            onPress={this.onLoginButtonPressed.bind(this)}
            title="Log in"
            />
        );

    }
    /*
     -> this.handleRefreshClick.bind(something) returns a new function, in which references to this will refer to something. 
    This is a way of saving the current value of this, which is in scope during the call to the constructor, 
    so that it can be used later when the function is called.
    -> If your functions don't require access to the state of your component, then sure, you don't need to bind them.
    */
    render () {
        return(
            <Card>
                
                 <CardSection>
                        <TextInput style = { loginFormStyle.textFieldStyle}
                         onChangeText = {userEmailText => this.setState({userEmailText})}
                         value = {this.state.userEmailText}
                         placeholder = {'Email'}
                        />
                 </CardSection>

             <CardSection>
                        <TextInput style = { loginFormStyle.textFieldStyle}
                         onChangeText = {passwordText => this.setState({passwordText})}
                         value = {this.state.passwordText}
                         placeholder = {'Password'}
                         secureTextEntry = {true}
                        />
            </CardSection>

            <Text style = {loginFormStyle.errorTextStyle}>
                {this.state.error}
            </Text>

             <CardSection>
                {this.renderLoginButton()}
            </CardSection>

            </Card>
        );
    }
}

const loginFormStyle = {

    textFieldStyle : {
        height : 30,
         width :350, 
         borderColor :'blue',
         borderWidth :1, 
         borderRadius:3
    },

    buttonStyle : {
        flex : 1,
        alignSelf : 'stretch',
        backgroundColor : '#fff',
        borderRadius : 5,
        borderWidth :1 ,
        height :30,
        borderColor : '#007aff',
        marginLeft : 5,
        marginRight :5
    },
    textStyle : {
        alignSelf: 'center',
        color : '#0072ff',
        marginTop : 4,
        fontSize : 16,
        fontWeight :'300',

    },
    errorTextStyle : {
        fontSize : 20,
        alignSelf : 'center',
        color : 'red'
    }

}
export default LoginForm;
