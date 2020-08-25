/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import wa from 'webassemblyjs';

// if (!global.WebAssembly) {
//     global.WebAssembly = wa;
// }

AppRegistry.registerComponent(appName, () => App);
