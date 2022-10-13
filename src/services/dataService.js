// const baseUrl = 'http://localhost:8081';

export const fetchAllMatches = (matchData) => {    
    // try {
        // let result = await fetch(`${baseUrl}/matches`);
        // let matches = await result.json();

        let events = matchData.XmlSports.Sport[0].Event;
        let eventData = [];
        let currentEventData = {};
        let currentMatches = [];
        let currentMatchData = {};

        events.forEach(match => {
            currentEventData = {};
            currentMatches = [];
            currentMatchData = {};

            currentEventData.eventName = match["$"]["Name"];
            currentEventData.eventId = match["$"]["ID"];

            match["Match"].forEach(game => {
                currentMatchData = {};
                currentMatchData.matchName = game["$"]["Name"];
                currentMatchData.matchId = game["$"]["ID"];
                currentMatchData.startDate = game["$"]["StartDate"];
                currentMatchData.matchBetFirstTeam = game["Bet"][0]["Odd"][0]["$"]["Value"] || "X";
                currentMatchData.matchBetSecondTeam = game["Bet"][0]["Odd"][0]["$"]["Value"] || "X";
                currentMatches.push(currentMatchData);
            })

            currentEventData.matches = currentMatches;
            eventData.push(currentEventData);
        });

        console.log(eventData);
        // return eventData;
        
    // } catch (err) {
    //     console.error(err);
    // }
};

export const groupMatchesByEvent = (matchData) => {

};