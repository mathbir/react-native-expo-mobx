import {createAppContainer, createStackNavigator} from 'react-navigation';
import TodoList from '../todos/TodoList'

const MainNavigator = createStackNavigator({
    todoList :{
        screen: TodoList,
        navigationOptions: () => ({
            title: 'Mobx React Lite'
        })
    }
})
const Rootnavigation = createAppContainer(MainNavigator);
export default Rootnavigation;
