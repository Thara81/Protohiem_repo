import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileImagePicker from './components/ProfileCircle'; // Import the profile picker

export default function App(): JSX.Element {
  const [selectedRole, setSelectedRole] = useState<'USER' | 'HOST'>('USER');
  const totalKms = 128.5;
  const walletAmount = 452.75;

  return (
    <ImageBackground
      source={require('./assets/bg.jpeg')}
      style={styles.background}
    >
      <View style={styles.header}></View>

      <View style={{ marginTop: -45, alignItems: 'center' }}>
        <ProfileImagePicker />
      </View>

      <View style={styles.metricsRow}>
        <View style={styles.metricBoxRed}>
          <Icon name="local-taxi" size={20} color="#fff" />
          <View style={styles.metricTextBox}>
            <Text style={styles.metricLabel}>Total KMs :</Text>
            <Text style={styles.metricValue}>{totalKms}</Text>
          </View>
        </View>

        <View style={styles.roleSwitch}>
          <TouchableOpacity
            style={[
              styles.roleOption,
              selectedRole === 'USER' && styles.activeRole,
            ]}
            onPress={() => setSelectedRole('USER')}
          >
            <Text
              style={[
                styles.roleText,
                selectedRole === 'USER' && styles.activeRoleText,
              ]}
            >
              USER
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.roleOption,
              selectedRole === 'HOST' && styles.activeRole,
            ]}
            onPress={() => setSelectedRole('HOST')}
          >
            <Text
              style={[
                styles.roleText,
                selectedRole === 'HOST' && styles.activeRoleText,
              ]}
            >
              HOST
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.metricBoxGreen}>
          <Icon name="account-balance-wallet" size={20} color="#fff" />
          <View style={styles.metricTextBox}>
            <Text style={styles.metricLabel}>Wallet :</Text>
            <Text style={styles.metricValue}>₹{walletAmount}</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.menuSection}>
        <MenuItem icon="directions-car" text="My Vehicles" />
        <MenuItem icon="settings" text="Settings" />
        <MenuItem icon="contact-mail" text="Contact Us" />
        <MenuItem icon="help" text="FAQs" />
        <MenuItem icon="notifications" text="Notifications" />
        <MenuItem icon="logout" text="Log Out" />
      </ScrollView>
    </ImageBackground>
  );
}

type MenuItemProps = {
  icon: string;
  text: string;
};

function MenuItem({ icon, text }: MenuItemProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Icon name={icon} size={24} color="#000" style={{ marginRight: 10 }} />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  header: { height: 160, backgroundColor: '#001f5c' },
  metricsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  metricBoxRed: {
    backgroundColor: '#FF6B6B',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  metricBoxGreen: {
    backgroundColor: '#4ECDC4',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  metricTextBox: {
    marginLeft: 8,
    flexDirection: 'column',
  },
  metricLabel: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  metricValue: {
    color: '#fff',
    fontSize: 16,
  },
  roleSwitch: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  roleOption: {
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  roleText: {
    fontWeight: 'bold',
    color: '#555',
  },
  activeRole: {
    backgroundColor: '#F8C8DC',
  },
  activeRoleText: {
    color: '#000',
  },
  menuSection: { marginTop: 20, paddingHorizontal: 20 },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
});

