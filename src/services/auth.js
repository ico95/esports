const baseUrl = 'http://localhost:8081';

export const fetchAllMatches = async () => {
    let result = await fetch(`${baseUrl}/matches`);
    let matches = await result.json();

    if (result.ok) {
        console.log(matches);
    } else {
        throw matches.message;
    }
};