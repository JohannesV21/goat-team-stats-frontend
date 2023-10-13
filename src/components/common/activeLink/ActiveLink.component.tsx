import NextLink from "next/link";
import { Flex, Icon, Link, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Iicons } from "@/models/shared/ISideBar";

interface ActiveLink extends Iicons {
  BgColor: string;
  hover: string;
  isDrawer: boolean;
}

export default function ActiveLink({
  url,
  BgColor,
  hover,
  text,
  icon,
  onclick,
  isDrawer,
}: ActiveLink) {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const colorIcons = colorMode === "light" ? "#CACED3" : "#4A5860";
  const hoverIcons = colorMode === "light" ? "#4A5860" : "#FFFFFF";

  return (
    <Link
      as={NextLink}
      href={url}
      p={"12px 15px"}
      bgColor={router.asPath === url ? BgColor : ""}
      borderRadius="6px"
      display="block"
      w="100%"
      _hover={{
        textDecoration: "none",
      }}
    >
      {isDrawer ? (
        // Drawer navigation content
        <Flex gap="5px" alignItems="center" w="100%">
          <Icon as={icon} fontSize="20px" />
          <Text>{text}</Text>
        </Flex>
      ) : (
        // Sidebar navigation content
        <Flex
          alignItems="center"
          justifyContent="center"
          onClick={onclick}
          title={text}
        >
          <Icon
            as={icon}
            fontSize="24px"
            color={router.asPath === url ? "palette.green" : colorIcons}
            _hover={{
              textDecoration: "none",
              color: router.asPath === url ? "none" : hoverIcons,
            }}
          />
        </Flex>
      )}
    </Link>
  );
}
