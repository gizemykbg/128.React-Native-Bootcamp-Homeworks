import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Movies from '../pages/Movies';
import routes from './routes';
import MovieDetail from '../pages/MovieDetail';
import CommentView from '../pages/CommentView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={routes.MOVIES_PAGE}
          component={Movies}
          options={{
            headerTitle: 'Movies',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#rgba(0,0,0,0.7)',
            },
          }}
        />
        <Stack.Screen
          name={routes.MOVIES_DETAIL_PAGE}
          component={MovieDetail}
          options={{
            headerTitle: 'Movie Details',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#rgba(0,0,0,0.7)',
            },
          }}
        />
        <Stack.Screen
          name={routes.COMMENT_VIEW_PAGE}
          component={CommentView}
          options={{
            headerTitle: 'Comments',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#rgba(0,0,0,0.7)',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
