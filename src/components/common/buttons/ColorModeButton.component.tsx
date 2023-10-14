import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import React from "react";

export default function ColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <Button
        onClick={toggleColorMode}
        variant="ghost"
        px="5px"
        _hover={{ bgColor: "none" }}
        _active={{ bgColor: "none" }}
        aria-label="colorChange"
      >
        {colorMode === "light" ? (
          <MoonIcon w="18px" h={8} />
        ) : (
          <SunIcon w="18px" h={8} />
        )}
      </Button>
    </Box>
  );
}
