/* eslint-disable react-native/no-inline-styles */
import {MotiView, useAnimationState} from 'moti';
import React, {useEffect, useMemo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/AntDesign';

import BgThree from '../../../../assets/onboard_asset/rec_3.png';
import {Colors} from '../../../../utils/colors';
import Bird from '../../../../assets/onboard_asset/bird.svg';
import {MotiPressable} from 'moti/interactions';

const ScreenFour = ({index, bigText, normalText, handlePrevious, styles}) => {
  const animationState = useAnimationState({
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  });

  useEffect(() => {
    if (index < 3) {
      animationState.transitionTo('hidden');
    } else {
      animationState.transitionTo('visible');
    }
  }, [animationState, index]);

  return (
    <MotiView
      style={styles.bgFour}
      state={animationState}
      transition={{type: 'timing'}}>
      <View style={{height: '30%'}}>
        <Image
          source={BgThree}
          style={{
            paddingVertical: hp(30),
            top: -hp('46%'),
            width: '100%',
            position: 'absolute',
            zIndex: -1,
          }}
          resizeMode="stretch"
        />
        <TouchableOpacity style={[styles.back]} onPress={handlePrevious}>
          <Ionicons size={30} color={Colors.secondary} name="arrowleft" />
        </TouchableOpacity>
        <Text
          style={[
            bigText,
            {
              color: Colors.white,
              top: hp(13),
              position: 'absolute',
              left: hp(2),
              width: hp('20%'),
            },
          ]}>
          Secure loans and more ...
        </Text>

        <View style={[styles.bird]}>
          <Bird />
        </View>
      </View>
      <View style={styles.bottomWrapper}>
        <Text style={[normalText, {color: Colors.gray}]}>
          Some texts need to come here to sell the key value of the solution to
          users
        </Text>
        <View style={{marginTop: 40}}>
          <View style={styles.flexRow}>
            <View style={styles.dot} />
            <Text style={[normalText]}>
              Some texts need to come here to sell the key
            </Text>
          </View>
          <View style={styles.flexRow}>
            <View style={styles.dot} />
            <Text style={[normalText]}>Some texts need to come here</Text>
          </View>
          <View style={styles.flexRow}>
            <View style={styles.dot} />
            <Text style={[normalText]}>key value of the solution to users</Text>
          </View>
        </View>
        <MotiPressable
          animate={useMemo(
            () =>
              ({hovered, pressed}) => {
                'worklet';

                return {
                  opacity: hovered || pressed ? 0.3 : 1,
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
          )}
          style={{
            backgroundColor: Colors.primary,
            padding: 24,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp('15%'),
          }}>
          <Text style={{color: Colors.white, fontWeight: '600', fontSize: 16}}>
            GET STARTED
          </Text>
        </MotiPressable>
      </View>
    </MotiView>
  );
};

export default ScreenFour;
