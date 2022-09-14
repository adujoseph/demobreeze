import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import FirstSlide from '../../../assets/onboard_asset/screen1.png';
  import SecondSlide from '../../../assets/onboard_asset/screen2.png';
  import ThirdSlide from '../../../assets/onboard_asset/screen3.png';
  import LogoInverse from '../../../assets/onboard_asset/logo_inverse.png';
  import Ionicons from 'react-native-vector-icons/AntDesign';
  import {Colors} from '../../../utils/colors';
  import * as Animatable from 'react-native-animatable';
  import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
  import {GlobalStyles} from '../../../utils/globalStyles';
  
  const Onboard = () => {
    const [slide, setSlide] = useState(1);
  
    const {bigText, smallText, normalText} = GlobalStyles;
  
    const handleNext = () => {
      if (slide === 3) return;
      if (slide < 3) {
        setSlide(slide + 1);
      }
    };
  
    const handlePrevious = () => {
      if (slide === 1) return;
      if (slide > 0) {
        setSlide(slide - 1);
      }
    };
  
    const FirstScreen = () => {
      return (
        <View style={{flexGrow: 1}}>
          <Animatable.View animation="fadeInDown" style={{flexGrow: 1}}>
            <ImageBackground
              source={FirstSlide}
              style={styles.top}
              resizeMode="stretch"
            >
              <View style={styles.logo}>
                <Image source={LogoInverse} resizeMode="contain" />
              </View>
              <View style={[styles.h2]}>
                <Text
                  style={[smallText, {color: Colors.white, letterSpacing: 2}]}
                >
                  LIVE THE GOOD LIFE
                </Text>
              </View>
              <View style={styles.h1}>
                <Text style={[bigText, {color: Colors.white}]}>
                  Welcome to Breeze
                </Text>
              </View>
              <View style={styles.sub}>
                <Text style={[normalText, {color: Colors.white}]}>
                  Finance. Loans. Investment.
                </Text>
              </View>
            </ImageBackground>
          </Animatable.View>
  
          <View style={styles.bottom}>
            <TouchableOpacity onPress={handleNext} style={styles.arrowPlus}>
              <Ionicons size={30} color={Colors.secondary} name="arrowright" />
            </TouchableOpacity>
          </View>
        </View>
      );
    };
  
    const SecondScreen = () => {
      return (
        <View style={{flexGrow: 1}}>
          <ImageBackground
            source={SecondSlide}
            style={styles.top}
            resizeMode="stretch"
          >
            <View style={styles.h1}>
              <Text style={[bigText, {color: Colors.white}]}>
                Invest in the Future
              </Text>
            </View>
            <View style={styles.sub}>
              <Text style={[normalText, {color: Colors.white}]}>
                Some texts need to come here to sell the key value of the solution
                to users
              </Text>
            </View>
            <View style={styles.sub}>
              <Text style={[normalText, {color: Colors.white}]}>
                Some texts need to come here to sell the key value of the solution
                to users
              </Text>
            </View>
          </ImageBackground>
          <View style={styles.bottomRow}>
            <TouchableOpacity onPress={handlePrevious} style={styles.arrowPlus}>
              <Ionicons size={30} color={Colors.secondary} name="arrowleft" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext} style={styles.arrow}>
              <Ionicons size={30} color={Colors.primary} name="arrowright" />
            </TouchableOpacity>
          </View>
        </View>
      );
    };
  
    const ThirdScreen = () => {
      return (
        <View style={{flex: 1}}>
          <ImageBackground
            source={ThirdSlide}
            style={styles.top}
            resizeMode="stretch"
          >
            <View style={styles.h1}>
              <Text style={[bigText, {color: Colors.white}]}>
                Earn it when you need it
              </Text>
            </View>
            <View style={styles.sub}>
              <Text style={[normalText, {color: Colors.white}]}>
                Some texts need to come here to sell the key value of the solution
                to users
              </Text>
            </View>
            <View style={styles.sub}>
              <Text style={[normalText, {color: Colors.white}]}>
                Some texts need to come here to sell the key value of the solution
                to users
              </Text>
            </View>
          </ImageBackground>
          <View style={styles.bottomRow}>
            <TouchableOpacity onPress={handlePrevious} style={styles.arrowPlus}>
              <Ionicons size={30} color={Colors.secondary} name="arrowleft" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkmark}>
              <Ionicons size={30} color={Colors.primary} name="check" />
            </TouchableOpacity>
          </View>
        </View>
      );
    };
  
    return (
      <>
        <View style={{flex: 1}}>
          {slide === 1 ? FirstScreen() : null}
          {slide === 2 ? SecondScreen() : null}
          {slide === 3 ? ThirdScreen() : null}
          <TouchableOpacity style={styles.cancel}>
          <Ionicons size={30} color={Colors.secondary} name="close" />
          </TouchableOpacity>
        </View>
      </>
    );
  };
  
  export default Onboard;
  
  const styles = StyleSheet.create({
    top: {
      flexGrow: 0.85,
      padding: hp(5),
    },
    logo: {
      marginTop: hp(6),
      marginBottom: hp(3),
    },
    bottom: {
      flexGrow: 0.15,
      padding: hp(5),
      justifyContent: 'center',
      alignItems: 'center',
    },
    bottomRow: {
      flex: 0.15,
      padding: hp(5),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    arrow: {
      borderRadius: hp(5),
      backgroundColor: Colors.secondary,
      padding: hp(1.5),
    },
    arrowPlus: {
      borderRadius: hp(5),
      padding: hp(1.5),
      borderWidth: 3,
      borderColor: Colors.secondary,
    },
    checkmark: {
      borderRadius: hp(5),
      backgroundColor: Colors.secondary,
      padding: hp(1.5),
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
    },
    cancel:{
      position: 'absolute',
      top: 20,
      right: 20,
      zIndex: 9999,
    }
  });
  