import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react';
import { WebView } from 'react-native-webview';

const OpenUrl = () => {
    const [show, setShow] = useState(false);

    const url = 'https://seamlesshr.com/'

    const newTabOpen = () => {
        Linking.openURL(url);
    }

    const withinTabOpen = () => {
        setShow(true);
    }
    return (
        <>
            <View style={{flex: 1}}>
                {!show ?
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={newTabOpen} style={[styles.btn]}><Text>OpenUrl in web browser</Text></TouchableOpacity>
                        <TouchableOpacity onPress={withinTabOpen} style={[styles.btn]}><Text>OpenUrl within this app</Text></TouchableOpacity>
                    </View>
                    :
                    <View style={{width: '100%', flex: 1}}>
                        <TouchableOpacity onPress={() => setShow(false)} style={[styles.btn]}><Text style={{paddingLeft: 10, color: 'green' , fontWeight: '900'}}>Go Back</Text></TouchableOpacity>
                        <WebView
                            source={{
                                uri: url
                            }}
                            style={{ flex: 1 }}
                        />
                    </View>
                }

            </View>

        </>

    )
}

export default OpenUrl

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 20
    }
})