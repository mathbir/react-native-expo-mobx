import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Alert, View} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Title, Body, Button, Right, Left } from 'native-base';
import {useNavigation, useNavigationParam} from 'react-navigation-hooks';



import { useObserver } from 'mobx-react-lite';
import {todoContext} from '../todo-context';



export default function TodoDetails(){
    const [input, setInput] = useState("");

    const todoStore = useContext(todoContext);

    return useObserver(() => (
        <Container style={{ backgroundColor: '#F5F5F5'}}>
        <Header>
            <Body>
                <Title><Text>{todoStore.todo.title}</Text></Title>
            </Body>
        </Header>
        <Content>
            <Item>
                <Input onChangeText={setInput} value={input} placeholder="Add Todo" />  
                <Right>
                        <Button onPress={()=> updateTodo()}><Text>Add</Text></Button>
                </Right>
            </Item>   
       
        </Content>
      </Container>
    
    ))
}


