import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ActivityIndicator,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';

const RegisterScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [secureTextEntry, setSecureTextEntry] = useState({
    password: true,
    confirmPassword: true
  });
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false
  });
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const toggleSecureEntry = (field) => {
    setSecureTextEntry({
      ...secureTextEntry,
      [field]: !secureTextEntry[field]
    });
  };

  const handleFocus = (field) => {
    setIsFocused({...isFocused, [field]: true});
  };

  const handleBlur = (field) => {
    setIsFocused({...isFocused, [field]: false});
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      Alert.alert('Erro', 'Por favor, insira seu nome completo');
      return false;
    }
    if (!formData.email.includes('@')) {
      Alert.alert('Erro', 'Por favor, insira um email válido');
      return false;
    }
    if (formData.password.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem');
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateForm()) return;
    
    try {
      setLoading(true);
      await register(formData.email, formData.password, formData.name);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro no registro', error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6C63FF" />
        <Text style={styles.loadingText}>Criando sua conta...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Crie sua conta</Text>
          <Text style={styles.subtitle}>Preencha os dados para se registrar</Text>
        </View>

        <View style={styles.formContainer}>
          {/* Nome Completo */}
          <View style={[
            styles.inputContainer,
            isFocused.name && styles.inputFocused
          ]}>
            <Ionicons 
              name="person-outline" 
              size={20} 
              color={isFocused.name ? '#6C63FF' : '#A0AEC0'} 
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              placeholderTextColor="#A0AEC0"
              value={formData.name}
              onChangeText={(text) => handleChange('name', text)}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
            />
          </View>

          {/* Email */}
          <View style={[
            styles.inputContainer,
            isFocused.email && styles.inputFocused
          ]}>
            <Ionicons 
              name="mail-outline" 
              size={20} 
              color={isFocused.email ? '#6C63FF' : '#A0AEC0'} 
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#A0AEC0"
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
              autoCapitalize="none"
              keyboardType="email-address"
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
            />
          </View>

          {/* Senha */}
          <View style={[
            styles.inputContainer,
            isFocused.password && styles.inputFocused
          ]}>
            <Ionicons 
              name="lock-closed-outline" 
              size={20} 
              color={isFocused.password ? '#6C63FF' : '#A0AEC0'} 
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#A0AEC0"
              secureTextEntry={secureTextEntry.password}
              value={formData.password}
              onChangeText={(text) => handleChange('password', text)}
              onFocus={() => handleFocus('password')}
              onBlur={() => handleBlur('password')}
            />
            <TouchableOpacity 
              onPress={() => toggleSecureEntry('password')}
              style={styles.eyeIcon}
            >
              <Ionicons 
                name={secureTextEntry.password ? "eye-off-outline" : "eye-outline"} 
                size={20} 
                color="#A0AEC0" 
              />
            </TouchableOpacity>
          </View>

          {/* Confirmar Senha */}
          <View style={[
            styles.inputContainer,
            isFocused.confirmPassword && styles.inputFocused
          ]}>
            <Ionicons 
              name="lock-closed-outline" 
              size={20} 
              color={isFocused.confirmPassword ? '#6C63FF' : '#A0AEC0'} 
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmar senha"
              placeholderTextColor="#A0AEC0"
              secureTextEntry={secureTextEntry.confirmPassword}
              value={formData.confirmPassword}
              onChangeText={(text) => handleChange('confirmPassword', text)}
              onFocus={() => handleFocus('confirmPassword')}
              onBlur={() => handleBlur('confirmPassword')}
            />
            <TouchableOpacity 
              onPress={() => toggleSecureEntry('confirmPassword')}
              style={styles.eyeIcon}
            >
              <Ionicons 
                name={secureTextEntry.confirmPassword ? "eye-off-outline" : "eye-outline"} 
                size={20} 
                color="#A0AEC0" 
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            onPress={handleRegister}
            style={styles.registerButton}
            disabled={loading}
          >
            <Text style={styles.registerButtonText}>Registrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Já tem uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.footerLink}>Faça login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
  },
  loadingText: {
    marginTop: 16,
    color: '#718096',
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2D3748',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
  },
  formContainer: {
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  inputFocused: {
    borderColor: '#6C63FF',
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#2D3748',
    paddingVertical: 0,
  },
  eyeIcon: {
    padding: 5,
  },
  registerButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#718096',
    marginRight: 5,
  },
  footerLink: {
    color: '#6C63FF',
    fontWeight: '600',
  },
});

export default RegisterScreen;