import { useEffect, useState } from "react";
import {
  HStack,
  Flex,
  Text,
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import * as dataApi from "../../lib/api";

let EventView = () => {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    dataApi.fetchAllMatches().then((data) => setEventData(data.sortedData));
  }, []);

  return (
    <TableContainer>
      <Table variant="simple">
        {eventData &&
          eventData.map((eventItem) => (
            <>
              <Box
                bg="#213951"
                color="white"
                fontSize={"18px"}
                fontWeight="bold"
                w="135%"
              >
                <Flex h={12} alignItems={'center'} justifyContent={'space-between'} px={4}>
                {eventItem.gameName}
                </Flex>
              </Box>
              {eventItem.matches.map((match) => (
                <>
                  <Thead>
                    <Tr bg="#E1E1E1" key={match.eventId}>
                      <Th>{match.eventName}</Th>
                      <Th>1</Th>
                      <Th>X</Th>
                      <Th>2</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {match.eventMatches.map((currentMatch) => (
                      <Tr key={currentMatch.matchId}>
                        <Td>
                          <HStack spacing="64px">
                            <Text fontWeight="bold">
                              {currentMatch.startDate}
                            </Text>
                            <Text>{currentMatch.matchName}</Text>
                          </HStack>
                        </Td>
                        <Td color="blue">{currentMatch.matchBetFirstTeam}</Td>
                        <Td></Td>
                        <Td color="blue">{currentMatch.matchBetSecondTeam}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </>
              ))}
            </>
          ))}
      </Table>
    </TableContainer>
  );
};

export default EventView;
