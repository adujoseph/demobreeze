/* eslint-disable react-native/no-inline-styles */
import {MotiView, useAnimationState} from 'moti';
import React, {useEffect} from 'react';
import {Image, ImageBackground, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import BgOne from '../../../../assets/onboard_asset/rec_1.png';
import LogoInverse from '../../../../assets/onboard_asset/logo_inverse.png';
import {Colors} from '../../../../utils/colors';

const ScreenOne = ({smallText, bigText, normalText, index, styles}) => {
  const animationState = useAnimationState({
    visible: {
      opacity: 1,
      translateY: 0,
    },
    hidden: {
      opacity: 0,
      translateY: -100,
    },
  });

  useEffect(() => {
    if (index === 1) {
      animationState.transitionTo('hidden');
    } else if (index === 0) {
      animationState.transitionTo('visible');
    }
  }, [animationState, index]);

  return (
    <MotiView
      style={styles.bgOne}
      state={animationState}
      transition={{
        type: 'timing',
      }}>
      <ImageBackground source={BgOne} style={styles.bgImage}>
        <Image source={LogoInverse} resizeMode="contain" style={styles.logo} />
        <Text
          style={[
            smallText,
            {color: Colors.white, letterSpacing: 2},
            styles.h2,
          ]}>
          LIVE THE GOOD LIFE
        </Text>
        <Text
          style={[bigText, {color: Colors.white, marginTop: hp(1)}, styles.h1]}>
          Welcome to Breeze
        </Text>
        <Text style={[normalText, {color: Colors.white, marginTop: hp(5)}]}>
          Finance. Loans. Investments.
        </Text>
      </ImageBackground>
    </MotiView>
  );
};

export default ScreenOne;
