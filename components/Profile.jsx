// components/Profile.jsx
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import profileData from '../profile.json';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState({});
  const [profileImage, setProfileImage] = useState(require('../imgs/profile.png'));

  useEffect(() => {
    // Load profile data
    setProfile(profileData);
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleDelete = () => {
    // Handle delete action
  };

  const handleLogout = () => {
    // Handle log out action
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <AntDesign name="arrowleft" size={30} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Profile</Text>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profileImage} />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>{`${profile.firstName} ${profile.lastName}`}</Text>
          <Text style={styles.profileAddress}>{profile.address}</Text>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inlineInputs}>
          <TextInput
            style={[styles.input, styles.inlineInput]}
            placeholder="First Name"
            placeholderTextColor="#888888"
            value={profile.firstName}
            editable={false}
          />
          <TextInput
            style={[styles.input, styles.inlineInput]}
            placeholder="Last Name"
            placeholderTextColor="#888888"
            value={profile.lastName}
            editable={false}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#888888"
          value={profile.email}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#888888"
          value={profile.address}
          editable={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          placeholderTextColor="#888888"
          value={profile.mobileNumber}
          editable={false}
        />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  backButton: {
    position: 'absolute',
    left: 0,
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 20,
  },
  profileDetails: {
    flex: 1,
    marginLeft: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  profileAddress: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 16,
  },
  inputContainer: {
    marginTop: 20,
  },
  inlineInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineInput: {
    width: '48%',
  },
  input: {
    height: 55,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#333',
    color: 'white',
    borderRadius: 5,
  },
  logoutButton: {
    backgroundColor: '#8000FF',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Profile;
