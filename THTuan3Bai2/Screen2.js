import React, { useState } from "react";
import { View, Image, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { Rating } from 'react-native-ratings';

export default function App() {
    return (
        <View style={{ margin: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={require('./assets/vsmart_blue.png')} style={{ width: 90, height: 100 }} />
                <Text style={{ marginLeft: '10%' }}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
            </View>
            <View style={{ backgroundColor: '#C4C4C4' }}>
                <Text>Chọn một màu bên dưới:</Text>
                <View style={{width:'100%', alignItems:'center'}}>
                    <Button title="" color='#C5F1FB'></Button>
                    <Button title="" color='#F30D0D'></Button>
                    <Button title="" color='#000000'></Button>
                    <Button title="" color='#234896'></Button>
                </View>
            </View>
        </View>
    );
}