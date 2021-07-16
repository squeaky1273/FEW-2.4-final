import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';

import { bands } from '../metal'

function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

function Styles() {

    const band_style = bands.map(item => item.style)
    const unique = band_style.filter(function (value, index) {
      return band_style.indexOf(value) === index;
    });
  
    const uniqueCount = unique.reduce(function (accumulator, item) {
        if(item) {
          return accumulator + 1
        }
        return accumulator + 0
        }, 0);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView> 
                <Text style={styles.heading}>Styles</Text>
                <View style={styles.bandListContainer}>
                    <Text style={styles.text}># of Styles: {uniqueCount}{"\n"}</Text>
                </View>
                <FlatList
                    data={bands}
                    keyExtractor={(item) => item.band_name}
                    ItemSeparatorComponent={() => Separator()}
                    renderItem={({ item }) => (
                <View style={styles.bandListContainer}>
                    <Text style={styles.text}>
                        {item.style}
                    </Text>
                </View>
                )}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

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

export default Styles