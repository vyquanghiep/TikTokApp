import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Constants from '../../Constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductCard from '../../components/cards/ProductCard';

const similarProduct = [
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

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 50 }}
      >
        <View style={styles.productView}>
          <Image
            source={{ uri: product.thumbnail }}
            style={styles.productThumbnail}
          />
          <View style={styles.productInfo}>
            <View style={styles.productInfoLeft}>
              <Text style={styles.price}>{product.price}</Text>
              <Text style={{ color: '#fff', fontSize: 12 }}>
                Group By Discount - 10%
              </Text>
            </View>
            <View style={styles.productInfoRight}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => {
                  setQuantity(quantity > 1 ? quantity - 1 : quantity);
                }}
              >
                <MaterialCommunityIcons
                  name="minus-thick"
                  size={16}
                  color={Constants.colors.primary}
                />
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => {
                  setQuantity(quantity + 1);
                }}
              >
                <MaterialCommunityIcons
                  name="plus-thick"
                  size={16}
                  color={Constants.colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Details */}
        <View style={styles.productDetail}>
          <Text style={styles.productDetailHeader}>Details</Text>
          <View style={styles.productDetailBody}>
            <Text>Product detail</Text>
          </View>
        </View>

        {/* Review */}
        <View style={styles.productDetail}>
          <Text style={styles.productDetailHeader}>Review</Text>
          <View
            style={[
              styles.productDetailBody,
              { flexWrap: 'wrap', flexDirection: 'row' },
            ]}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
                marginRight: 20,
                marginVertical: 5,
              }}
            >
              <MaterialCommunityIcons name="circle" size={10} color="#01710b" />
              <Text style={{ color: '#000', fontSize: 14 }}>Product is as</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
                marginRight: 20,
                marginVertical: 5,
              }}
            >
              <MaterialCommunityIcons name="circle" size={10} color="#01710b" />
              <Text style={{ color: '#000', fontSize: 14 }}>
                Seller response
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
                marginRight: 20,
                marginVertical: 5,
              }}
            >
              <MaterialCommunityIcons name="circle" size={10} color="#01710b" />
              <Text style={{ color: '#000', fontSize: 14 }}>
                Delivery timing
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
                marginRight: 20,
                marginVertical: 5,
              }}
            >
              <MaterialCommunityIcons name="circle" size={10} color="#01710b" />
              <Text style={{ color: '#000', fontSize: 14 }}>
                Buying experience
              </Text>
            </View>
          </View>
        </View>

        {/* begin You May Also Like */}
        <View style={styles.similarProduct}>
          <Text style={styles.similarProductHeader}>You May Also Like</Text>

          <FlatList
            style={styles.flatList}
            data={similarProduct}
            renderItem={({ item, index }) => <ProductCard product={item} />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* end You May Also Like */}
      </ScrollView>
      <View style={styles.buyButtonView}>
        <TouchableOpacity
          style={[styles.buyButton, { backgroundColor: '#007b03' }]}
        >
          <Text style={styles.buyButtonText}>Buy now</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buyButton, { backgroundColor: '#fa3c6a' }]}
          onPress={() => {
            Alert.alert('Information', 'Add item to cart successfully!');
          }}
        >
          <Text style={styles.buyButtonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Constants.colors.white,
  },
  productView: {
    width: '100%',
    height: 'auto',
    borderRadius: 20,
    backgroundColor: Constants.colors.primary,
    borderWidth: 1,
    borderColor: Constants.colors.lightGray,
  },
  productThumbnail: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: 'cover',
  },
  productInfo: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productInfoLeft: {},
  price: {
    color: Constants.colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  productInfoRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  quantityButton: {
    backgroundColor: '#fff',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99,
  },
  quantity: {
    color: Constants.colors.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
  productDetail: {
    marginTop: 20,
  },
  productDetailHeader: {
    marginBottom: 5,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  productDetailBody: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: '#000',
    shadowOpacity: 0.6,
    elevation: 5,
  },
  similarProduct: {
    marginTop: 20,
  },
  similarProductHeader: {
    marginBottom: 5,
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  flatList: {},
  buyButtonView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Constants.screen.width,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  buyButton: {
    borderRadius: 10,
  },
  buyButtonText: {
    color: '#fff',
    textTransform: 'uppercase',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 13,
  },
});
