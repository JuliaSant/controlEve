
import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import 'react-native-gesture-handler';

import { View, Text } from 'react-native';

export default props => {
  return (
    <View style={{flex:1}}>
      <Text style={{padding:20, alignSelf: 'center'}}>FUNCIONARIOS</Text>
  <Card style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>
    <Card.Content>
      <Button>Adicionar funcionario</Button>
    </Card.Content>

    <Card.Content style={{backgroundColor: '#5BB1E6', borderRadius: 5, alignItems: 'center', marginTop: 10}}>
      <Title>João Carlos</Title>
      <Paragraph>Segurança</Paragraph>
      <Paragraph>3 eventos</Paragraph>
    </Card.Content>

    <Card.Content style={{backgroundColor: '#5BB1E6', borderRadius: 5, alignItems: 'center', marginTop: 10}}>
      <Title>João Carlos</Title>
      <Paragraph>Segurança</Paragraph>
      <Paragraph>3 eventos</Paragraph>
    </Card.Content>

    <Card.Content style={{backgroundColor: '#5BB1E6', borderRadius: 5, alignItems: 'center', marginTop: 10}}>
      <Title>João Carlos</Title>
      <Paragraph>Segurança</Paragraph>
      <Paragraph>3 eventos</Paragraph>
    </Card.Content>

    <Card.Content style={{backgroundColor: '#5BB1E6', borderRadius: 5, alignItems: 'center', marginTop: 10}}>
      <Title>João Carlos</Title>
      <Paragraph>Segurança</Paragraph>
      <Paragraph>3 eventos</Paragraph>
    </Card.Content>

    <Card.Content style={{backgroundColor: '#5BB1E6', borderRadius: 5, alignItems: 'center', marginTop: 10}}>
      <Title>João Carlos</Title>
      <Paragraph>Segurança</Paragraph>
      <Paragraph>3 eventos</Paragraph>
    </Card.Content>

    <Card.Content style={{backgroundColor: '#5BB1E6', borderRadius: 5, alignItems: 'center', marginTop: 10}}>
      <Title>João Carlos</Title>
      <Paragraph>Segurança</Paragraph>
      <Paragraph>3 eventos</Paragraph>
    </Card.Content>

    
  </Card>
  </View>
    )
}
