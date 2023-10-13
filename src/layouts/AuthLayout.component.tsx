import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} w="100%" m="0 auto">
      {/* Bg Image */}
      <GridItem
        display={{ base: "none", md: "block" }}
        position="sticky"
        top="0px"
        w="100%"
        m="0 auto"
        h="100vh"
        bgImage={"/images/loginBanner.webp"}
        bgColor="green"
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
      ></GridItem>

      {/* login or registration content */}
      <GridItem w="100%" m="0 auto">
        <Box w="90%" m="0 auto">
          {children}
        </Box>
      </GridItem>
    </Grid>
  );
}
