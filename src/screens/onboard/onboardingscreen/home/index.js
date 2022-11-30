import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'


const Onboard = () => {
    const [slide_number, setSlideNumber] = useState(2);
    const _slideOptions = [
        { id: 1, bgImage: require('../../../../assets/onboard_asset/rec_3.png') },
        { id: 2, bgImage: require('../../../../assets/onboard_asset/rec_2.png') },
        { id: 3, bgImage: require('../../../../assets/onboard_asset/rec_1.png') },
    ]
    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.8 }}>
                    {_slideOptions.map((option, i) => (
                        <ImageBackground source={option.bgImage} key={i} style={styles.bg} resizeMode='stretch' />
                    ))}
                </View>

                <View style={styles.btnWrapper}>
                    {slide_number === 1 ?
                        <View>
                            <TouchableOpacity>
                                <Text style={{ color: 'green' }}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        : null}
                    {slide_number === 2 ?
                        <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 30 }}>
                            <Text style={{ color: 'green' }}>Delete</Text>
    
                        </TouchableOpacity> : null}
                    {slide_number === 3 ?
                        <TouchableOpacity style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding: 30 }}>
                            <Text style={{ color: 'green' }}>Delete</Text>
                        </TouchableOpacity> : null}
                </View>


            </View>
        </>
    )
}

export default Onboard

const styles = StyleSheet.create({
    bgWrapper: {
        width: '100%',
        backgroundColor: 'yellow',
        flex: 1
    },
    bg: {
        height: hp(80),
        padding: 40,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,

    },
    btnWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 40,
        width: '100%'
    },
    btn1: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center', width: '100%', padding: 30 }
})