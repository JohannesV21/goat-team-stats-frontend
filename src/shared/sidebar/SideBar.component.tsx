import ActiveLink from "@/components/common/activeLink/ActiveLink.component";
import SideBarDarwer from "@/components/common/drawers/SideBarDrawer.component";
import {
  Flex,
  useDisclosure,
  Button,
  useColorMode,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { icons } from "@/models/shared/ISideBar";

export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const hamburguerIconBorderRight = useColorModeValue("#EEF1F6", "#4A5860");

  return (
    <>
      {/* Icon that displays the drawer */}
      <Flex
        as={Button}
        onClick={onOpen}
        w="100%"
        borderRadius="none"
        justifyContent="center"
        alignItems="center"
        bgColor={useColorModeValue("#fff", "RGBA(0, 0, 0, 0.50)")}
        h="70px"
        borderRight={`1px solid ${hamburguerIconBorderRight}`}
      >
        <HamburgerIcon color="#4A5860" fontSize="24px" />
      </Flex>
      <Divider w="80%" m="0 auto" />

      {/* SideBar */}
      <Flex
        m="20px auto 0"
        direction="column"
        alignItems="center"
        gap="15px"
        w="70%"
      >
        {icons.map(({ id, icon, text, url, onclick }) => {
          return (
            <Flex
              key={id}
              pos={text === "Logout" ? "absolute" : "static"}
              bottom={text === "Logout" ? "50px" : ""}
            >
              <ActiveLink
                id={id}
                icon={icon}
                text={text}
                url={url}
                onclick={onclick}
                isDrawer={false}
                BgColor={colorMode === "light" ? "none" : "RGBA(0, 0, 0, 0.60)"}
                hover={colorMode === "light" ? "#e1e1e1" : "RGBA(0, 0, 0, 1)"}
              />
            </Flex>
          );
        })}
      </Flex>

      {/* Sidebar Drawer */}
      <SideBarDarwer isOpen={isOpen} onClose={onClose} icons={icons} />
    </>
  );
}
