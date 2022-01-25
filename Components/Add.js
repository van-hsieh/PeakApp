import React, { useState } from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Example = () => {
  const today = new Date();
  const dateTransformaation = (date) => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const todayStr = `${weekday[date.getDay()]}, ${month[date.getMonth()]} ${date.getDate()}`;

    return todayStr;
  }
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [chosenDate, setChosenDate] = useState('Today ' + dateTransformaation(today))

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setChosenDate(dateTransformaation(date))
    hideDatePicker();
  };

  return (
    <View>
      <Button title={chosenDate} onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default function Add() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>How are you?</Text>
      <Example />
    </View>
  );
}