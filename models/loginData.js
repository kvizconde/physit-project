let db = require('../util/database');

// TODO: @Daniel - Define database functions here

function addPhysioAccount(physioInfo) {
    db.execute("INSERT into physiotherapist(physioID, password, firstname, lastname) values ('
    + physioInfo.physioID + "', '"
    + physioInfo.password + "', '"
    + physioInfo.firstname + "', '"
    + physioInfo.lastname + "')");
    
}

function getSpecificPhysio(physioID) {
    return db.execute("SELECT * FROM physit-project.physiotherapist WHERE physioID = " + physioID);
}

module.exports = {
    addPhysios : addPhysioAccount,
    getSpecificPhysio: getSpecificPhysio
}
