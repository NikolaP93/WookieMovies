import React from 'react';
import {Text as NativeText, StyleSheet} from 'react-native';

interface SizeProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
}

interface Children {
  children: string;
}

const getSize = ({h1, h2, h3}: SizeProps) => {
  const sizeStyles = [];

  if (h1) {
    sizeStyles.push(styles.h1);
  }
  if (h2) {
    sizeStyles.push(styles.h2);
  }
  if (h3) {
    sizeStyles.push(styles.h3);
  }
  return sizeStyles;
};

const Text = (props: SizeProps & Children) => {
  const {children, h1, h2, h3} = props;
  const sizeStyles = getSize({h1, h2, h3});

  return (
    <NativeText style={StyleSheet.flatten([sizeStyles])}>{children}</NativeText>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
  },
  h2: {
    fontSize: 22,
  },
  h3: {
    fontSize: 18,
  },
});

export default Text;
