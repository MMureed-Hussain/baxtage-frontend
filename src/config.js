// @mui
import { enUS, arEG } from '@mui/material/locale';

export const HOST_SPA = `${process.env.REACT_APP_SPA_URL}${process.env.REACT_APP_SPA_PORT}`;

export const HOST_API = `${process.env.REACT_APP_URL}${process.env.REACT_APP_API_PORT}`;
// export const HOST_API = 'https://nuxul.com';
export const PORT_API = process.env.REACT_APP_API_PORT;

export const MOYASAR_KEY = process.env.REACT_APP_MOYASAR_KEY;
console.log('REACT_APP_URL', HOST_API);

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// SETTINGS
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const defaultSettings = {
  themeMode: 'light',
  themeDirection: 'rtl',
  themeContrast: 'default',
  themeLayout: 'horizontal',
  themeColorPresets: 'gold',
  themeStretch: false,
};

// MULTI LANGUAGES
// Please remove `localStorage` when you change settings.
// ----------------------------------------------------------------------

export const allLangs = [
  {
    label: 'Arabic',
    value: 'ar',
    systemValue: arEG,
    icon: '/assets/icons/flags/ic_flag_sa.svg',
  },
  {
    label: 'English',
    value: 'en',
    systemValue: enUS,
    icon: '/assets/icons/flags/ic_flag_en.svg',
  },
];

export const defaultLang = allLangs[1]; // English
