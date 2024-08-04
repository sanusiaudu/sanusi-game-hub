import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import CoolorModeSwitch from "./colorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <CoolorModeSwitch />
    </HStack>
  );
}

export default NavBar;
