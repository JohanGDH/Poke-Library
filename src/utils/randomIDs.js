
const randomsID = async (min, max, large) => {

    if((max - min + 1) < large) {
        return "Parámetros inválidos";
    }

    let IDs = [];

    while(IDs.length < large) {
        let randomID =  Math.floor((Math.random()*(max - min + 1)) + min);
        if(!IDs.includes(randomID)) {
            IDs.push(randomID);
        }
    }    
    if(IDs.length = large) return IDs;         
}

export default randomsID;