import {StyleSheet, View, Text} from 'react-native';
import React, {useState, useEffect, useMemo} from 'react';
import {AnimatePresence, MotiView, useAnimationState} from 'moti';
import RemixIcon from 'react-native-remix-icon';
import {MotiPressable} from 'moti/interactions';

const useSlideRight = () => {
  return useAnimationState({
    from: {
      translateX: 120,
    },
    to: {
      translateX: 0,
    },
  });
};

const useFadeUp = () => {
  return useAnimationState({
    from: {
      translateY: -220,
      opacity: 0,
    },
    to: {
      translateY: 0,
      opacity: 1,
    },
  });
};

const Intro = () => {
  const [show, setShow] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRight = useSlideRight();
  const fadeUp1 = useFadeUp();
  const fadeUp2 = useFadeUp();
  const fadeUp3 = useFadeUp();

  useEffect(() => {
    setShow(true);
  }, []);

  useEffect(() => {
    if (currentIndex > 0) {
      slideRight.transitionTo('from');
    }
    if (currentIndex === 1) {
      fadeUp1.transitionTo('from');
    }
    if (currentIndex === 2) {
      fadeUp2.transitionTo('from');
    }
    if (currentIndex === 3) {
      fadeUp3.transitionTo('from');
    }
  }, [currentIndex, slideRight, fadeUp1, fadeUp2, fadeUp3]);

  const onPress = () => {
    setCurrentIndex(prev => (prev >= 3 ? 3 : prev + 1));
  };

  return (
    <>
      {show && (
        <AnimatePresence>
          <MotiView
            style={styles.container}
            from={{
              opacity: 0,
              translateY: -300,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            transition={{
              type: 'timing',
              duration: 1000,
            }}>
            <MotiView style={styles.container1} state={fadeUp1}>
              <View style={styles.content}>
                <Text>Live the good life</Text>
              </View>
            </MotiView>
            <MotiView style={styles.container2} state={fadeUp2} />
            <MotiView style={styles.container3} state={fadeUp3} />
          </MotiView>
        </AnimatePresence>
      )}
      <View style={styles.btnContainer}>
        <MotiView state={slideRight}>
          <MotiPressable
            style={styles.btn}
            onPress={onPress}
            animate={useMemo(
              () =>
                ({hovered, pressed}) => {
                  'worklet';

                  return {
                    opacity: hovered || pressed ? 0.5 : 1,
                  };
                },
              [],
            )}
            transition={useMemo(
              () =>
                ({hovered, pressed}) => {
                  'worklet';

                  return {
                    delay: hovered || pressed ? 0 : 100,
                  };
                },
              [],
            )}>
            <RemixIcon
              name={currentIndex >= 3 ? 'check-line' : 'arrow-right-line'}
              size={40}
            />
          </MotiPressable>
        </MotiView>
      </View>
    </>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 300,
    padding: 30,
  },
  container1: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 3,
    backgroundColor: '#9c1aff',
    height: '70%',
  },
  container2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'pink',
    height: '80%',
    zIndex: 2,
  },
  container3: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'cyan',
    height: '90%',
    zIndex: 1,
  },
  btnContainer: {
    // justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 30,
  },
  btn: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
