export const fetchAllMatches = (matchData) => {
  let events = matchData.XmlSports.Sport[0].Event;
  let eventData = [];
  let currentEventData = {};
  let currentMatches = [];
  let currentMatchData = {};

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
      currentMatchData.startDate = game["$"]["StartDate"];
      currentMatchData.matchBetFirstTeam =
        game["Bet"][0]["Odd"][0]["$"]["Value"] || "X";
      currentMatchData.matchBetSecondTeam =
        game["Bet"][0]["Odd"][0]["$"]["Value"] || "X";
      currentMatches.push(currentMatchData);
    });

    currentEventData.matches = currentMatches;
    eventData.push(currentEventData);
  });

  console.log(eventData);
  return eventData;
};

export const groupMatchesByEvent = (matchData) => {
  let data = [...matchData];
  let sortedData = [];
  data.reduce((prev, curr) => {
    let currentEventName = curr.eventName.split(", ");
    let currentGame = currentEventName[0];
    let currentEvent = currentEventName[1];
    let found = sortedData.find((el) => el.gameName === currentGame);

    found
      ? found.matches.push([{eventName: currentEvent, eventMatches: curr.matches}])
      : sortedData.push({ gameName: currentGame, matches: [{eventName: currentEvent, eventMatches: curr.matches}] });
  });
  console.log('Sorted');
  console.log(sortedData);
};
