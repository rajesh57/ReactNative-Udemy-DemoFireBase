

// Class Component
import React, {Component} from 'react';

import firebase from 'firebase';

// Don't want to specify the header.js file name here index.js file called automatically.
// To import the component use it {}
import { Header, Spinner} from './components/common'; 

// Importing login form class component.
import LoginForm from './components/LoginForm';

import {
    View,
    Text,
    Button
} from  'react-native';


class App extends Component {

    // Initial user logged in state false 
    state = {loggedIn : false};

    // Life cycle method
    componentWillMount() {

        // firebase initizalization : get the below config from firebase console.
        firebase.initializeApp ({
                apiKey: 'AIzaSyCz2XsSz-GorUB22Tgo7oonyzmgor2aExM',
                authDomain: 'demornapp.firebaseapp.com',
                databaseURL: 'https://demornapp.firebaseio.com',
                projectId: 'demornapp',
                storageBucket: 'demornapp.appspot.com',
                messagingSenderId: '436101491310',
                appId: '1:436101491310:web:ce050e350dc2bfd8'
              })

              // Fire base user Auth state changes
              firebase.auth().onAuthStateChanged ((user) => {
                  if(user) {
                    this.setState({
                        loggedIn : true
                    });
                  } else  {
                    this.setState({
                        loggedIn : false
                    });
                  }
              });
    }

    // Logout Action
    // When Sign out state false and showing login form.
    onLogoutButtonPressed() {
        firebase.auth().signOut()
    }

    // Manage login and logout form based on the fire base Auth state
    manageRenderContent() {

        switch(this.state.loggedIn) {
            case  true:
                    return (
                        <Button style = {AppStyle.buttonStyle}
                        onPress={this.onLogoutButtonPressed.bind(this)}
                        title="Log out"/>)
              
            case  false:
                    return (<LoginForm/>)
            default:
                   return (<Spinner/>)     
        }
    }

    // Initial render 
    render () {
        return (
           <View>
               <Header HeaderText = "Login"/>
               {this.manageRenderContent()}
           </View>
        );
    }
}


const AppStyle = {

    textStyle : {
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : 100,
        marginLeft : 100
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

}

export default App;
