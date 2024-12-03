import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3 - 20;

export default function PopularServices({ categoryList, navigation }) {
    const renderItem = ({ item }) => {
        if (!item) {
            return (
                <View style={{
                    width: ITEM_WIDTH,
                    height: 90,
                    backgroundColor: '#f1f1f1',
                    margin: 5,
                    borderRadius: 12,
                }} />
            );
        }

        return (
            <TouchableOpacity
                style={{
                    width: ITEM_WIDTH,
                    height: 90,
                    margin: 5,
                    borderRadius: 12,
                    backgroundColor: item.bgcolor?.hex,
                    padding: 10,
                }}
                onPress={() => navigation.navigate('CategoryBusinessList', {
                    categoryName: item.name
                })}
            >
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                }}>
                    <Image
                        source={{ uri: item.icon?.url }}
                        style={{
                            width: 35,
                            height: 35,
                            resizeMode: 'contain',
                            marginBottom: 8
                        }}
                    />
                    <Text style={{
                        fontWeight: '500',
                        textAlign: 'center',
                        fontSize: 12,
                    }}>
                        {item.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ marginTop: 15 }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
                paddingHorizontal: 15,
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '600'
                }}>
                    Popular Services
                </Text>
                <TouchableOpacity>
                    <Text style={{
                        color: Colors.PRIMARY,
                        fontSize: 13
                    }}>
                        View all
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={categoryList.length > 0 ? categoryList : Array(3).fill(null)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                    paddingHorizontal: 10,
                }}
            />
        </View>
    );
} 