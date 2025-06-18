import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function App() {
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('./asset/pic.jpeg')} style={styles.backgroundImage} />

      <Text style={styles.title}>PROTO.EV</Text>
      <Text style={styles.subtitle}>Discover.Charge.Pay</Text>

      
      <View style={styles.inputContainer}>
        <Text style={styles.prefix}>+91</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Phone Number"
          keyboardType="phone-pad"
        />
      </View>

      {/* OTP Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Request OTP</Text>
      </TouchableOpacity>

      {/* Terms and Conditions */}
      <View style={styles.terms}>
        <CheckBox value={agree} onValueChange={setAgree} />
        <Text style={styles.termsText}>
          By continuing, I accept the Terms & Conditions and Privacy Policy
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#D4F7B0',
    alignItems: 'center',
    paddingTop: 60,
  },

  backgroundImage: {
    position: 'absolute',
    top: -120,
    left: 0,
    bottom:15,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    opacity: 2,
    
  },

  title: {
    fontSize: 28,
    color: '#F44336',
    fontWeight: 'bold',
    fontFamily: 'Anta-Regular', 
  },

  subtitle: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10,
    fontFamily: 'Anta-Regular',
  },

  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 8,
    padding: 10,
    width: '85%',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'red', 
    marginTop: 400,
  },

  prefix: {
    fontSize: 16,
    marginRight: 8,
    fontFamily: 'Anta-Regular',
  },

  input: {
    flex: 1,
    fontFamily: 'Anta-Regular',
  },

  button: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#000', 
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Anta-Regular',
  },

  terms: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    top: 10,
  },

  termsText: {
    fontSize: 10,
    color: '#000',
    marginLeft: 8,
    fontFamily: 'Anta-Regular',
  },
});
