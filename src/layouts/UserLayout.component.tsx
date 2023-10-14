import DesktopNavbar from "@/shared/navbar/DesktopNavbar.component";
import MobileNavbar from "@/shared/navbar/MobileNavbar.component";
import SideBar from "@/shared/sidebar/SideBar.component";
import {
  Box,
  Grid,
  GridItem,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [viewport] = useMediaQuery("(min-width: 768px)");
  const { colorMode } = useColorMode();

  return (
    <Grid
      templateColumns={{ base: "1fr", md: "80px 1fr" }}
      w="100%"
      m="0 auto"
      h="100vh"
    >
      {/* Mini sidebar */}
      <GridItem
        display={{ base: "none", md: "block" }}
        position="sticky"
        top="0px"
        w="100%"
        m="0 auto"
        h="100vh"
        bgColor={colorMode === "light" ? "#FFFFFF" : "RGBA(0, 0, 0, 0.30)"}
      >
        <SideBar />
      </GridItem>

      {/* Page content */}
      <GridItem w={{ base: "100%", md: "100%" }} m="0 auto" overflow="auto">
        {viewport ? <DesktopNavbar /> : <MobileNavbar />}

        <Box w={{ base: "100%" }}>{children}</Box>
      </GridItem>
    </Grid>
  );
}
