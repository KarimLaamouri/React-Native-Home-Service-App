import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../screens/Utils/Colors';

const { width } = Dimensions.get('window');

export default function BusinessDetails({ route }) {
    const { business } = route.params;

    const renderGalleryItem = ({ item }) => (
        <Image
            source={{ uri: item?.url }}
            style={{
                width: (width - 50) / 2,
                height: 120,
                borderRadius: 12,
                margin: 4,
            }}
        />
    );

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* Header Section */}
            <View style={{ padding: 16 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                    <Image
                        source={{ uri: business?.images[0]?.url }}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                        }}
                    />
                    <View style={{ flex: 1 }}>
                        <View style={{
                            backgroundColor: '#FFF3E0',
                            paddingHorizontal: 12,
                            paddingVertical: 6,
                            borderRadius: 20,
                            alignSelf: 'flex-start',
                            marginBottom: 8,
                        }}>
                            <Text style={{
                                color: '#FF9800',
                                fontSize: 14,
                                fontWeight: '600'
                            }}>
                                {business?.category?.name}
                            </Text>
                        </View>
                        <Text style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            marginBottom: 4,
                        }}>
                            {business?.name}
                        </Text>
                    </View>
                </View>

                {/* Contact Info */}
                <View style={{ marginTop: 20, gap: 12 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome name="map-marker" size={20} color="#666" />
                        <Text style={{ color: '#666', fontSize: 15 }}>
                            {business?.address}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome name="envelope" size={18} color="#666" />
                        <Text style={{ color: '#666', fontSize: 15 }}>
                            {business?.email}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome name="user" size={18} color="#FF9800" />
                        <Text style={{ color: '#FF9800', fontSize: 16, fontWeight: '500' }}>
                            {business?.contactPerson}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <FontAwesome name="clock-o" size={18} color="#666" />
                        <Text style={{ color: '#666', fontSize: 15 }}>
                            Available 8:00 AM to 10:00 PM
                        </Text>
                    </View>
                </View>
            </View>

            {/* Description Section */}
            <View style={{ padding: 16, marginTop: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                    Description
                </Text>
                <Text style={{ color: '#666', fontSize: 15, lineHeight: 22 }}>
                    {business?.about}
                </Text>
            </View>

            {/* Gallery Section */}
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
                    Gallery
                </Text>
                <FlatList
                    data={business?.images}
                    renderItem={renderGalleryItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    scrollEnabled={false}
                    contentContainerStyle={{ gap: 8 }}
                />
            </View>

            {/* Book Now Button */}
            <View style={{ padding: 16, paddingBottom: 30 }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#FF9800',
                        paddingVertical: 15,
                        borderRadius: 8,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '600'
                    }}>
                        Book Now
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
} 