import React from 'react';
import {StyleSheet} from 'react-native';
import { font_bold, font_regular, font_medium } from './constants';
import {RFPercentage as rf} from 'react-native-responsive-fontsize';
import {Colors} from './colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const GlobalStyles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: hp(3),
        backgroundColor: '#fff'
    },
    centerContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        fontSize: rf(2.5),
        fontFamily: font_bold,
        color: Colors.text,
    }, 
    bigText: {
        fontSize: rf(3.2),
        fontFamily: font_bold,
        color: Colors.text,
    },
    bigTextBold: {
        fontSize: rf(3.5),
        fontFamily: font_bold,
        color: Colors.text,
    },
  
    mediumText:{
        fontSize: rf(2.2),
        fontFamily: font_bold,
        color: Colors.text,
    }, 
    normalText:{
        fontSize: rf(2),
        fontFamily: font_regular,
        color: Colors.text,
    }, 
    normalTextPrimary:{
        fontSize: rf(2),
        fontFamily: font_regular,
        color: Colors.primary,
    }, 
    normalTextMedium:{
        fontSize: rf(2),
        fontFamily: font_medium,
        color: Colors.text,
    },
    normalTextBold:{
        fontSize: rf(2),
        fontFamily: font_bold,
        color: Colors.text,
    },
    smallText:{
        fontSize: rf(1.6),
        fontFamily: font_regular,
        color: Colors.text,
    },
    extraSmallText:{
        fontSize: rf(1.2),
        fontFamily: font_regular,
        color: Colors.text,
    },


})