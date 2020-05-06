import React, { Fragment } from 'react';
import { StyleSheet, View, TouchableHighlight, Image, FlatList, SafeAreaView } from 'react-native';
import {
  Container, Header, Content, List, ListItem, Left, Body, Right,
  Text, Thumbnail, Footer, FooterTab, Switch, Icon
} from 'native-base';

export default class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = { data: [] };
    // bindings
    this._onPressButton = this._onPressButton.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api?results=20");
      const json = await response.json();
      this.setState({ data: json.results });
    } catch (error) {
      console.error(error);
    }
  }

  _onPressButton(event) {
    console.log("you touched " + event.target.value);
    alert("hey");
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <SafeAreaView>
            <List
              dataArray={this.state.data}
              keyExtractor={item => item.login.uuid}
              renderRow={(item) =>
                <ListItem thumbnail iconLeft onPress={this._onPressButton}>
                  <Left>
                    <Thumbnail source={{ uri: item.picture.thumbnail }} />
                  </Left>
                  <Body>
                    <Text>{item.name.first + " " + item.name.last}</Text>
                  </Body>
                  <Right>
                    <Icon onPress={this._onPressButton} active name="arrow-forward" />
                  </Right>
                </ListItem>
              }>
            </List>
          </SafeAreaView>
        </Content>
        <Footer></Footer>
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
});
