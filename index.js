// Importações obrigatórias (deve ser o primeiro import)
import 'react-native-gesture-handler';

import { registerRootComponent } from 'expo';
import { ActivityIndicator, View } from 'react-native';
import { useState, useEffect } from 'react';
import { AuthProvider } from './src/hooks/useAuth';
import App from './App';
import { loadAsync } from 'expo-font';

// Configuração do Firebase (opcional)
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';

// Inicializa o Firebase (se estiver usando)
initializeApp(firebaseConfig);

function Main() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Carrega fontes customizadas
  useEffect(() => {
    async function loadResources() {
      try {
        await loadAsync({
          'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }

    loadResources();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

registerRootComponent(Main);