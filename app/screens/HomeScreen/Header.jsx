import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

export default function Header() {
    return (
        <View style={{ 
            padding: 30, 
            backgroundColor: '#FF9800',
            marginTop: -20,
            paddingTop: 50,
        }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{
                    width: 40,
                    height: 40,
                    backgroundColor: Colors.GREEN,
                    borderRadius: 99,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{ color: '#fff', fontSize: 20 }}>M</Text>
                </View>
                <View>
                    <Text style={{ color: Colors.WHITE }}>Welcome,</Text>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Mohammed ali</Text>
                </View>
            </View>

            <View style={{
                marginTop: 20,
                padding: 10,
                backgroundColor: '#fff',
                borderRadius: 8,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TextInput
                    placeholder="Search here.."
                    style={{ flex: 1 }}
                />
            </View>
        </View>
    );
}