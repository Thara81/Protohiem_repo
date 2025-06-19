import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
} from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
  onAddMoney: (amount: number) => void;
}

const AddMoneyPopup: React.FC<Props> = ({ visible, onClose, onAddMoney }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const quickAmounts = [100, 500, 1000];

  const handlePay = () => {
    const finalAmount = selectedAmount ?? parseInt(customAmount, 10);
    if (!isNaN(finalAmount) && finalAmount > 0) {
      onAddMoney(finalAmount);
      onClose();
      setSelectedAmount(null);
      setCustomAmount('');
    } else {
      alert('Please enter or select a valid amount');
    }
  };

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.title}>Add Money to Wallet</Text>

          <TextInput
            placeholder="Enter custom amount"
            keyboardType="numeric"
            value={customAmount}
            onChangeText={(text) => {
              setSelectedAmount(null);
              setCustomAmount(text);
            }}
            style={styles.input}
          />

          <View style={styles.quickOptions}>
            {quickAmounts.map((amount) => (
              <TouchableOpacity
                key={amount}
                style={[
                  styles.amountBtn,
                  selectedAmount === amount && styles.activeAmount,
                ]}
                onPress={() => {
                  setSelectedAmount(amount);
                  setCustomAmount('');
                }}
              >
                <Text style={styles.amountText}>₹{amount}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.payBtn} onPress={handlePay}>
            <Text style={styles.payText}>PAY</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: '#0006',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '85%',
    alignItems: 'center',
    elevation: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    borderColor: '#ccc',
  },
  quickOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  amountBtn: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    width: 80,
    alignItems: 'center',
    elevation: 3,
  },
  activeAmount: {
    borderColor: '#D80000',
    borderWidth: 2,
    backgroundColor: '#fff',
  },
  amountText: {
    fontWeight: 'bol

