import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import ChargingAnimation from '../components/ChargingAnimation';

const { width, height } = Dimensions.get('window');

export default function ChargingScreen() {
  const [activeTab, setActiveTab] = useState('In Process');
  const [percentage, setPercentage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<any>(null);

  const vehicleDetails = [
    { id: '1', label: 'Vehicle Name', value: 'Tesla Model 3' },
    { id: '2', label: 'Details', value: 'Performance' },
    { id: '3', label: 'Name', value: 'EV Charger Pro' },
    { id: '4', label: 'Consumed Unit', value: '15.2 kWh' },
    { id: '5', label: 'Estimated Cost', value: '$4.50' },
    { id: '6', label: 'Estimated Energy', value: '75%' },
    { id: '7', label: 'Booking Time', value: '2:30 PM' },
    { id: '8', label: 'Connector Type', value: 'Type 2' },
    { id: '9', label: 'Location', value: 'Parking Spot 12' },
  ];

  useEffect(() => {
    startCharging();
    return () => stopCharging();
  }, []);

  const startCharging = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setPercentage(prev => {
        if (isPaused) return prev;
        if (prev >= 100) {
          stopCharging();
          return 100;
        }
        return prev + 1;
      });
    }, 100);
  };

  const pauseCharging = () => {
    setIsPaused(true);
  };

  const resumeCharging = () => {
    setIsPaused(false);
  };

  const stopCharging = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setPercentage(0);
    setIsPaused(false);
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Tabs */}
        <View style={styles.tabs}>
          {['Completed', 'In Process'].map(tab => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              style={[
                styles.tab,
                activeTab === tab && styles.activeTab,
              ]}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Content */}
        <ScrollView contentContainerStyle={styles.scroll}>
          {activeTab === 'In Process' ? (
            <>
              <ChargingAnimation percentage={percentage} />
              <View style={styles.vehicleBox}>
                <Text style={styles.vehicleTitle}>Tata Nexon</Text>
                <Text style={styles.vehicleSubtitle}>EV Max Dark Edition</Text>
              </View>
              <View style={styles.detailsBox}>
                {vehicleDetails.map(item => (
                  <View key={item.id} style={styles.detailRowWrapper}>
                    <Text style={styles.detailLabel}>{item.label}</Text>
                    <Text style={styles.detailValue}>{item.value}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.pauseButton}
                  onPress={isPaused ? resumeCharging : pauseCharging}
                >
                  <Text style={styles.buttonText}>
                    {isPaused ? 'RESUME' : 'PAUSE'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.endButton} onPress={stopCharging}>
                  <Text style={styles.buttonText}>END</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={styles.completedBox}>
                <Text style={styles.completedText}>Tesla Model 3 - 100%</Text>
                <Text style={styles.completedSub}>Completed on: June 15, 3:45 PM</Text>
              </View>
              <View style={styles.completedBox}>
                <Text style={styles.completedText}>Tata Nexon - 85%</Text>
                <Text style={styles.completedSub}>Completed on: June 10, 2:20 PM</Text>
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width,
    height,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#FF3B30',
  },
  scroll: {
    paddingBottom: 40,
  },
  vehicleBox: {
    alignItems: 'center',
    marginBottom: 20,
  },
  vehicleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  vehicleSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  detailsBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  detailRowWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  detailLabel: {
    fontSize: 14,
    color: '#444',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  pauseButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  endButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  completedBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  completedText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  completedSub: {
    fontSize: 12,
    color: '#777',
  },
});

