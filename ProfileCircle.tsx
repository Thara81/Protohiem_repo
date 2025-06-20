import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';

export default function ProfileImagePicker() {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const pickImage = () => {
    launchImageLibrary(
      { mediaType: 'photo', quality: 1 },
      (response) => {
        if (response.assets && response.assets.length > 0) {
          setProfileImage(response.assets[0].uri || null);
        }
      }
    );
  };

  return (
    <View style={styles.profileCircle}>
      <TouchableOpacity onPress={pickImage} style={styles.editIcon}>
        <Icon name="edit" size={20} color="#fff" />
      </TouchableOpacity>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
      ) : (
        <Text style={styles.profileName}>SACHIN</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  profileCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  editIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
  },
  profileName: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

