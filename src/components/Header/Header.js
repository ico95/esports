import { Box, Button, Flex, HStack, Icon } from "@chakra-ui/react";
import { IoLogoGameControllerB } from "react-icons/io";
import { useViewContext } from "../contexts/viewContext";

let Header = () => {
  const { viewMode, updateViewMode } = useViewContext();
  let clickHandler = () => {
    viewMode === "default" ? updateViewMode("sorted") : updateViewMode("default");
  };

  return (
    <>
      <Box bg="#213951" color="white">
        <Flex
          h={12}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={4}
          py={7}
        >
          <HStack spacing={3} alignItems={"center"}>
            <Icon as={IoLogoGameControllerB} />
            <Box fontSize={"18px"} fontWeight="bold">
              Esports
            </Box>
            <Button colorScheme="green" onClick={clickHandler}>
              {viewMode === "default" ? "Sort by league" : "Sort by time"}
            </Button>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
