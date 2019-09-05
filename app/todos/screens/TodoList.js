import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Alert, View} from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Title, Body, Button, Right, Left , Item, Input} from 'native-base';
import { useObserver } from 'mobx-react-lite';
import {todoContext} from '../todo-context';
import {useNavigation} from 'react-navigation-hooks';
import { deleteTodo, postTodo } from '../todo-service';



export default function TodoList(){

    const todoStore = useContext(todoContext);
    const {navigate} = useNavigation();

    const [input, setInput] = useState("");

    

    useEffect(() => {
      onLoadData();
      
    }, [])
  
    const onLoadData = async () => {
      await todoStore.getTodos();
      console.log("todos", todoStore.todos);
    }
    const addTodo = async () => {
      console.log(input);
      await postTodo({title: input});

    }
    const getById = async (id) => {
      await todoStore.getTodo(id);
      console.log("todo", todoStore.todo);
      navigate("todoDetails");
    }


    return useObserver(() => (
        <Container style={{ backgroundColor: '#F5F5F5'}}>
        <Header>
          <Body>
            <Item>
              <Input onChangeText={setInput} placeholder="Add Todo" />  
              <Right>
                <Button onPress={()=> addTodo()}><Text>Add</Text></Button>
              </Right>
            </Item>            
          </Body>
        </Header>
        <Content>
          
          <List>
            {todoStore.todos.map(t => 
                <ListItem 
                  key={t.id} 
                  onPress={() =>
                    getById(t.id)}>
                    <Left>
                        <Text>
                            {t.title}
                        </Text>
                    </Left>
                    
                    <Right>
                        <Button danger onPress={() => deleteTodo(t.id)}>
                            <Text>Delete</Text>
                        </Button>
                    </Right>
                </ListItem>)}
          </List>
        </Content>
      </Container>
    
    ));
}


