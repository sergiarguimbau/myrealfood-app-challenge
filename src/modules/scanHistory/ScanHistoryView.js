import React from 'react';
import { 
  View, 
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  Button,
} from 'react-native';

import { colors, fonts } from '../../styles';

export default function ScanHistoryScreen(props) {

  const onAdd = () => {
    const item = {
      code: "737628064502",
      brands: "Thai Kitchen, Simply Asia",
      image_url: "https://static.openfoodfacts.org/images/products/073/762/806/4502/front_en.6.400.jpg",
      product_name: "Thai peanut noodle kit includes stir-fry rice noodles & thai peanut seasoning",
      ingredients_text: "Noodle: rice, water. seasoning packet: peanut, sugar, hydrolyzed soy protein, green onion, corn maltodextrin, spice (including paprika), citric acid, sea salt, extractives of paprika (color), silicon dioxide (added to make free flowing), yeast extract.",
      quantity: "155 g",
      nutrition_grade_fr: "c",
      nutriments: {
        "salt":0.72,
        "trans-fat_serving":0,
        "energy-kcal":385,
        "sodium_100g":0.288,
        "calcium_value":38,
        "iron_value":0.69,
        "proteins_unit":"g",
        "nutrition-score-fr":4,
        "calcium_unit":"mg",
        "energy_serving":838,
        "proteins_value":9.62,
        "sugars_serving":7,
        "sodium_value":288,
        "fat_value":7.69,
        "calcium_100g":0.038,
        "energy_unit":"kcal",
        "fat":7.69,
        "vitamin-a_serving":6.01e-05,
        "sodium_serving":0.15,
        "cholesterol_serving":0,
        "cholesterol_100g":0,
        "fat_100g":7.69,
        "sugars_unit":"g",
        "energy-kcal_serving":200,
        "iron_100g":0.00069,
        "vitamin-c_value":0,
        "nova-group":4,
        "carbohydrates":71.15,
        "vitamin-c":0,
        "vitamin-a":0.0001155,
        "calcium_serving":0.0198,
        "saturated-fat_value":1.92,
        "saturated-fat":1.92,
        "fiber_value":1.9,
        "fiber":1.9,
        "energy_100g":1611,
        "saturated-fat_100g":1.92,
        "saturated-fat_serving":0.998,
        "salt_100g":0.72,
        "vitamin-a_100g":0.0001155,
        "fiber_unit":"g",
        "trans-fat":0,
        "cholesterol_unit":"mg",
        "vitamin-c_unit":"mg",
        "vitamin-c_serving":0,
        "salt_value":720,
        "cholesterol":0,
        "saturated-fat_unit":"g",
        "iron_unit":"mg",
        "fiber_serving":0.988,
        "cholesterol_value":0,
        "carbohydrates_value":71.15,
        "carbohydrates_100g":71.15,
        "nova-group_serving":4,
        "energy":1611,
        "iron_serving":0.000359,
        "proteins_100g":9.62,
        "trans-fat_unit":"g",
        "calcium":0.038,
        "carbohydrates_unit":"g",
        "energy-kcal_unit":"kcal",
        "sodium_unit":"mg",
        "fiber_100g":1.9,
        "fruits-vegetables-nuts-estimate-from-ingredients_100g":0,
        "salt_unit":"mg",
        "sugars_value":13.46,
        "trans-fat_100g":0,
        "trans-fat_value":0,
        "proteins":9.62,
        "nutrition-score-fr_100g":4,
        "sodium":0.288,
        "nova-group_100g":4,
        "iron":0.00069,
        "energy-kcal_value":385,
        "sugars":13.46,
        "energy-kcal_100g":385,
        "energy_value":385,
        "vitamin-a_value":385,
        "salt_serving":0.374,
        "vitamin-a_unit":"IU",
        "carbohydrates_serving":37,
        "vitamin-c_100g":0,
        "proteins_serving":5,
        "fat_unit":"g",
        "sugars_100g":13.46,
        "fat_serving":4
      },
    }
    props.addScannedItem(item);
  }

  const keyExtractorHistory = (item, index) => item.code;

  const renderHistoryItem = ({item, index}) => (
    <TouchableOpacity style={styles.historyItemContainer}>
      <Image 
        source={require('../../../assets/images/app_icon.png')}
        style={styles.historyItemImage}
        resizeMode={'contain'}
      />
      <Text>{'New item ' + item.code}</Text>
    </TouchableOpacity>
  );

  const renderHistoryHeader = () => (
    <View>
      <Button 
        title={'New Scan'} 
        onPress={() => onAdd()}
      />
      <Button
        title={'Clear History'}
        onPress={() => props.clearScanHistory()}
        color={colors.red}
      />
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <FlatList 
        ListHeaderComponent={renderHistoryHeader}
        data={props.historyData}
        keyExtractor={keyExtractorHistory}
        renderItem={renderHistoryItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // Main
  mainContainer: {
    flex: 1,
  },

  // History Item
  historyItemContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 8,
  },
  historyItemImage: {
    height: 50, 
    width: 50
  },

});
