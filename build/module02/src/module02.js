"use strict";
//usando el enumerador
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 5] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 6] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 7] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(ContractStatus[employeeStatus]);
