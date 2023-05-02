import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Constants from '../../../Constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProductCard from '../../../components/cards/ProductCard';

const searchResults = [
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

const SearchResultScreen = ({ route, navigation }) => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.rootView}>
      <View style={styles.searchView}>
        <TextInput
          style={styles.searchInput}
          onChangeText={setText}
          value={text}
          placeholder={'Please type here…'}
        />
        <TouchableOpacity style={styles.searchBtn}>
          <Icon
            style={styles.searchIcon}
            name="search"
            size={24}
            color={Constants.colors.black}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.filterView}>
        <TouchableOpacity style={styles.filterBtn}>
          <Icon name="signal" style={styles.filterIcon} />
          <Text style={styles.filterName}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Icon name="filter" style={styles.filterIcon} />
          <Text style={styles.filterName}>Filter</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.flatList}
        data={searchResults}
        renderItem={({ item, index }) => <ProductCard product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SearchResultScreen;

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
    fontSize: 14,
    flex: 1,
    position: 'relative',
  },
  searchBtn: {
    position: 'absolute',
    right: 10,
  },
  filterView: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  filterBtn: {
    paddingVertical: 10,
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  filterIcon: {
    color: Constants.colors.black,
  },
  filterName: {
    color: Constants.colors.textColor,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  flatList: {
    marginVertical: 10,
    marginLeft: 50,
   
  },
});
