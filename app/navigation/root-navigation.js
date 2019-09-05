import {createAppContainer, createStackNavigator} from 'react-navigation';
import TodoList from '../todos/screens/TodoList';
import TodoDetails from '../todos/screens/TodoDetails';


const MainNavigator = createStackNavigator({
    todoList :{
        screen: TodoList,
        navigationOptions: () => ({
            title: 'Todo List'
        })
    },
    todoDetails :{
        screen: TodoDetails
    }
})
const Rootnavigation = createAppContainer(MainNavigator);
export default Rootnavigation;
