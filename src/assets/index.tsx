import {View, ImageBackground, Dimensions, StyleSheet} from 'react-native';
import {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  interpolate,
  useSharedValue,
  Extrapolation,
} from 'react-native-reanimated';

const AnimatedImageBackground = Animated.createAnimatedComponent(
  ImageBackground,
);
const HEIGHT = Dimensions.get('screen').height;

const Onboarding = () => {
  const positionY = useSharedValue(0);
  useEffect(() => {
    positionY.value = HEIGHT;
  }, []);
  const bezierContainerAnimatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      positionY.value,
      [0, HEIGHT / 2, HEIGHT],
      [0, 0.5, 1],
      {extrapolateRight: Extrapolation.CLAMP},
    );
    return {
      transform: [
        {
          translateY: positionY.value,
        },
      ],
      opacity,
    };
  });
  return (
    <View>
      <Animated.View
        style={[styles.bezierContainer, bezierContainerAnimatedStyle]}
      >
        {/* backgroud 1 */}
        <AnimatedImageBackground source={require('../assets/images/bg1.png')} />
        {/* background 2 */}
        <AnimatedImageBackground source={require('../assets/images/bg2.png')} />
        {/* background 3 */}
        <AnimatedImageBackground source={require('../assets/images/bg3.png')} />
      </Animated.View>
    </View>
  );
};
export default Onboarding;

const styles = StyleSheet.create({
  container: {},
  bezierContainer: {
    position: 'relative',
  },
});
