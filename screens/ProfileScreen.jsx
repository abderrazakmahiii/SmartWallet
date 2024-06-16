import React from 'react';
import Profile from '../components/Profile';
import NavigationBar from '../components/NavigationBar';

const ProfileScreen = ({ navigation }) => {
  return (
    <>
      <Profile navigation={navigation} />
      <NavigationBar />
    </>
  );
};

export default ProfileScreen;
