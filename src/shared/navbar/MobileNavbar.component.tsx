import ColorModeButton from "@/components/common/buttons/ColorModeButton.component";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  useDisclosure,
  useColorModeValue,
  Box,
  useColorMode,
} from "@chakra-ui/react";
import { icons } from "@/models/shared/ISideBar";
import SideBarDarwer from "@/components/common/drawers/SideBarDrawer.component";

export default function MobileNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <>
      <Box p="10px 0" bgColor={colorMode === "light" ? "#FFFFFF" : "RGBA(0, 0, 0, 0.30)"} borderRadius="0px 0px 10px 10px">
        <Flex w="90%" justifyContent="space-between" m="0px auto">
          <Button
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgColor={useColorModeValue("#C2C6CC", "RGBA(0, 0, 0, 0.60)")}
            boxSize="40px"
            borderRadius="10px"
            onClick={onOpen}
          >
            <HamburgerIcon fontSize="18px" />
          </Button>

          <Flex alignItems="center" gap="10px">
            <ColorModeButton />
            {/* <Avatar size="sm" /> */}
          </Flex>
        </Flex>
      </Box>
      <SideBarDarwer isOpen={isOpen} onClose={onClose} icons={icons} />
    </>
  );
}
