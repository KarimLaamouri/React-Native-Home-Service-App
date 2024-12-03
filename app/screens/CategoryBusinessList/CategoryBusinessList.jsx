import { View, Text, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getBusinessByCategory } from '../../services/GlobalApi';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const { width } = Dimensions.get('window');

export default function CategoryBusinessList({ route, navigation }) {
    const [businessList, setBusinessList] = useState([]);
    const { categoryName } = route.params;

    useEffect(() => {
        getBusinessList();
    }, []);

    const getBusinessList = async () => {
        try {
            const result = await getBusinessByCategory(categoryName);
            setBusinessList(result.businessLists);
        } catch (error) {
            console.error('Error fetching businesses:', error);
        }
    };

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

    const renderItem = ({ item }) => (
        <View style={{
            width: width - 30,
            marginVertical: 8,
            borderRadius: 15,
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 3,
            overflow: 'hidden'
        }}>
            <Image
                source={{ uri: item?.images[0]?.url }}
                style={{
                    width: '100%',
                    height: 180,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                }}
            />
            <View style={{ padding: 12 }}>
                <Text style={{
                    color: '#FF9800',
                    fontSize: 12,
                    marginBottom: 4,
                }}>
                    {item?.category?.name}
                </Text>

                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginBottom: 4,
                }}>
                    {item?.name}
                </Text>

                <Text style={{
                    color: '#FF9800',
                    fontSize: 14,
                    marginBottom: 4,
                }}>
                    {item?.contactPerson}
                </Text>

                <Text style={{
                    color: '#666',
                    fontSize: 12,
                    marginBottom: 4,
                }}>
                    {item?.address}
                </Text>

                {renderStars(item?.rating)}

                <TouchableOpacity
                    style={{
                        backgroundColor: '#FF9800',
                        paddingVertical: 10,
                        borderRadius: 8,
                        alignItems: 'center',
                        marginTop: 8,
                    }}
                >
                    <Text style={{
                        color: '#fff',
                        fontSize: 14,
                        fontWeight: '600'
                    }}>
                        Book Now
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    {categoryName}
                </Text>
            </View>

            <FlatList
                data={businessList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    padding: 15,
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
} 