import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import Login from "../screen/Login";
import SignUp from "../screen/SignUp";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screen/Profile";
import ProdHome from "../screen/Products";
import { Image, StyleSheet } from "react-native";
import Details from "../screen/Details";
import Grain from "../screen/Grain";
import GrainDetails from "../screen/GrainDetails";
import { ProdContext } from "../context/Products";
import { useContext } from "react";
import Cart from "../screen/Cart";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const TabRoutes = ()=> {

  const { qnt } = useContext(ProdContext)

  return (
    <Tab.Navigator
    screenOptions={{
      headerTitle: "",
      headerShown: false, 
      tabBarStyle: { height: 65 },
      tabBarLabelStyle: { fontSize: 13,  padding: 5},
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#be9a6e',
      tabBarActiveBackgroundColor: '#be9a6e',
      tabBarInactiveBackgroundColor: '#2d1e16',  
    }}>
      <Tab.Screen name="Products" component={ProdHome} options={{tabBarIcon: () => (
        <Image source={require('../assets/icons/coffee.png')} style={styles.icon}/>
      )}}/>
      <Tab.Screen name="Grain" component={Grain} options={{tabBarIcon: () => (
        <Image source={require('../assets/icons/sack.png')} style={styles.icon} />
      ), unmountOnBlur: true}}/>
      <Tab.Screen name="Cart" component={Cart} options={{tabBarIcon: () => (
        <Image source={require('../assets/icons/trolley.png')} style={styles.icon}/>
      ), tabBarBadge:(qnt>0?qnt:null), unmountOnBlur: true }} />
      {/*<Tab.Screen name="Profile" component={Profile} options={{tabBarIcon: () => (
        <Image source={require('../assets/icons/coffee-beans(2).png')} style={styles.icon}/>
      )}}/>*/}
    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerTitle: "",
          headerShown: false
        }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='Tab' component={TabRoutes} />
          <Stack.Screen name='Grain Details' component={GrainDetails} />
          <Stack.Screen name='Details' component={Details} />


        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create(
  {
    icon: {
      width:35,
      height:35,
      objectFit: 'contain',
      marginTop: 12,
    }
  }
)