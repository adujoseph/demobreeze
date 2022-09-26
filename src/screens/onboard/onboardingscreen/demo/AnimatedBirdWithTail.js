import {MotiView, useAnimationState} from 'moti';
import React, {useEffect} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import BirdWithTail from '../../../../assets/onboard_asset/bird_with_tail.svg';

const AnimatedBirdWithTail = ({index, styles}) => {
  const animationState = useAnimationState({
    from: {
      transform: [
        {
          translateX: -hp(40),
        },
        {
          translateY: hp(13),
        },
        {
          rotate: '100deg',
        },
      ],
      opacity: 0,
    },
    to: {
      transform: [
        {
          translateX: -hp(20),
        },
        {
          translateY: hp(16),
        },
        {
          rotate: '55deg',
        },
      ],
      opacity: 1,
    },
    advance: {
      transform: [
        {
          translateX: -hp(0.55),
        },
        {
          translateY: hp(20),
        },
        {
          rotate: '-2deg',
        },
      ],
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  });

  useEffect(() => {
    if (index === 1) {
      animationState.transitionTo('to');
    } else if (index === 2) {
      animationState.transitionTo('advance');
    } else if (index > 2) {
      animationState.transitionTo('exit');
    } else {
      animationState.transitionTo('from');
    }
  }, [animationState, index]);

  return (
    <MotiView
      style={styles.plane}
      state={animationState}
      transition={{
        type: 'timing',
      }}>
      <BirdWithTail />
    </MotiView>
  );
};

export default AnimatedBirdWithTail;
