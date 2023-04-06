# Using this plugin for capacitor

## Install
npm install https://github.com/CapelaA10/cordova-plugin-kunder-accountmanager/tree/master 

## Sync
npx cap sync

## angular.json
- Copy the file "AccountManagerGlobal.js" to "src/assets" in the angular project
- Add this to the scrips array (both places) the script "AccountManagerGlobal.js"

## Android

- Start to put a drawable in android res folder with the name "acm_icon" so the plugin can identify what to use in the account manager section
- Also create a string in the strings.xml file with the name "authLabel" this way the plugin knows the name of the app to show in AccountManager settings in android
- Add this to the android manifest:
"            
<uses-permission android:name="android.permission.AUTHENTICATE_ACCOUNTS"></uses-permission>
<uses-permission android:name="android.permission.GET_ACCOUNTS"></uses-permission>
<uses-permission android:name="android.permission.MANAGE_ACCOUNTS" />
"
- DO NOT FORGET TO ASK IN RUN TIME FOR THE USER PERMISSION

## iOS
- TO BE DONE 

## In your TYPESCRIPT files
- Add at the top of the file function name like:
"declare var initWithKey: any;"  -> Replace initWithKey the function name you want to use 
- Use the function in other parts for example:
"
ngOnInit() {
    console.log("done test");
    initWithKey(
        "pass",
        () => {
            console.log("done");
        },
        (message: String) => {
            console.log("fail");
        }
    );
}
"


## Methods

- initWithKey: register the encryptionKey for AES encryption. It must be called before other Account Manager methods
- registerAccount: register an user in Account Manager
- removeAccount: remove an account from Account Manager (Android) and remove all data from keychain (iOS)
- getUserAccount: returns an String with account name if account exist
- getPassword: returns password if account exist
- getDataFromKey: returns data from specified key
- setUserData: set object with information into Account Manager or Keychain
- setPassword: update account password
- resetPassword: update account password with String "0000"

## Key Parameters

- accountType: the same account type unique identifier set in config.xml file
- group (Nullable): group identifier. Only for iOS shared keychain
- data: key-value object
- encryptionKey: the key used to encrypt/decrypt key and value data. 

## Notes

- You can not delete user data from Account Manager. Use "setUserData" to change value to empty.
- You can delete account from Account Manager.
- removeAccount remove all keychain data from your app.
- You can not set user data to Account Manager if it doesn't have an account for your identifier.
- You need to call initWithKey method before other Account Manager method, otherwise it will not work (Android only).

