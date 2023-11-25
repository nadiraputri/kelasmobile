import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Quran = () => {
    const [dataQuran, setDataQuran] = useState(null);
    //2. jalankan fungsi getQuran
    useEffect(() => {
        getQuran();
    });
    //1. ambil data dari    API
    const getQuran = async () => {
        try {
            const response = await fetch('https://equran.id/api/v2/surat');
            const data = await response.json();
            setDataQuran(data.data);
            console.log(data.data);
        }   catch (error) {
            console.log(error);
        }
    };


  return (
    <View style={styles.box}>
      <Text>Quran</Text>
      <ScrollView>
        {dataQuran?.map((data, index) =>  {
          return (
            <TouchableOpacity key={index}>
              <Text style={styles.text}>
                {data.nomor} - {data.nama}
              </Text>
            </TouchableOpacity>
          );
         }) }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
        padding: 15,
        flex: 1,
        backgroundColor: '#FFDEAD',
      },
      text: {
        fontSize: 20,
        color: 'black'
      },
});

export default Quran;