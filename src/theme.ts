import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  // We can define colors that will be available for use throughout the project
  colors: {
    success: {
      '100': '#EBFCD8',
      '300': '#B0EF88',
      '500': '#5DCC39',
      '700': '#28921C',
      '900': '#0A610E',
    },
    danger: {
      '100': '#FFE7D9',
      '300': '#FFA48D',
      '500': '#FF4842',
      '700': '#B72136',
      '900': '#7A0C2E',
    },
    warning: {
      '100': '#FFF6CE',
      '300': '#FFDD6D',
      '500': '#FFB80C',
      '700': '#B77906',
      '900': '#7A4802',
    },
  },
  // We can set the font of our project
  fonts: {
    heading: 'Be Vietnam',
    body: 'Be Vietnam',
  },
  fontSizes: {
    // You can adjust the size as per your preference
    sm: '14px', // Small font size
    md: '16px', // Default font size
    lg: '18px', // Large font size
    xl: '20px', // Extra large font size
  },
  // We can define an initial colorMode (I chose dark 🌙 as default )
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});