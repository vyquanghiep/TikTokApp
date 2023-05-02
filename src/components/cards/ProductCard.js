import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Constants from '../../Constants';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.rootView} key={product.id}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', { product });
        }}
      >
        <Image
          style={styles.productThumbnail}
          source={{
            uri: product?.thumbnail,
          }}
        />
      </TouchableOpacity>
      <Text style={styles.priceView}>{product?.price}</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail');
        }}
      >
        <Text style={styles.productName} numberOfLines={1}>
          {product?.name}{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  rootView: {
    width: 120,
    marginVertical: 10,
    marginLeft: 10,
  },
  productThumbnail: {
    borderRadius: 5,
    height: 150,
    width: '100%',
    resizeMode: 'cover',
  },
  priceView: {
    fontSize: 14,
    color: Constants.colors.textColor,
    marginTop: 5,
  },
  productName: {
    fontSize: 14,
    color: Constants.colors.textColor,
    marginTop: 5,
    fontWeight: 'bold',
    width: '100%',
  },
});
