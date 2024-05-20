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

const accounts = [
  { name: "Main Account", balance: "0 BTC", account: "Account #0", icon: "path/to/bitcoin-icon.png" },
  { name: "BCH", balance: "0 BCH", account: "Account #0", icon: "path/to/bch-icon.png" },
  { name: "BTG", balance: "0 BTG", account: "Account #0", icon: "path/to/btg-icon.png" },
  { name: "Dash", balance: "0 DASH", account: "Account #0", icon: "path/to/dash-icon.png" },
  { name: "Doge", balance: "0 DOGE", account: "Account #0", icon: "path/to/doge-icon.png" },
  { name: "ETHER", balance: "0 ETH", account: "Account #0", icon: "path/to/eth-icon.png" },
  { name: "LTC", balance: "0 LTC", account: "Account #0", icon: "path/to/ltc-icon.png" },
];

const Popup = () => {
  const onStart = async function () {
    try {
      // Your logic here
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    onStart();
  }, []);

  return (
    <ChakraProvider>
      <Box className="App">
        <Flex justifyContent="space-between" p={4} bg="gray.200" alignItems="center">
          <SettingsIcon />
          <Image src={logo} alt="logo" boxSize="40px" />
          <RepeatIcon />
        </Flex>
        <VStack spacing={4} mt={4}>
          {accounts.map((account, index) => (
            <Flex
              key={index}
              justifyContent="space-between"
              alignItems="center"
              w="100%"
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              bg="white"
              boxShadow="sm"
            >
              <HStack>
                <Avatar src={account.icon} size="sm" />
                <Box>
                  <Text fontWeight="bold">{account.name}</Text>
                  <Text fontSize="sm">{account.balance}</Text>
                </Box>
              </HStack>
              <HStack>
                <Text fontSize="sm" color="gray.500">
                  {account.account}
                </Text>
                <ChevronRightIcon />
              </HStack>
            </Flex>
          ))}
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
