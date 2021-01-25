import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import { colors, fonts } from '../../styles';

export default function ProductDetailScreen(props) {

  const displayNutriments = () => {
    let res = '';
    for (const property in product.nutriments) {
      res = res.concat(`${property}: ${product.nutriments[property]}`).concat('\n');
    }
    return res;
  }

  // Read navigation params
  const product = props.route.params.product;

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: product.image_url}}
          style={styles.image}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.mainTextContainer}>
        <View style={styles.textTitleContainer}>
          <Text style={styles.textTitle}>{'Ingredients'}</Text>
        </View>
        <Text style={styles.textBody}>{product.ingredients_text}</Text>
        <View style={styles.textTitleContainer}>
          <Text style={styles.textTitle}>{'Nutriments'}</Text>
        </View>
        <Text style={styles.textBody}>{displayNutriments()}</Text>
      </View>
    </ScrollView>
  );
  
}

const styles = StyleSheet.create({

  // Image
  imageContainer: {
    marginTop: 24,
    alignSelf: 'center'
  },
  image: {
    height: 120, 
    width: 120,
    borderRadius: 60,
  },

  // Text
  mainTextContainer: {
    marginHorizontal: 16,
  },
  textTitleContainer: {
    marginTop: 16,
    marginBottom: 4,
  },
  textTitle: {
    fontSize: 17,
    color: colors.gray,
    fontFamily: fonts.primaryBold,
  },
  textBody: {
    fontSize: 14,
    color: colors.gray,
    fontFamily: fonts.primaryRegular,
  },

});
