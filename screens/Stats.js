import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

import { bands } from '../metal'

function Stats() {
    const totalBands = bands.length
  
    const totalFans = bands.reduce((acc, band) => {
      acc = acc + (band.fans * 1000)
      return acc
    }, 0)
  
  
    const countries = bands.filter((band) => {
      return band.origin
    })
  
    const unquie_countries = countries.filter((country, index) => countries.indexOf(country) === index)
  
    const active_bands = bands.filter((band) => {
      return band.split === "-"
    })
  
    const inactive_bands = bands.filter((band) => {
      return band.split !== "-"
    })
  
    return(
      <SafeAreaView style={styles.container}>
          <ScrollView> 
                <Text style={styles.heading}>Stats</Text>
                    <Text style={styles.text}>
                        Count: {totalBands}
                    </Text>
                    <Text style={styles.text}>
                        Fans: {totalFans}
                    </Text>
                    <Text style={styles.text}>
                        Countries: {unquie_countries.length}
                    </Text>
                    <Text style={styles.text}>
                        Active: {active_bands.length}
                    </Text>
                    <Text style={styles.text}>
                        Split: {inactive_bands.length}
                    </Text>
        </ScrollView>
      </SafeAreaView>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "black",
      justifyContent: "center"
    },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      margin: 20,
      paddingTop: 50,
      color: "white",
    },
    text: {
        fontSize: 18,
        flex: 1,
        flexGrow: 1,
        color: "white",
    },
})

export default Stats