
import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';

export default props => {
  return (
    <View style={{flex:1}}>
      <Text style={{padding:20, alignSelf: 'center'}}>EVENTOS</Text>
  <Card>
    <Card.Cover style={{justifyContent: 'center'}} source={{ uri: 'https://picsum.photos/500' }} />
    <Title>Festa Empresa</Title>
    <Paragraph>10 Funcionarios</Paragraph>
    <Paragraph>50 Convidados confirmados</Paragraph>
    <Card.Actions style={{justifyContent: 'center',}}>
    
      <Button>Editar</Button>
    </Card.Actions>

    <Card.Cover style={{justifyContent: 'center'}} source={{ uri: 'https://picsum.photos/500' }} />
    <Title>Ano novo</Title>
    <Paragraph>10 Funcionarios</Paragraph>
    <Paragraph>50 Convidados confirmados</Paragraph>
    <Card.Actions style={{justifyContent: 'center',}}>
    
      <Button>Editar</Button>
    </Card.Actions>
    
  </Card>
  </View>
    )
}
