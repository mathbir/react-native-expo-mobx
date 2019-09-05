import React, {useContext, useEffect} from 'react';
import {StyleSheet, Alert, View} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Title, Body, Button } from 'native-base';



import { useObserver } from 'mobx-react-lite';
import {todoContext} from './todo-context';



export default function TodoList(){

    const todoStore = useContext(todoContext)

    useEffect(() => {
      onLoadData();
      
    }, [])
  
    const onLoadData = async () => {
      await todoStore.getTodos();
      console.log("todos", todoStore.todos);
    }

    return useObserver(() => (
        <Container>
        <Header>
            <Body>
                <Title>Todo List</Title>
            </Body>
        </Header>
        <Content>
          <List>
            {todoStore.todos.map(t => 
                <ListItem key={t.id}>
                    <Text>
                        {t.title}
                    </Text>
                    
                </ListItem>)}
          </List>
        </Content>
      </Container>
    
    ))
}


