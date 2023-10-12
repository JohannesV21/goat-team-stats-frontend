import {
  Flex,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import ActiveLink from "../activeLink/ActiveLink.component";
import { Iicons } from "@/models/shared/ISideBar";

interface ISidebarDrawer {
  isOpen: boolean;
  onClose: () => void;
  icons: Array<Iicons>;
}

export default function SideBarDarwer({
  isOpen,
  onClose,
  icons,
}: ISidebarDrawer) {
  const { colorMode } = useColorMode();

  return (
    <Drawer isOpen={isOpen} placement="left" size="xs" onClose={onClose}>
      <DrawerOverlay bg="RGBA(0, 0, 0, 0.60)" />
      <DrawerContent bgColor={useColorModeValue("#C2C6CC", "#1A202C")}>
        <DrawerCloseButton />
        <DrawerHeader>
          {/* Logo Goat TeamStats */}
          <Flex alignItems="flex-end">
            <Image
              src="/images/logoGoatTeamStats.png"
              alt="logo Goat TeamStats"
            />

            <Text>Goat TeamStats</Text>
          </Flex>
        </DrawerHeader>

        <DrawerBody as={Flex} gap="10px" flexDirection="column" mt="20px">
          {icons.map(({ id, icon, text, url, onclick }) => {
            return (
              <Flex
                key={id}
                borderRadius="6px"
                gap={"100px"}
                mb="10px"
                cursor="pointer"
                onClick={onclick}
              >
                <ActiveLink
                  id={id}
                  icon={icon}
                  text={text}
                  url={url}
                  onclick={onclick}
                  isDrawer={true}
                  BgColor={
                    colorMode === "light" ? "#f4f4f4" : "RGBA(0, 0, 0, 0.20)"
                  }
                  hover={
                    colorMode === "light" ? "#e1e1e1" : "RGBA(0, 0, 0, 0.40)"
                  }
                />
              </Flex>
            );
          })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
