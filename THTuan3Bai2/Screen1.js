import React, { useState } from "react";
import { View, Image, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { Rating } from 'react-native-ratings';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from './Screen2';

const Stack = createNativeStackNavigator();

export default function Screen1({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("title");
  return (
    <View>

      <View>
        <Image source={require('./assets/vsmart_blue.png')} style={{height:'65%', resizeMode:'contain'}} />
      </View>

      <View style={{ marginLeft: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 15 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Rating type="star" ratingCount={5} imageSize={18} />
          <Text style={{ fontSize: 15, marginLeft: 10 }}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ fontSize: 15 }}>1.790.000 đ</Text>
          <Text style={{ fontSize: 15, textDecorationLine: 'line-through', marginLeft: '10%', color: '#808080' }}>1.790.000 đ</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ fontSize: 15, color: '#FA0000' }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <Image source={require('./assets/icon_cham_hoi.png')} style={{ marginLeft: 10 }}></Image>
        </View>
        <Picker selectedValue={selectedValue} style={{ height: 50, width: '100%' }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="4 MÀU-CHỌN MÀU" value="title" />
          <Picker.Item label="Bạc" value="bạc" />
          <Picker.Item label="Đỏ" value="đỏ" />
          <Picker.Item label="Đen" value="đen" />
          <Picker.Item label="Xanh" value="xanh" />
        </Picker>
      </View>

      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Button
          title="CHỌN MUA"
          color='red'
          onPress={() => navigation.navigate('Screen2')}
        />
      </View>
    </View >
  );
}