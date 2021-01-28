const USERSTATS = 'USERSTATS';
export function getUserData() {
    let stats = JSON.parse(localStorage.getItem());

    if (!stats) {
        stats = [];
        localStorage.setItem(USERSTATS, JSON.stringify(stats));
    }

    return stats;
}

//Write setPokeStats function (this function adds new stats(seen/caught) to local storage)

export function setUserData(newStats) {
    localStorage.setItem(USERSTATS, JSON.stringify(newStats));
}
