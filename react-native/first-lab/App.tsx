/** @format */

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
    return (
        <View style={{ flex: 1, backgroundColor: 'red', padding: 20 }}>
            <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
                <View style={styles.container}>
                    <Text style={styles.text}>#crushingit</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'red',
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
        color: 'white',
        backgroundColor: 'red',
    },
})
