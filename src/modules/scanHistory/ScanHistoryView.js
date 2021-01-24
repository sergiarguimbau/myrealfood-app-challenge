import React, { useState } from 'react';
import { 
  View, 
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  Button,
  Modal,
} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, fonts } from '../../styles';

import I18t from '../../translations'
import Moment from 'moment'; // date formatting
import { RNCamera } from 'react-native-camera';

export default function ScanHistoryScreen(props) {

  const [cameraVisible, setCameraVisible] = useState(false);

  const onBarCodeRead = result => {
    // Close camera when barcode is detected
    setCameraVisible(false);
    onNewScan(result.data);
  }

  const onNewScan = (barcode) => {
    // Avoid adding duplicate items with the same code
    const searchDuplicates = props.historyData.filter((searchItem) => (searchItem.barcode === barcode));
    (searchDuplicates.length === 0) ? props.addScannedItem(barcode) : alert(I18t.t('scan_history.alert_duplicate'));
  }

  const keyExtractorHistory = (item, index) => item.barcode;

  const renderHistoryItem = ({item, index}) => (
    <TouchableOpacity style={styles.historyItemContainer}>
      <View style={styles.historyItemImageContainer}>
        <Image 
          source={{uri: item.image_url}}
          style={styles.historyItemImage}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.historyItemContentContainer}>
        <View style={styles.historyItemTopContainer}>
          <View style={styles.historyItemIconTextContainer}>
            <MaterialIcon
              name={'barcode'}
              color={colors.black}
              size={16}
            />
            <View style={styles.historyItemSmallTextContainer}>
              <Text numberOfLines={1} style={styles.historyItemSmallText}>{item.barcode}</Text>
            </View>
          </View>
          <View style={styles.historyItemIconTextContainer}>
            <MaterialIcon
              name={'history'}
              color={colors.black}
              size={16}
            />
            <View style={styles.historyItemSmallTextContainer}>
              <Text numberOfLines={1} style={styles.historyItemSmallText}>{Moment(item.scan_date).fromNow()}</Text>
            </View>
          </View>
        </View>
        <Text numberOfLines={2} style={styles.historyItemNameText}>{item.product_name}</Text>
        <Text numberOfLines={1} style={styles.historyItemBrandText}>{item.brands}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderHistoryHeader = () => (
    <View>
      <Button 
        title={I18t.t('scan_history.button_scan')} 
        onPress={() => setCameraVisible(true) }
      />
      <Button
        title={I18t.t('scan_history.button_clear')}
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
      <Modal
        animationType='slide'
        transparent={false}
        visible={cameraVisible}
        onRequestClose={() => setCameraVisible(false)}
      >
        <View style={{flex: 1}}>
          <RNCamera
            style={{flex: 1}}
            captureAudio={false}
            type={RNCamera.Constants.Type.back}
            onBarCodeRead={onBarCodeRead}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  // Main
  mainContainer: {
    flex: 1,
  },

  // Barcode Text Input
  barcodeTextInput: { 
    alignSelf: 'center', 
    marginTop: 16, 
    marginBottom: 4, 
    marginHorizontal: 16, 
  },

  // History Item
  historyItemContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#9b9b9b44'
  },
  historyItemImageContainer: {
    marginEnd: 16,
  },
  historyItemImage: {
    height: 64, 
    width: 64,
    borderRadius: 32,
  },
  historyItemContentContainer: {
    flex: 1,
  },
  historyItemTopContainer: {
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  historyItemIconTextContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  historyItemSmallTextContainer: {
    marginStart: 4,
  },
  historyItemSmallText: {
    fontSize: 12,
    color: colors.black,
    fontFamily: fonts.primaryRegular,
  },
  historyItemNameText: {
    fontSize: 15,
    color: colors.black,
    fontFamily: fonts.primarySemiBold,
  },
  historyItemBrandText: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.primaryLight
  },
});
