import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Constants from '../../Constants';
import ProductCard from '../../components/cards/ProductCard';
import { useNavigation } from '@react-navigation/native';

const recentlyViewed = [
  {
    id: 1,
    thumbnail:
      'https://www.bluristorante.com/wp-content/uploads/2019/03/9-Traditional-Italian-Food-Dishes-You-Will-Love-1080x700.jpg',
    price: '5223.56',
    name: 'Paella Valenciana',
  },
  {
    id: 2,
    thumbnail:
      'https://www.thatsmags.com/image/view/201807/favorita-1.jpg',
    price: '2342.56',
    name: 'Pimientos de Padron',
  },
  {
    id: 3,
    thumbnail:
      'https://149366112.v2.pressablecdn.com/wp-content/uploads/2016/09/lead7.jpg',
    price: '5223.56',
    name: 'Albondigas',
  },
  {
    id: 4,
    thumbnail:
      'https://i.insider.com/5f340aab5af6cc63ab37bf14?width=1000&format=jpeg&auto=webp',
    price: '5223.56',
    name: 'Gazpacho abcsd',
  },
  {
    id: 5,
    thumbnail:
      'https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg',
    price: '5223.56',
    name: 'Fruits',
  },
];

const recommended = [
  {
    id: 1,
    name: 'Denim Jeans',
  },
  {
    id: 2,
    name: 'Mini Skirt',
  },
  {
    id: 3,
    name: 'Jacket',
  },
  {
    id: 4,
    name: 'Accessories',
  },
  {
    id: 5,
    name: 'Sports Accessories',
  },
  {
    id: 6,
    name: 'Yoga Pants',
  },
  {
    id: 7,
    name: 'Eye Shadow',
  },
];

const SearchScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = React.useState('');

  const showSearchResult = () => {
    navigation.navigate('SearchResult');
    // navigation.dispatch(StackActions.push(Constant.nameScreens.DetailContact))
  };

  return (
    <View style={styles.rootView}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchInput}
          onChangeText={setText}
          value={text}
          placeholder={'Please type here…'}
        />
        <TouchableOpacity style={styles.searchBtn} onPress={showSearchResult}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={20}
            color={Constants.colors.black}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* begin Recently Viewed */}
        <View style={styles.listView}>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderLeft}>Recently Viewed</Text>
            <TouchableOpacity style={styles.cleanBtn}>
              <Text style={styles.listHeaderRight}>Clear</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            style={styles.flatList}
            data={recentlyViewed}
            renderItem={({ item, index }) => <ProductCard product={item} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* end Recently Viewed */}

        {/* begin Recommended */}
        <View style={styles.listView}>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderLeft}>Recommended</Text>
            <TouchableOpacity style={styles.cleanBtn}>
              <Text style={styles.listHeaderRight}>Refresh</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recommendedView}>{/* content */}</View>
        </View>
        {/* end Recommended */}

        {/* begin You May Also Like */}
        <View style={styles.listView}>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderLeft}>You May Also Like</Text>
          </View>

          <FlatList
            style={styles.flatList}
            data={recentlyViewed}
            renderItem={({ item, index }) => <ProductCard product={item} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* end You May Also Like */}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: Constants.colors.white,
    padding: 14,
  },
  searchView: {
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: Constants.colors.white,
    borderColor: Constants.colors.gray,
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontSize: 14,
    flex: 1,
    position: 'relative',
  },
  searchBtn: {
    position: 'absolute',
    right: 10,
  },
  listView: {
    marginTop: 20,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listHeaderLeft: {
    fontSize: 14,
    color: Constants.colors.textPrimary,
  },
  cleanBtn: {},
  listHeaderRight: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Constants.colors.textColor,
  },
  flatList: {
    marginVertical: 15,
  },
  recommendedView: {
    paddingVertical: 5,
    width: '100%',
  },
});
