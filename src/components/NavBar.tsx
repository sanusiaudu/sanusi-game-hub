import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import CoolorModeSwitch from "./colorModeSwitch";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput />
      <CoolorModeSwitch />
    </HStack>
  );
}

export default NavBar;
