
import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import 'react-native-gesture-handler';
import { View, Text } from 'react-native';

export default props => {
  return (
    <View>
<Text style={{padding:20, alignSelf: 'center'}}>Perfil</Text>
<Card>

<Card.Content>
  <Title>Adm dos Eventos</Title>
  <Paragraph>Editar perfil</Paragraph>
  <Paragraph></Paragraph>
</Card.Content>

<Card.Cover style={{justifyContent: 'center'}} source={{ uri: 'https://picsum.photos/200' }} />
<Title>Eventos</Title>
<Card.Actions style={{justifyContent: 'center',}}>

  <Button>Editar</Button>
</Card.Actions>

<Card.Cover style={{justifyContent: 'center'}} source={{ uri: 'https://picsum.photos/200' }} />
<Title>Funcionarios</Title>
<Card.Actions style={{justifyContent: 'center',}}>

  <Button>Editar</Button>
</Card.Actions>
</Card>
    </View>
    
    )
}