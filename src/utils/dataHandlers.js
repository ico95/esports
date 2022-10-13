import * as dateConverter from "../utils/dateConverter";

export const groupMatchesByDate = (matchData) => {
  let events = matchData.XmlSports.Sport[0].Event;
  let eventData = [];
  let currentEventData = {};
  let currentMatches = [];
  let currentMatchData = {};
  let matchDate = "";

  events.forEach((match) => {
    currentEventData = {};
    currentMatches = [];
    currentMatchData = {};

    currentEventData.eventName = match["$"]["Name"];
    currentEventData.eventId = match["$"]["ID"];

    match["Match"].forEach((game) => {
      currentMatchData = {};
      currentMatchData.matchName = game["$"]["Name"];
      currentMatchData.matchId = game["$"]["ID"];
      matchDate = game["$"]["StartDate"];
      currentMatchData.startDate = dateConverter.convertDate(matchDate);
      currentMatchData.matchBetFirstTeam =
        game["Bet"][0]["Odd"][0]["$"]["Value"] || "X";
      currentMatchData.matchBetSecondTeam =
        game["Bet"][0]["Odd"][0]["$"]["Value"] || "X";
      currentMatches.push(currentMatchData);
    });

    currentEventData.matches = currentMatches;
    eventData.push(currentEventData);
  });

  return eventData;
};

export const groupMatchesByEvent = (matchData) => {
  let sortedData = [];
  matchData.forEach((match) => {
    let currentEventName = match.eventName.split(", ");
    let currentGame = currentEventName[0];
    let currentEvent = currentEventName[1];
    let found = sortedData.find((el) => el.gameName === currentGame);

    found
      ? found.matches.push({
          eventName: currentEvent,
          eventId: match.eventId,
          eventMatches: match.matches,
        })
      : sortedData.push({
          gameName: currentGame,
          matches: [
            {
              eventName: currentEvent,
              eventId: match.eventId,
              eventMatches: match.matches,
            },
          ],
        });
  });

  return sortedData;
};
