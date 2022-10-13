import { useEffect, useState } from "react";
import {
  HStack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

import * as dataApi from '../../lib/api';

let DefaultView = () => {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    dataApi.fetchAllMatches().then(data => setEventData(data.defaultData));
  }, []);

  return (
    <TableContainer>
      <Table variant="simple">
        {eventData &&
          eventData.map((eventItem) => (
            <>
              <Thead>
                <Tr bg="#E1E1E1" key={eventItem.eventId}>
                  <Th>{eventItem.eventName}</Th>
                  <Th>1</Th>
                  <Th>X</Th>
                  <Th>2</Th>
                </Tr>
              </Thead>
              <Tbody>
                {eventItem.matches.map((match) => (
                  <Tr key={match.matchId}>
                    <Td>
                      <HStack spacing='64px'>
                      <Text fontWeight="bold">
                        {match.startDate}
                      </Text>
                      <Text>
                        {match.matchName}
                      </Text>
                      </HStack>
                    </Td>
                    <Td color="blue">{match.matchBetFirstTeam}</Td>
                    <Td></Td>
                    <Td color="blue">{match.matchBetSecondTeam}</Td>
                  </Tr>
                ))}
              </Tbody>
            </>
          ))}
      </Table>
    </TableContainer>
  );
};

export default DefaultView;
