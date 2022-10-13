import { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import * as dataService from "../../services/dataService";

let BasicTable = () => {
  const baseUrl = "http://localhost:8081";
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/matches`)
      .then((response) => response.json())
      .then((data) => {
        let convertedData = dataService.fetchAllMatches(data);
        setEventData(convertedData);
        // dataService.groupMatchesByEvent(convertedData)
      })
      .catch((err) => {
        console.log(err);
      });
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
                    <Td fontWeight="bold">
                      {match.startDate} {match.matchName}
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

export default BasicTable;
