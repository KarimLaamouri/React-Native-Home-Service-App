import { View, FlatList, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import PopularServices from './PopularServices';
import TopRated from './TopRated';
import { getCategory, getTopBusinessInCategory } from '../../services/GlobalApi';

export default function HomeScreen({ navigation }) {
  const [categoryList, setCategoryList] = useState([]);
  const [topBusinessList, setTopBusinessList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    try {
      const result = await getCategory();
      setCategoryList(result.categories);
      getTopBusinessList(result.categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const getTopBusinessList = async (categories) => {
    try {
      const result = await getTopBusinessInCategory(categories);
      setTopBusinessList(result.businessLists);
    } catch (error) {
      console.error('Error fetching top businesses:', error);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getCategoryList().finally(() => setRefreshing(false));
  }, []);

  const renderItem = () => (
    <>
      <Header />
      <View style={{ padding: 15 }}>
        <PopularServices categoryList={categoryList} navigation={navigation} />
        <TopRated topBusinessList={topBusinessList} />
      </View>
    </>
  );

  return (
    <FlatList
      data={[{ key: 'content' }]}
      renderItem={renderItem}
      style={{ flex: 1, backgroundColor: '#fff' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={16}
    />
  );
}
