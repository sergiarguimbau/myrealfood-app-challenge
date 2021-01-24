// Initial state
const initialState = {
  historyData: [],
};

// Actions
const ADD_SCANNED_ITEM = 'ScanHistoryState/ADD_SCANNED_ITEM';
const CLEAR_SCAN_HISTORY = 'ScanHistoryState/CLEAR_SCAN_HISTORY';

// Action creators
function actionAddScannedItem(item) {
  return {
    type: ADD_SCANNED_ITEM,
    item,
  };
}

function actionClearScanHistory() {
  return {
    type: CLEAR_SCAN_HISTORY,
  };
}

// Dispatch functions
export function addScannedItem(barcode) {
  return async dispatch => {

    // Make a call to OpenFoodFacts API
    const jsonResponse = await getResponseOpenFoodFactsAPI(barcode);

    // Check if result is found
    if (jsonResponse.status === 1) {
      const product = jsonResponse.product;
      const item = {
        scan_date: new Date(),
        barcode: barcode,
        brands: product.brands,
        image_url: product.image_url,
        product_name: product.product_name,
        ingredients_text: product.ingredients_text,
        quantity: product.quantity,
        nutrition_grade_fr: product.nutrition_grade_fr,
        nutriments: product.nutriments,
      }
      dispatch(actionAddScannedItem(item));

    } else {
      alert('Barcode is not valid');
    }
  }
}

export function clearScanHistory() {
  return dispatch => {
    dispatch(actionClearScanHistory());
  }
}

const getResponseOpenFoodFactsAPI = async (barcode) => {
  try {
    // @see https://world.openfoodfacts.org/data
    const response = await fetch('https://world.openfoodfacts.org/api/v0/product/' + barcode + '.json');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

// Reducer
export default ScanHistoryStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCANNED_ITEM:
      return Object.assign({}, state, {
        // New items are displayed at the top
        historyData: [action.item, ...state.historyData],
      });
    case CLEAR_SCAN_HISTORY:
      return Object.assign({}, state, {
        historyData: [],
      });
    default:
      return state;
  }
}
