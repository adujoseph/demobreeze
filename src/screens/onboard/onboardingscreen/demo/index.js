import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {AnimatePresence, MotiView} from 'moti';
import Ionicons from 'react-native-vector-icons/AntDesign';

import {GlobalStyles} from '../../../../utils/globalStyles';
import {Colors} from '../../../../utils/colors';
import ScreenOne from './ScreenOne';
import ScreenTwo from './ScreenTwo';
import ScreenThree from './ScreenThree';
import ScreenFour from './ScreenFour';
import IconButton from './IconButton';
import AnimatedPlaneWithTail from './AnimatedPlaneWithTail';
import AnimatedBirdWithTail from './AnimatedBirdWithTail';

const Demo = () => {
  const [index, setIndex] = useState(0);
  const {bigText, smallText, normalText} = GlobalStyles;

  useEffect(() => {
    setIndex(0);
  }, []);

  const handleNext = () => {
    if (index >= 3) {
      setIndex(3);
    } else {
      setIndex(prev => prev + 1);
    }
  };

  const handlePrevious = React.useCallback(() => {
    if (index <= 0) {
      setIndex(0);
    } else {
      setIndex(prev => prev - 1);
    }
  }, [index]);

  return (
    <AnimatePresence>
      <View style={styles.container}>
        <AnimatePresence>
          {index >= 3 ? null : (
            <TouchableOpacity style={styles.cancel}>
              <Ionicons size={30} color={Colors.secondary} name="close" />
            </TouchableOpacity>
          )}
        </AnimatePresence>
        <View style={styles.container}>
          <ScreenOne {...{smallText, bigText, normalText, index, styles}} />
          <ScreenTwo {...{normalText, bigText, index, styles}} />
          <ScreenThree {...{normalText, bigText, index, styles}} />
          <ScreenFour
            {...{index, bigText, normalText, handlePrevious, styles}}
          />
        </View>
        <AnimatedPlaneWithTail {...{index, styles}} />
        <AnimatedBirdWithTail {...{index, styles}} />
        <AnimatePresence>
          {index >= 3 ? null : (
            <MotiView style={styles.btnWrapper}>
              <MotiView
                style={[styles.iconLeft]}
                animate={{
                  opacity: index === 0 ? 0 : 1,
                  translateX: -hp(17),
                }}>
                <IconButton onPress={handlePrevious} styles={styles}>
                  <Ionicons
                    size={30}
                    color={Colors.secondary}
                    name="arrowleft"
                  />
                </IconButton>
              </MotiView>
              <MotiView
                from={{
                  translateX: 0,
                }}
                animate={{
                  translateX: index === 0 ? 0 : index >= 1 ? hp(16) : 0,
                }}>
                <IconButton onPress={handleNext} contained styles={styles}>
                  <Ionicons
                    size={30}
                    color={Colors.primary}
                    name={index >= 2 ? 'check' : 'arrowright'}
                  />
                </IconButton>
              </MotiView>
            </MotiView>
          )}
        </AnimatePresence>
      </View>
    </AnimatePresence>
  );
};

export default Demo;

const bg = {
  flex: 1,
  position: 'absolute',
  left: 0,
  right: 0,
  top: -hp('10%'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  logo: {
    marginBottom: hp(3),
  },
  bgOne: {
    ...bg,
    height: hp('99%'),
    zIndex: 3,
  },
  bgTwo: {
    ...bg,
    height: hp('99%'),
    zIndex: 2,
  },
  bgThree: {
    ...bg,
    height: hp('100%'),
    top: -hp('13%'),
    zIndex: 1,
  },
  bgFour: {
    height: hp('100%'),
    zIndex: 6,
  },
  btnWrapper: {
    padding: hp(5),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconButton: {
    width: 80,
    height: 80,
    borderRadius: hp(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconLeft: {
    position: 'absolute',
  },
  text: {
    color: Colors.white,
  },
  h1: {
    width: '55%',
    paddingVertical: hp(1),
  },
  h2: {
    width: '70%',
  },
  sub: {
    width: '70%',
    paddingVertical: hp(1),
    lineHeight: 25,
  },
  sub2: {
    width: '50%',
    paddingVertical: hp(1),
    lineHeight: 25,
  },
  cancel: {
    position: 'absolute',
    top: hp(5),
    right: hp(1),
    zIndex: 999999,
  },
  back: {
    top: hp(5),
    left: hp(2),
  },
  bgImage: {
    paddingVertical: hp(25),
    paddingHorizontal: hp(3),
    flex: 1,
  },
  plane: {
    position: 'absolute',
    top: hp(5),
  },
  bird: {
    position: 'absolute',
    top: hp('8%'),
    right: hp('3%'),
    zIndex: 999999,
  },
  bottomWrapper: {
    paddingHorizontal: hp(4),
    paddingVertical: hp(2),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    marginRight: 10,
  },
});
