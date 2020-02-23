import React, { Component } from 'react';
import { Container, Header, Item, Input, Content, Footer, FooterTab, Button, Icon, Text, Left, Body, Right, Title, Card, CardItem, List, ListItem, Separator, Thumbnail, Drawer, StyleProvider} from 'native-base';
import { View, ScrollView, Image } from 'react-native';
import { MapView } from 'react-native-maps';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import commonColor from './native-base-theme/variables/commonColor';

class HomeScreen extends React.Component {

  static navigationOptions = {
        header: null
    }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Header>
          <Left>
              <Button transparent>
                  <Icon name='menu' />
              </Button>
          </Left>
          <Body>
              <Title>AppTours</Title>
          </Body>
          <Right>
              <Button transparent>
                  <Icon name='settings' />
              </Button>
          </Right>
        </Header>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="¿Buscas un sitio específico?" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
        <ScrollView>

          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate('Place1')}>
              <Left>
                <Body>
                  <Text>Biomuseo</Text>
                  <Text note>Calzada de Amador</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody button onPress={() => this.props.navigation.navigate('Place1')}>   
              <Image source={require('./assets/biomuseo.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Me gusta</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 reseñas</Text>
                </Button>
              </Body>
              <Right>
                <Text>Hace 11 horas</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem button onPress={() => this.props.navigation.navigate('Place2')}>
              <Left>
                <Body>
                  <Text>Balboa Boutiques Plaza</Text>
                  <Text note>Avenida Balboa</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody button onPress={() => this.props.navigation.navigate('Place2')}>
              <Image source={require('./assets/balboaplaza.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>9 Me gusta</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>3 reseñas</Text>
                </Button>
              </Body>
              <Right>
                <Text>Hace 1 día</Text>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Aziza Shots</Text>
                  <Text note>Avenida Central Santa Ana</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('./assets/azizashots.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>24 Me gusta</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>8 reseñas</Text>
                </Button>
              </Body>
              <Right>
                <Text>Hace 2 días</Text>
              </Right>
            </CardItem>
          </Card>

        </ScrollView>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical active>
              <Icon name="home" />
              <Text>Inicio</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Category')}>
              <Icon name="bicycle" />
              <Text>Tours</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Map')}>
              <Icon name="map" />
              <Text>Mapa</Text>
            </Button>
            <Button vertical>
              <Icon name="heart" />
              <Text>Favoritos</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </StyleProvider>
    );
  }
}

class MapScreen extends React.Component {

static navigationOptions = {
        header: null
    }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
      <Container>
        <Header>
          <Left>
              <Button transparent>
                  <Icon name='menu' />
              </Button>
          </Left>
          <Body>
              <Title>AppTours</Title>
          </Body>
          <Right>
              <Button transparent>
                  <Icon name='settings' />
              </Button>
          </Right>
        </Header>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="¿Buscas un sitio específico?" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>

        <Content>
         <MapView/>
        </Content>

        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name="home" />
              <Text>Inicio</Text>
            </Button>
            <Button vertical>
              <Icon name="bicycle" />
              <Text>Tours</Text>
            </Button>
            <Button vertical active>
              <Icon name="map" />
              <Text>Mapa</Text>
            </Button>
            <Button vertical>
              <Icon name="heart" />
              <Text>Favoritos</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      </StyleProvider>
    );
  }
}

class PlaceScreen1 extends React.Component {

  static navigationOptions = {
        title: 'Detalles del lugar'
    }

 render() {
    return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Content padder>
        <Image source={require('./assets/biomuseo.png')} style={{height: 200, width: null, flex: 1}}/>
          <Card transparent>
            <CardItem header bordered>
              <Text>Biomuseo</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  El Biomuseo cuenta la espectacular historia de 
                  cómo el surgimiento del istmo de Panamá cambió 
                  el orden natural de nuestro planeta. Así como 
                  un pedazo pequeño de tierra tuvo un impacto 
                  enorme en todo el mundo, cada uno de nosotros 
                  puede convertirse en un agente de cambio.
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Horarios:{'\n'}{'\n'}
                  Lunes: {'\n'}Cerrado{'\n'}{'\n'}
                  Martes a viernes: {'\n'}10:00 am - 4:00 pm{'\n'}{'\n'}
                  Sábados y domingos: {'\n'}10:00 am - 5:00 pm
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </StyleProvider>
    );
  }
}

class PlaceScreen2 extends React.Component {

  static navigationOptions = {
        title: 'Detalles del lugar'
    }

 render() {
    return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <Content padder>
        <Image source={require('./assets/balboaplaza.png')} style={{height: 200, width: null, flex: 1}}/>
          <Card transparent>
            <CardItem header bordered>
              <Text>Balboa Boutiques Plaza</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                 El centro comercial Balboa Boutiques es uno de los malls 
                 más elegantes y exclusivos de la Ciudad de Panamá.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </StyleProvider>
    );
  }
}

class CategoryScreen extends React.Component {

static navigationOptions = {
        title: 'Categorías'
    }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>Cultura</Text>
            </ListItem>
            <ListItem>
              <Text>Museos</Text>
            </ListItem>
            <ListItem>
              <Text>Exposiciones</Text>
            </ListItem>
            <ListItem>
              <Text>Historia</Text>
            </ListItem>
            <ListItem>
              <Text>Avistamiento</Text>
            </ListItem>
            <ListItem>
              <Text>Zoológico</Text>
            </ListItem>
            <ListItem>
              <Text>Tour</Text>
            </ListItem>
            <ListItem>
              <Text>Aventura</Text>
            </ListItem>
            <ListItem>
              <Text>Deportes</Text>
            </ListItem>
            <ListItem>
              <Text>Compras</Text>
            </ListItem>
            <ListItem>
              <Text>Arte</Text>
            </ListItem>
            <ListItem>
              <Text>Recreación</Text>
            </ListItem>
            <ListItem>
              <Text>Miradores</Text>
            </ListItem>
            <ListItem>
              <Text>Degustación</Text>
            </ListItem>
            <ListItem>
              <Text>Iglesias</Text>
            </ListItem>
            <ListItem>
              <Text>Religión</Text>
            </ListItem>
            <ListItem>
              <Text>Parques</Text>
            </ListItem>
            <ListItem>
              <Text>Infantil</Text>
            </ListItem>
            <ListItem>
              <Text>Senderismo</Text>
            </ListItem>
            <ListItem>
              <Text>Naturaleza</Text>
            </ListItem>
            <ListItem>
              <Text>Vida Nocturna</Text>
            </ListItem>
            <ListItem>
              <Text>Marinas</Text>
            </ListItem>
            <ListItem>
              <Text>Ferries</Text>
            </ListItem>
            <ListItem>
              <Text>Teatros</Text>
            </ListItem>
            <ListItem>
              <Text>Terror</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
    Category: CategoryScreen,
    Place1: PlaceScreen1,
    Place2: PlaceScreen2,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
