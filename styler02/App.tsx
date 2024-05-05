import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';
import FlatCard from './Components/FlatCard';
import ElevatedCards from './Components/ElevatedCards';
import FancyCard from './Components/FancyCard';
import ActionCard from './Components/ActionCard';

function App() {
  return (
    <SafeAreaView>
    <ScrollView>
      <FlatCard />
      <ElevatedCards />
      <FancyCard />
      <ActionCard />
    </ScrollView>
  </SafeAreaView>
  )
}


export default App;