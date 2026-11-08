// Event listeners and start logic


//FetchGamesDetailsFunction
export async function fetchGamesDetailsFunction (title = '', maxPrice = 50) {
    const url = new URL( 'https://www.cheapshark.com/api/1.0/deals')
    url.searchParams.append(upperPrice = maxPrice)
    url.searchParams.append(pageSize, 20)



}


//FetchProtonRatingFunction
export async function fetchProtonRatingFunction (steamAppID) {

}