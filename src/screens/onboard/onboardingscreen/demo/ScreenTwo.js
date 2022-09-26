/* eslint-disable react-native/no-inline-styles */
import {MotiView, useAnimationState} from 'moti';
import React, {useEffect} from 'react';
import {ImageBackground, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import BgTwo from '../../../../assets/onboard_asset/rec_2.png';
import {Colors} from '../../../../utils/colors';

const ScreenTwo = ({normalText, bigText, index, styles}) => {
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
    if (index <= 1) {
      animationState.transitionTo('visible');
    } else {
      animationState.transitionTo('hidden');
    }
  }, [animationState, index]);

  return (
    <MotiView
      style={styles.bgTwo}
      state={animationState}
      transition={{
        type: 'timing',
      }}>
      <ImageBackground source={BgTwo} style={styles.bgImage}>
        <Text
          style={[
            bigText,
            {color: Colors.white, lineHeight: 35, width: '70%'},
          ]}>
          Invest in the future ...
        </Text>
        <Text
          style={[
            normalText,
            {color: Colors.white, marginVertical: hp(3)},
            styles.sub,
          ]}>
          Some texts need to come here to sell the key value of the solution to
          users
        </Text>
        <Text style={[normalText, {color: Colors.white}, styles.sub2]}>
          Some texts need to come here to sell the key value
        </Text>
      </ImageBackground>
    </MotiView>
  );
};

export default ScreenTwo;
