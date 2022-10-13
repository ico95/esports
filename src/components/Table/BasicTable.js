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
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/matches")
      .then((response) => response.json())
      .then((data) => {
        let convertedData = dataService.fetchAllMatches(data);
        setEventData(convertedData);
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
                  <Th>1</Th>
                </Tr>
              </Thead>
              <Tbody>
                {eventItem.matches.forEach((match) => {
                  <Tr key={match.matchId}>
                    <Td>
                      {match.startDate} {match.matchName}
                    </Td>
                    <Td>{eventItem.matchBetFirstTeam}</Td>
                    <Td>X</Td>
                    <Td>{eventItem.matchBetSecondTeam}</Td>
                  </Tr>;
                })}
              </Tbody>
            </>
          ))}
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
