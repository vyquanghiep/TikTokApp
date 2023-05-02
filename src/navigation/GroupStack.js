import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GroupScreen from '../screens/GroupScreen';
import ListGroupScreen from '../screens/ListGroupScreen';

const GroupStack = createNativeStackNavigator();

const GroupStackScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <GroupStack.Navigator initialRouteName="ListGroupScreen">
        <GroupStack.Screen
          name="ListGroupScreen"
          component={ListGroupScreen}
          options={{ headerShown: false }}
        />
        <GroupStack.Screen
          name="GroupScreen"
          component={GroupScreen}
          options={{ headerShown: false }}
        />
      </GroupStack.Navigator>
    </NavigationContainer>
  );
};

export default GroupStackScreen;
