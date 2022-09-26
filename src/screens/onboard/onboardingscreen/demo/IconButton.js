/* eslint-disable react-native/no-inline-styles */
import {MotiPressable} from 'moti/interactions';
import React, {useMemo} from 'react';
import {Colors} from '../../../../utils/colors';

const IconButton = ({
  onPress,
  children,
  contained = false,
  styles,
  ...rest
}) => {
  return (
    <MotiPressable
      onPress={onPress}
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
      style={[
        styles.iconButton,
        {
          backgroundColor: contained ? Colors.secondary : Colors.white,
          borderWidth: !contained ? 3 : 0,
          borderColor: !contained ? Colors.secondary : Colors.white,
        },
        rest.style,
      ]}>
      {children}
    </MotiPressable>
  );
};
export default IconButton;
