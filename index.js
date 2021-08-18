import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import reduxProvider from './reduxProvider';

AppRegistry.registerComponent(appName, () => reduxProvider);
