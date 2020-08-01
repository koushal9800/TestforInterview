
import React from 'react';
import { StyleSheet, Text, View,StatusBar,TextInput,Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class App extends React.Component {
  state = {
    newTodoItem: ''
  };

  newTodoItemController = textValue => {
    this.setState({
      newTodoItem: textValue
    });
  };

  
  render(){
  return (
    <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.appTitle}>Minimalist Todo App</Text>

    <View style={styles.card}>
    <TextInput
  style={styles.input}
  placeholder={'Add an item!'}
  value={newTodoItem}
  onChangeText={this.newTodoItemController}
  placeholderTextColor={'#999'}
  returnKeyType={'done'}
  autoCorrect={false}
/>
</View>
    </LinearGradient>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
    // justifyContent: 'center'
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300'
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    width:'90%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50,50,50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 5
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  }
});
