function initWithKey(encryptionKey, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AccountManagerPlugin', 'initWithKey', [encryptionKey]);
}

function addAccount(userName, password, accountType, group, userData, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AccountManagerPlugin', 'addAccount', [userName, password, accountType, group, userData]);
};

// For iOS remove all data from keychain. For Android remove all account
function removeAccount(accountType, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AccountManagerPlugin', 'removeAccount', [accountType]);
};

// For iOS only remove user account and password. For Android remove all account
function removeUserPassword(accountType, group, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AccountManagerPlugin', 'removeUserPassword', [accountType, group]);
};

function getUserAccount(accountType, group, returnKey, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AccountManagerPlugin', 'getUserAccount', [accountType, group, returnKey]);
};

function getPassword(accountType, group, key, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AccountManagerPlugin', 'getPassword', [accountType, group, key]);
};

function getDataFromKey(accountType, group, key, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AccountManagerPlugin', 'getDataFromKey', [accountType, group, key]);
};

function setUserData(accountType, group, data, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AccountManagerPlugin', 'setUserData', [accountType, group, data]);
};

function changePassword(accountType, group, newPassword, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AccountManagerPlugin', 'changePassword', [accountType, group, newPassword]);
};

function changePasswordToCero(accountType, group, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'AccountManagerPlugin', 'changePassword', [accountType, group, "0000"]);
};