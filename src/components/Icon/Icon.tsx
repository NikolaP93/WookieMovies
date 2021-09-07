import React from 'react';
import getIconType, {IconTypes} from '../../utils/getIconType';

export interface IconProps {
  size: number;
  name: string;
  onPress?(): any;
  color: string;
  type: IconTypes;
}

const Icon = (props: IconProps): JSX.Element => {
  const {color, name, onPress, size, type} = props;
  const IconComponent = getIconType(type);

  return (
    <IconComponent size={size} name={name} color={color} onPress={onPress} />
  );
};

export default Icon;
