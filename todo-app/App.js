import React, { Component } from 'react';
import {
  StyleSheet, Text, View, FlatList, AsyncStorage,
  TextInput, Keyboard, Platform
} from 'react-native'; 
import {
  Container, Header, Content, Item, Input, List, 
  Button, Icon, Left, Footer, FooterTab 
} from 'native-base';

export default class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = { tasks: [], text: "" };
    // constructor bindings 
    this.buttonPressed = this.buttonPressed.bind(this);
    this.addTask = this.addTask.bind(this);
    this.changeTextHandler = this.changeTextHandler.bind(this);
  }
  buttonPressed() {
    alert("you clicked menu on standard format");
    console.log("menu pressed, standard format");
  }
  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;
    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;
          return {
            tasks: tasks.concat({ ke: tasks.length, text: text })
          }
        }
      )
    }
  };
  changeTextHandler = mytext => {
    this.setState({ text: mytext });
    console.log("changeTextHandler: " + mytext);
  };
  deleteTask = i => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();
        tasks.splice(i, 1);
        return { tasks: tasks };
      }
    )
  };
  render() {
    return (
      <Container>
        <Header>
          <Left> 
            <Button onPress={this.buttonPressed} transparent>
              <Icon name='menu' />
            </Button>
          </Left>
        </Header>
        <Item rounded>
          <Input
            onChangeText={this.changeTextHandler}
            onSubmitEditing={this.addTask}
            value={this.state.text}
            placeholder={""}
            returnKeyType="done"
            returnKeyLabel="done"
          />
        </Item>
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={({ item, index }) =>
          <View>
            <View style={styles.listItemCont}>
              <Text style={styles.listItem}>
                {item.text}
              </Text>
              <Button iconRight transparent primary
                onPress={ () => this.deleteTask(index) } >
                <Icon name='trash' />
              </Button>
            </View>
            <View style={styles.hr} />
          </View>}
        />
      </Container> 
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingRight: 10,
    paddingLeft: 10,
    width: "100%"
  },
  listItem: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    height: 1,
    backgroundColor: "white"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    width: "100%"
  }
});