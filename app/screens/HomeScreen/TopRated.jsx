import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const ITEM_WIDTH = (width - 40) / 2;


export default function TopRated({ topBusinessList, title = "Top Rated Per Category", navigation }) {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 4 }}>
                {[1, 2, 3, 4, 5].map((_, index) => {
                    if (index < fullStars) {
                        return (
                            <FontAwesome
                                key={index}
                                name="star"
                                size={14}
                                color="#FFB300"
                                style={{ marginRight: 2 }}
                            />
                        );
                    } else if (index === fullStars && hasHalfStar) {
                        return (
                            <FontAwesome
                                key={index}
                                name="star-half-o"
                                size={14}
                                color="#FFB300"
                                style={{ marginRight: 2 }}
                            />
                        );
                    } else {
                        return (
                            <FontAwesome
                                key={index}
                                name="star-o"
                                size={14}
                                color="#FFB300"
                                style={{ marginRight: 2 }}
                            />
                        );
                    }
                })}
            </View>
        );
    };

    const renderItem = ({ item }) => {
        if (!item) {
            return (
                <View style={{
                    width: ITEM_WIDTH,
                    height: 220,
                    backgroundColor: '#f1f1f1',
                    margin: 4,
                    borderRadius: 10,
                }} />
            );
        }

        return (
            <TouchableOpacity
            style={{
                width: ITEM_WIDTH,
                margin: 4,
                borderRadius: 10,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 3,
                overflow: 'hidden'
            }}
            onPress={() => navigation.navigate('BusinessDetails', { business: item })}
        >
                <Image
                    source={{ uri: item?.images[0]?.url }}
                    style={{
                        width: '100%',
                        height: 120,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        resizeMode: 'cover',
                    }}
                />
                <View style={{ padding: 10 }}>
                    <Text style={{
                        color: '#FF9800',
                        fontSize: 12,
                        marginBottom: 4,
                    }}>
                        {item?.category?.name}
                    </Text>

                    <Text style={{
                        fontSize: 14,
                        fontWeight: 'bold',
                        marginBottom: 2,
                    }}>
                        {item?.name}
                    </Text>

                    <Text style={{
                        color: '#FF9800',
                        fontSize: 13,
                        marginBottom: 2,
                    }}>
                        {item?.contactPerson}
                    </Text>

                    <Text style={{
                        color: '#666',
                        fontSize: 11,
                    }}>
                        {item?.address}
                    </Text>

                    {renderStars(item?.rating)}

                    <TouchableOpacity
                        style={{
                            backgroundColor: '#FF9800',
                            paddingVertical: 8,
                            borderRadius: 6,
                            alignItems: 'center',
                            marginTop: 4,
                        }}
                        onPress={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <Text style={{
                            color: '#fff',
                            fontSize: 13,
                            fontWeight: '500'
                        }}>
                            Book Now
                        </Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ marginTop: 25 }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
                paddingHorizontal: 20,
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '600',
                }}>
                    {title}
                </Text>
                <TouchableOpacity>
                    <Text style={{
                        color: Colors.PRIMARY,
                        fontSize: 13,
                    }}>
                        View all
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={topBusinessList?.length > 0 ? topBusinessList : Array(4).fill(null)}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                    paddingHorizontal: 8,
                    paddingBottom: 20,
                    alignItems: 'center',
                }}
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 8,
                }}
                style={{
                    marginHorizontal: -4,
                }}
            />
        </View>
    );
} 