import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './src/components/Home';
import Menu from './src/components/Menu';
import Booking from './src/components/Booking';
import Profile from './src/components/Profile';
import Code from './src/components/Code';



const App = () => {
  const [activeMenu, setActiveMenu] = useState('Home');
  const Tab = createBottomTabNavigator();

  return (
    
    <View style={{flex: 1,  backgroundColor: '#FAFAFA'}}>
      <StatusBar backgroundColor={'#FAFAFA'} barStyle="dark-content" />
      <View
        style={{
          backgroundColor: '#EB984E',
          flexDirection: 'row',
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: '#bdbdbd',
        }}>
        <TouchableOpacity
        onPress={() => setActiveMenu('Home')}
          style={{flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeMenu == 'Home' ? '#FAD7A0' : '#EB984E',
            elevation: activeMenu == 'Home' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 80,}}>
          <Icon name="home" size={22} color="#6E2C00" />
          <Text style={{color: '#6E2C00'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => setActiveMenu('Menu')}
          style={{flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 12,
            borderRadius: 80,
            backgroundColor: activeMenu == 'Menu' ? '#FAD7A0' : '#EB984E',
            elevation: activeMenu == 'Menu' ? 2 : 0,}}>
          <Icon name="boxes" size={22} color="#6E2C00" />
          <Text style={{color: activeMenu == 'Menu' ? '#6E2C00' : '#6E2C00'}}>
            Menu 
          </Text>
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <TouchableOpacity
          onPress={() => setActiveMenu('code')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#EB984E',
              position: 'absolute',
              zIndex: 1,
              bottom: 10,
              elevation: 3,
              borderWidth: 3,
              borderColor: '#6E2C00',
            }}>
            <Icon name="qrcode" size={22} color="#6E2C00" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
        onPress={() => setActiveMenu('Booking')}
          style={{flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: activeMenu == 'Booking' ? '#FAD7A0' : '#EB984E',
            elevation: activeMenu == 'Booking' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 80,}}>
          <Icon name="sack-dollar" size={22} color="#6E2C00" />
          <Text
            style={{color: activeMenu == 'Booking' ? '#6E2C00' : '#6E2C00'}}>
            Booking
          </Text>  
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => setActiveMenu('Profile')}
          style={{flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: activeMenu == 'Profile' ? '#FAD7A0' : '#EB984E',
            elevation: activeMenu == 'Profile' ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 80,}}>
          <Icon name="user" size={22} color="#6E2C00" />
          <Text style={{color: activeMenu == 'Profile' ? '#6E2C00' : '#6E2C00'}}>
            Profile
          </Text>
        </TouchableOpacity>
        
      </View>
      {activeMenu == 'Home' && <Home />}
      {activeMenu == 'Menu' && <Menu />}
      {activeMenu == 'Booking' && <Booking />}
      {activeMenu == 'Profile' && <Profile />}
      {activeMenu == 'Code' && <Code />}
      
      </View>
  );
};

export default App;