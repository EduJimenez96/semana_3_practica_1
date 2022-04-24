const MissionCommander = require('./app/missionCommander');
const carlo = new MissionCommander("Carlo")
const eduardo = new MissionCommander("Eduardo")
const david = new MissionCommander("David")
console.log(carlo.name + "\n" + eduardo.name + "\n" + david.name)
