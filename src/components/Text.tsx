import { Text, TextProps, ResponsiveValue } from '@chakra-ui/react';

interface CustomTextProps extends TextProps {
  fontSize?: ResponsiveValue<string | number>; // Update the type here
}

const CustomText: React.FC<CustomTextProps> = ({ fontSize, ...rest }) => (
  <Text fontSize={fontSize || 'md'} {...rest} />
);

export default CustomText;
