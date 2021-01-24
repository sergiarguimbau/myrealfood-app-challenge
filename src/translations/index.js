import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import Moment from 'moment';
import 'moment/locale/es'

import en from './en.json';
import es from './es.json';

const translations = { en, es };

const { languageTag } = RNLocalize.findBestAvailableLanguage(
  Object.keys(translations),
) || { languageTag: 'en' };

i18n.locale = languageTag;
i18n.fallbacks = true;
i18n.translations = translations;
Moment.locale(i18n.locale);

export default i18n;
