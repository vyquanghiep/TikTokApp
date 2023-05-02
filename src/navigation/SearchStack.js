import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Constants from '../Constants';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/search/SearchScreen';
import SearchResultScreen from '../screens/search/searchResult/SearchResultScreen';
import ProductDetailScreen from '../screens/product/ProductDetailScreen';

const SearchStack = createNativeStackNavigator();

const SearchStackScreens = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
              }}
            >
              <MaterialCommunityIcons
                name="share-outline"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
              }}
            >
              <MaterialCommunityIcons
                name="cards-heart-outline"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                }}
              >
                <MaterialCommunityIcons
                  name="cart-minus"
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
              <Text
                style={{
                  paddingHorizontal: 6,
                  position: 'absolute',
                  backgroundColor: Constants.colors.primary,
                  fontSize: 10,
                  color: Constants.colors.white,
                  borderRadius: 99,
                  right: 0,
                  top: 0,
                }}
              >
                2
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 8,
                  paddingVertical: 4,
                }}
              >
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
              <Text
                style={{
                  paddingHorizontal: 6,
                  position: 'absolute',
                  backgroundColor: Constants.colors.primary,
                  fontSize: 10,
                  color: Constants.colors.white,
                  borderRadius: 99,
                  right: 0,
                  top: 0,
                }}
              >
                0
              </Text>
            </View>
          </View>
        ),
      }}
    >
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        option={{
          title: 'Search',
        }}
      />
      <SearchStack.Screen
        name="SearchResult"
        component={SearchResultScreen}
        option={{
          title: 'Search',
        }}
      />
      <SearchStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        option={{
          title: 'Product',
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreens;
