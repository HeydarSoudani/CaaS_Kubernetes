import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

import enJson from './en.json';
import faJson from './fa.json';
import arJson from './ar.json';

const resources = {
    en: { translation: enJson },
    fa: { translation: faJson },
    ar: { translation: arJson }
};

i18n
    .use(detector)
    .use(backend)
    .use(initReactI18next)
    .init({
        resources,
        // lng: 'en',
        whitelist: ['fa', 'en', 'ar'],
        // fallbackLng: 'en',
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            wait: true
        }
    });

export default i18n;