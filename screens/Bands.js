import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, FlatList } from 'react-native';

import { bands } from '../metal'

function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

function Bands() {
    const active_bands = bands.filter((band) => {
        return band.split === "-"
      })
    
    const inactive_bands = bands.filter((band) => {
        return band.split !== "-"
    })
    return (
        <View style={styles.container}>   
            <Text style={styles.heading}>Bands</Text>
            <FlatList
            data={bands}
            keyExtractor={(item) => item.band_name}
            ItemSeparatorComponent={() => Separator()}
            renderItem={({ item }) => (
                <View style={styles.bandListContainer}>
                    <Text style={styles.name_text}>{item.band_name}</Text>
                    <View>
                    <Text style={styles.name_text}>Origin: {item.origin}{"\n"}</Text>
                    <Text style={styles.fan_text}>Fan Count: {item.fans}{"\n"}</Text>
                    <Text style={styles.origin_text}>Formed: {item.formed}</Text>
                    </View>
                </View>
            )}
            />
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
        backgroundColor: "black"
      },
    heading: {
      fontSize: 30,
      fontWeight: 'bold',
      margin: 20,
      paddingTop: 50,
      color: "#fff",
    },
    bandListContainer: {
		padding: 10,
		margin: 1,
        backgroundColor: "black"
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontWeight: '400',
        color: "#fff",
    },
    name_text: {
        fontSize: 18,
        flex: 1,
        flexGrow: 1,
        color: "#999",
    },
    fan_text: {
        fontSize: 12,
        flex: 1,
        flexGrow: 1,
        color: "#999",
    },
    origin_text: {
        fontSize: 18,
        flex: 1,
        flexGrow: 1,
        color: "#999",
    },
})

export default Bands