import React, { useEffect } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Image,
  Text,
  IconButton,
  Avatar,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { ChevronRightIcon, SettingsIcon, RepeatIcon } from "@chakra-ui/icons";
import logo from "@assets/img/Pioneer.png";
import "@pages/popup/Popup.css";
import { useOnStartApp } from "./onStart";
import { usePioneer } from "@coinmasters/pioneer-react";
import { Pioneer, Assets } from "@coinmasters/pioneer-lib";

const Popup = () => {
  const onStartApp = useOnStartApp();
  const { state } = usePioneer();
  const { app } = state;

  useEffect(() => {
    onStartApp();
  }, []);

  return (
    <ChakraProvider>
      <Box className="App">
        <Flex
          justifyContent="space-between"
          p={4}
          bg="gray.200"
          alignItems="center"
        >
          <SettingsIcon />
          <Pioneer usePioneer={usePioneer}></Pioneer>
          <RepeatIcon />
        </Flex>
        <VStack spacing={4} mt={4}>
          <Assets usePioneer={usePioneer}></Assets>
        </VStack>
        <Flex justifyContent="center" mt={4}>
          <Text fontSize="sm" color="gray.500">
            Test connected
          </Text>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Popup;
