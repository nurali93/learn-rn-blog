import React, { lazy } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const IndexScreen = lazy(() => import('./src/screens/IndexScreen'));
const ShowScreen = lazy(() => import('./src/screens/ShowScreen'));
const CreateScreen = lazy(() => import('./src/screens/CreateScreen'));
const EditScreen = lazy(() => import('./src/screens/EditScreen'));
import { Provider as BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

const App = createAppContainer(navigator);

export default () => (
  <BlogProvider>
    <App />
  </BlogProvider>
);
