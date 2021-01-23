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
      id: props.historyData.length,
    }
    props.addScannedItem(item);
  }

  const keyExtractorHistory = (item, index) => `${item.id}`;

  const renderHistoryItem = ({item, index}) => (
    <TouchableOpacity style={styles.historyItemContainer}>
      <Image 
        source={require('../../../assets/images/app_icon.png')}
        style={styles.historyItemImage}
        resizeMode={'contain'}
      />
      <Text>{'New item ' + item.id}</Text>
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
