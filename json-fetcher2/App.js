import React, { Fragment } from 'react';
import { StyleSheet, View, TouchableHighlight, Image, FlatList, SafeAreaView } from 'react-native';
import {
  Container, Header, Content, List, ListItem, Left, Body, Right,
  Text, Thumbnail, Footer, FooterTab, Switch, Icon
} from 'native-base';

// App that shows The Username + Head and if clicked the uuid of McLeaks Alt
// Alt Database Provided by https://aaab-online.xyz/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    try {
      const response = await fetch("https://aaab-online.xyz/a");
      const json = await response.json();
      this.setState({ data: json });
    } catch (error) {
      console.error(error);
    }
  }

  _onPressButton(event) {
    console.log("UUID " + event);
    alert("UUID " + event);
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <SafeAreaView>
            <List
              dataArray={this.state.data}
              keyExtractor={item => item.id}
              renderRow={(item) =>
                <ListItem thumbnail iconLeft onPress={this._onPressButton.bind(this, item.id)}>
                  <Left>
                    <Thumbnail source={{ uri: 'https://minotar.net/helm/' + item.id + '/100.png' }} />
                  </Left>
                  <Body>
                    <Text>{item.name}</Text>
                  </Body>
                  <Right>
                    <Icon onPress={this._onPressButton.bind(this, item.id)} active name="arrow-forward" />
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
