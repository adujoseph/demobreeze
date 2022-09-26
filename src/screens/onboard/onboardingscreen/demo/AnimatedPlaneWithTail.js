import {MotiView, useAnimationState} from 'moti';
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import PlaneWithTail from '../../../../assets/onboard_asset/plane_with_tail.svg';
import Plane from '../../../../assets/onboard_asset/plane.svg';

const AnimatedPlaneWithTail = ({index, styles}) => {
  const animationState = useAnimationState({
    from: {
      transform: [
        {
          translateX: hp(0),
        },
        {
          translateY: -hp(0),
        },
        {
          rotate: '0deg',
        },
        {
          translateX: hp(0),
        },
        {
          translateY: -hp(0),
        },
      ],
      opacity: 1,
    },
    to: {
      transform: [
        {
          translateX: hp(15),
        },
        {
          translateY: -hp(8),
        },
        {
          rotate: '-65deg',
        },
        {
          translateX: hp(15),
        },
        {
          translateY: -hp(5),
        },
      ],
      opacity: 0,
    },
  });

  const animPlaneState = useAnimationState({
    from: {
      opacity: 0,
      transform: [
        {
          translateX: hp(36),
        },
        {
          translateY: -hp(40),
        },
        {
          translateX: -hp(2),
        },
      ],
    },
    to: {
      transform: [
        {
          translateX: hp(35),
        },
        {
          translateY: -hp(42),
        },
        {
          translateX: -hp(3),
        },
      ],
      opacity: 1,
    },
    exit: {
      transform: [
        {
          translateX: hp(33),
        },
        {
          translateY: -hp(48),
        },
        {
          translateX: -hp(5),
        },
      ],
      opacity: 0,
    },
  });

  useEffect(() => {
    if (index === 1) {
      animationState.transitionTo('to');
      animPlaneState.transitionTo('to');
    } else if (index === 2) {
      animPlaneState.transitionTo('exit');
    } else if (index === 0) {
      animationState.transitionTo('from');
      animPlaneState.transitionTo('from');
    }
  }, [animationState, index, animPlaneState]);

  return (
    <View style={styles.container}>
      <MotiView
        style={styles.plane}
        state={animationState}
        transition={{
          type: 'timing',
        }}>
        <PlaneWithTail />
      </MotiView>
      <MotiView
        style={styles.plane}
        state={animPlaneState}
        transition={{
          type: 'timing',
        }}>
        <Plane />
      </MotiView>
    </View>
  );
};

export default AnimatedPlaneWithTail;
