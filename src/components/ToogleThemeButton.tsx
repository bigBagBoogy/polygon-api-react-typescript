import { IconButton, useColorMode } from "@chakra-ui/react";
// Icon import from within react-icons
import { RiMoonLine, RiSunLine } from "react-icons/ri";

export function ToogleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      // For accessibility issues, explain what the element does
      aria-label="Toogle theme"
      // button icon
      icon={colorMode === 'light' ? <RiMoonLine /> : <RiSunLine />}
      // The function that will be executed when the button is clicked
      onClick={toggleColorMode}
    />
  );
}