/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {If} from "./src/component/If";

type State = {
showTest1: Boolean,
showTest2:Boolean

}
 class App extends React.Component<any,State>{
  constructor(props){
    super(props);
  this.state = {
  showTest1:true,
  showTest2:true
  }
  }

  render(){
    const {showTest1,showTest2} = this.state;
    return(
      <SafeAreaView>
        <If show={showTest1} >
        <Text>
          show text 1
        </Text>
        </If>
        <If show ={showTest2} >
        <Text>
          show text 2
        </Text>
        </If>
       <Button onPress={()=>{this.setState({showTest1: !showTest1})}}
       title="show text 1"
       />

<Button onPress={()=>{this.setState({showTest2: !showTest2})}}
       title="show text 2"
       />
      </SafeAreaView>
    )
  }

}


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
