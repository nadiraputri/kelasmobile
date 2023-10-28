import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const Menu = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFDEAD'}}>
      <Text style={{fontSize: 22, color: '#000000'}}>Studio Foto</Text>
      <Text style={{fontSize: 16, color: '#000000'}}>Selamat Datang Di Menu Kami</Text>
      <Text style={{fontSize: 12, color: '#000000'}}>Disini Kami siap melayani anda! </Text>
    </View>
  );
};

export default Menu;