/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import { Header ,Button, Spinner} from './src/components/common/';
import LoginForm from './src/components/LoginForm';
import firebase from 'firebase';

class App extends Component {
  state = { loggedIn:null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyDmhfXRkVopKycBb3jtVRQzz73eEeuYMX4",
      authDomain: "reactnative-auth-f4051.firebaseapp.com",
      databaseURL: "https://reactnative-auth-f4051.firebaseio.com",
      projectId: "reactnative-auth-f4051",
      storageBucket: "reactnative-auth-f4051.appspot.com",
      messagingSenderId: "1003965980109"
    });

    firebase.auth().onAuthStateChanged(user => {
        if(user){
          this.setState({ loggedIn: true });
        }else{
          this.setState({ loggedIn: false });
        }
      });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return <Button onPress = {() => firebase.auth().signOut()}>Log out</Button>;
      case false:
        return <LoginForm />;
      default:
        return (
          <View style = {{flex: 1,justifyContent:'center', alignItems: 'center'}}>
            <Spinner />
          </View>
        );
    }
  }

  render(){
    return (
      <View>
        <Header headerTitle = {'Authentication'} />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
