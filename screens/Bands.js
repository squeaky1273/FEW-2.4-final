import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, FlatList } from 'react-native';

import { bands } from '../metal'

function Separator() {
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#a9a9a9' }} />
}

const image = { uri: "https://wallpapercave.com/wp/6weLGjt.jpg" };

function Bands() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={styles.image}
            >     
                <Text style={styles.heading}>Bands</Text>
                <FlatList
                data={bands}
                keyExtractor={(item) => item.band_name}
                ItemSeparatorComponent={() => Separator()}
                renderItem={({ item }) => (
                    <View style={styles.bandListContainer}>
                        <Text style={styles.title}>{item.band_name}</Text>
                        <View>
                        <Text style={styles.text}>Origin: {item.origin}{"\n"}Fan Count: {item.fans}{"\n"}Formed: {item.formed}</Text>
                        </View>
                    </View>
                )}
                />
            </ImageBackground>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
      },
    heading: {
      fontSize: 36,
      fontWeight: 'bold',
      margin: 20,
      paddingTop: 50,
      color: "white",
    },
    bandListContainer: {
		padding: 10,
		margin: 1,
    },
    title: {
        flex: 1,
        fontSize: 25,
        fontWeight: '400',
        color: "white",
    },
    text: {
        fontSize: 15,
        flex: 1,
        flexGrow: 1,
        color: "white",
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
})

export default Bands