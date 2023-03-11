import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import Navigator from './src/navigators/Navigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() =>{
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if(!fontsLoaded){
    return null;
  }

  return (
    <Navigator />
  );
};

