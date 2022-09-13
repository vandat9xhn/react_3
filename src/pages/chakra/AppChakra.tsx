import * as React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, useStyleConfig } from "@chakra-ui/react";

//
export interface AppChakraProps {}

//
function AppChakra({}: AppChakraProps) {
  //
  // const { colorMode, toggleColorMode } = useColorMode();

  const styles = useStyleConfig("BtnChakra", { variant: "outline" });

  //
  return (
    <div>
      <div>
        <Box __css={styles} />
      </div>
    </div>
  );
}

export default AppChakra;
