import { Avatar, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import ColorModeButton from "@/components/common/buttons/ColorModeButton.component";
import { loadStorage } from "@/services/login/loginService";

export default function DesktopNavbar() {
  const userInfo = loadStorage();
  const { colorMode } = useColorMode();

  return (
    <>
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        position="relative"
        p="10px"
        h="70px"
        bgColor={colorMode === "light" ? "#FFFFFF" : "RGBA(0, 0, 0, 0.30)"}
      >
        <Flex alignItems="center" gap="5px">
          <Image
            src="/images/logoGoatTeamStats.png"
            alt="logo Goat TeamStats"
            h="50px"
          />

          <Text fontWeight={700} fontSize="xl">
            Goat TeamStats
          </Text>
        </Flex>

        <Flex justifyContent="center" alignItems="center" mr="20px">
          <Flex gap="10px" alignItems="center" ml="30px">
            <Flex direction="column">
              <Text color="#666C78" fontWeight="500px" fontSize="16px">
                {userInfo.email}
              </Text>
              <Text
                color="#666C78"
                fontWeight="700px"
                textAlign="right"
                fontSize="14px"
              >
                Administrador
              </Text>
            </Flex>
            <Avatar size="sm" />

            <ColorModeButton />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
