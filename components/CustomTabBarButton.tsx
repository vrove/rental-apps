import React from 'react';
import { TouchableOpacity } from 'react-native';

const CustomTabBarButton = (props) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={1} // Disable the click effect
      style={[props.style, { backgroundColor: 'transparent' }]} // Ensure the background is transparent
    />
  );
};

export default CustomTabBarButton;