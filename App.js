import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import Register from "./src/screens/Register";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Login" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
