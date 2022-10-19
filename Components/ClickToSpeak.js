import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default function ClickToSpeak() {
  const speak = () => {
    const thingToSay = 'Hello';
    Speech.speak(thingToSay);
  };

  return (
      <Button title="Press to hear some words" onPress={speak} />
  );
}