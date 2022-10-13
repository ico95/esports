import * as dataHandler from '../utils/dataHandlers';

const baseUrl = 'http://localhost:8081';

export const fetchAllMatches = async () => {
    const response = await fetch(`${baseUrl}/matches`);
    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || 'Could not fetch any data.');
    }

    let defaultData = [];
    let sortedData = [];

    defaultData = [...dataHandler.groupMatchesByDate(data)];
    sortedData = [...dataHandler.groupMatchesByEvent(defaultData)];

    return {defaultData, sortedData};
};