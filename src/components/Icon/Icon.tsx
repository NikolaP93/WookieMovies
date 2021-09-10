import React from 'react';
import getIconType, {IconTypes} from '../../utils/getIconType';

export interface IconProps {
  size: number;
  name: string;
  onPress?(): any;
  color: string;
  type: IconTypes;
  testId: string;
}

const Icon = (props: IconProps): JSX.Element => {
  const {color, name, onPress, size, type, testId} = props;
  const IconComponent = getIconType(type);

  return (
    <IconComponent
      testID={testId}
      size={size}
      name={name}
      color={color}
      onPress={onPress}
    />
  );
};

export default Icon;
