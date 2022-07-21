//=============================================================================
// simpleAjax.js
//=============================================================================/*:

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get playerName Variable
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

getNameFromDB = function(callback) {
        
    var url = $config.APIURL.urlSavedVariables

    var gameCode = $config.basic.gameCode
    var version = $config.basic.version
    var studentCode = $userName

    var returned_data;

    var basicAuthName = $config.basicAuth.username
    var basicAuthPass = $config.basicAuth.password

    var xhttpName = new XMLHttpRequest()

    xhttpName.open("GET", url + "?studentCode=" + studentCode + "&gameCode=" + gameCode + "&version=" + version + "&variableName=playerName", true)
    xhttpName.setRequestHeader("Authorization", "Basic " + btoa(basicAuthName + ":" + basicAuthPass))
    xhttpName.send()

    xhttpName.onreadystatechange = function () {
        if (xhttpName.readyState == 4){
            if (xhttpName.status == 200) {
                returned_data = JSON.parse(xhttpName.responseText)
                //fire your callback function
                callback.apply(this,[returned_data.value])
            }else{
                console.log('Error Get Sex. Status:'+xhttpName.status+'. Message: '+xhttpName.responseText)
                setTimeout(function() {
                    getNameFromDB(callback); //Retry 5 secs later.
                }, 5000);
            }
        }
    };
};

assignName = function(returned_data) {

    $playerName = returned_data;
};

getName = function(callback_1 = getNameFromDB, callback_2 = assignName) {

    callback_1(callback_2);

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get sex Variable
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

getSexFromDB = function(callback) {
        
    var url = $config.APIURL.urlSavedVariables

    var gameCode = $config.basic.gameCode
    var version = $config.basic.version
    var studentCode = $userName

    var returned_data;

    var basicAuthName = $config.basicAuth.username
    var basicAuthPass = $config.basicAuth.password

    var xhttpSex = new XMLHttpRequest()

    xhttpSex.open("GET", url + "?studentCode=" + studentCode + "&gameCode=" + gameCode + "&version=" + version + "&variableName=sex", true)
    xhttpSex.setRequestHeader("Authorization", "Basic " + btoa(basicAuthName + ":" + basicAuthPass))
    xhttpSex.send()

    xhttpSex.onreadystatechange = function () {
        if (xhttpSex.readyState == 4){
            if (xhttpSex.status == 200) {
                returned_data = JSON.parse(xhttpSex.responseText)
                //fire your callback function
                callback.apply(this,[returned_data.value])
            }else{
		        console.log('Error Get Sex. Status:'+xhttpSex.status+'. Message: '+xhttpSex.responseText)
                setTimeout(function() {
                    getSexFromDB(callback); //Retry 5 secs later.
                }, 5000);
            }
        }
    };
};

assignSex = function(returned_data) {

    $playerSex = returned_data;

};

getSex = function(callback_1 = getSexFromDB, callback_2 = assignSex) {

    callback_1(callback_2)

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Variable
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

getVariableFromDB = function(varName, varID, callback) {
        
    var url = $config.APIURL.urlSavedVariables

    var gameCode = $config.basic.gameCode
    var version = $config.basic.version
    var studentCode = $userName

    var returned_data;

    var basicAuthName = $config.basicAuth.username
    var basicAuthPass = $config.basicAuth.password

    var xhttpVar = new XMLHttpRequest()

    xhttpVar.open("GET", url + "?studentCode=" + studentCode + "&gameCode=" + gameCode + "&version=" + version + "&variableName=" + varName, true)
    xhttpVar.setRequestHeader("Authorization", "Basic " + btoa(basicAuthName + ":" + basicAuthPass))
    xhttpVar.send()

    xhttpVar.onreadystatechange = function () {
        if (xhttpVar.readyState == 4){
            if (xhttpVar.status == 200) {
                returned_data = JSON.parse(xhttpVar.responseText)
                //fire your callback function
                callback.apply(this,[returned_data.value, varID])
            }else{
                throw new Error('Error Get Variable. Status:'+xhttpVar.status+'. Message: '+xhttpVar.responseText+'. URL: '+ url + "?studentCode=" + studentCode + "&gameCode=" + gameCode + "&version=" + version + "&variableName=" + varName)
            }
        }
    };
};

assignVariable = function(returned_data, varID) {
    
    $gameVariables.setValue(varID, returned_data)

};

getVariable = function(varName, varID, callback_1 = getVariableFromDB, callback_2 = assignVariable) {

    callback_1(varName, varID, callback_2)

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Post Variable
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

postSavedVariable = function(variableName, value) {

    var url = $config.APIURL.urlSavedVariables

    var gameCode = $config.basic.gameCode
    var version = $config.basic.version
    var studentCode = $userName

    var retrievedJSONData = ""

    var basicAuthName = $config.basicAuth.username
    var basicAuthPass = $config.basicAuth.password

    // create a new Ajax request 
    var xhttpPostVar = new XMLHttpRequest() 
    
    xhttpPostVar.open("POST", url + "?studentCode=" + studentCode + "&gameCode=" + gameCode + "&version=" + version + "&variableName=" + variableName + "&value=" + value, true)
    xhttpPostVar.setRequestHeader("Authorization", "Basic " + btoa(basicAuthName + ":" + basicAuthPass))
    xhttpPostVar.send()

    // This function is performed when a message is returned from the Ajax request 
    xhttpPostVar.onreadystatechange = function() {   
        if (xhttpPostVar.readyState == 4){
            if (xhttpPostVar.status == 200) {
                console.log('POST Variable Success: ' + xhttpPostVar.responseText)
            }  else {
                console.log('POST Variable Error. Status:'+xhttpPostVar.status+'. Message: '+xhttpPostVar.responseText)
                throw new Error('Error Post Variable. Status:'+xhttpPostVar.status+'. Message: '+xhttpPostVar.responseText)
            }
        }
    } 

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Store Decision
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

storeDecision = function(eventCode, key, value) {

    var url = $config.APIURL.urlStoreDecision

    var gameCode = $config.basic.gameCode
    var version = $config.basic.version
    var studentCode = $userName

    var basicAuthName = $config.basicAuth.username
    var basicAuthPass = $config.basicAuth.password

    // create a new Ajax request 
    var xhttpPostDecision = new XMLHttpRequest()
    // This function is performed when a message is returned from the Ajax request 
    xhttpPostDecision.onreadystatechange = function() {   
        if (xhttpPostDecision.readyState == 4){
            if (xhttpPostDecision.status == 200) {
                console.log('Store Decision Success: ' + xhttpPostDecision.responseText)
            } else {
                console.log('Store Decision Error. Status:'+xhttpPostDecision.status+'. Message: '+xhttpPostDecision.responseText);
                setTimeout(function() {
                    storeDecision(eventCode, key, value); //Retry 5 secs later.
                }, 5000);
                //throw new Error('Error Store Decision. Status:'+xhttpPostDecision.status+'. Message: '+xhttpPostDecision.responseText)
            }
        }
    }

    var decision = {"decision": [{"key": key,"value": value}]};

    xhttpPostDecision.open("POST", url + "?studentCode=" + studentCode + "&eventCode=" + eventCode, true)
    xhttpPostDecision.setRequestHeader("Authorization", "Basic " + btoa(basicAuthName + ":" + basicAuthPass))
    xhttpPostDecision.setRequestHeader("decision", JSON.stringify(decision))

    //Send the proper header information along with the request
    xhttpPostDecision.send()

    
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get Chapter Start Scene
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

update = function(chapterCode, callback, callerWindow) {
        
    var url = $config.APIURL.urlStartScene

    var gameCode = $config.basic.gameCode
    var version = $config.basic.version

    var returned_data;

    var basicAuthName = $config.basicAuth.username
    var basicAuthPass = $config.basicAuth.password

    var xhttp = new XMLHttpRequest()
    
    xhttp.open("GET", url + "?gameCode=" + gameCode + "&version=" + version + "&chapterCode=" + chapterCode, true)
    xhttp.setRequestHeader("Authorization", "Basic " + btoa(basicAuthName + ":" + basicAuthPass))
    xhttp.send()

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4){
            if (xhttp.status == 200) {
                returned_data = JSON.parse(xhttp.responseText)
                //fire your callback function
                callback.apply(this,[returned_data.value])
            } else if (xhttp.status == 404) {
                //Dialog Box NOT OK
                var _messageWindow = new Window_Help ();
                _messageWindow.setText("El código del capítulo no ha sido correcto.");
                SoundManager.playBuzzer();
                callerWindow.addWindow(_messageWindow);
            } else {
                //Not connetion
                var _messageWindow = new Window_Help ();
                _messageWindow.setText("No se ha podido establecer la conexión con el servidor.");
                callerWindow.addWindow(_messageWindow);
                SoundManager.playBuzzer();
                setTimeout(function() {
                    SceneManager.goto(Scene_Title);
                  }, 5000);
                console.log('Start chapter. Status:'+ xhttp.status+'. Message: '+ xhttp.responseText);
            }
        }
    };

};

performSomeAction = function(returned_data) {

    $loadMap = returned_data['startScene']
    $startX = returned_data['startX']
    $startY = returned_data['startY']
    if ($loadMap){
        DataManager.setupNewGame()
		if ($playerSex==="female"){
			$gameActors.actor(1)._faceName = "Protagonista_chica"
			$gameActors.actor(1)._characterName = "Protagonista_femenina"
		}
        SceneManager.goto(Load_Scene_Map)
    } else{
        SceneManager.goto(Scene_Title)
    }
};

getChapterStartScene = function(chapterCode, callerWindow, callback_1 = update, callback_2 = performSomeAction) {

    callback_1(chapterCode, callback_2, callerWindow);

    return $ajaxData;

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JES ADD: user Exists
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

userExistInDB = function(callerWindow) {
        
    var url = $config.APIURL.urlCheckStudentCode

    var studentCode = $userName;

    var basicAuthName = $config.basicAuth.username
    var basicAuthPass = $config.basicAuth.password

    var xhttpUserExist = new XMLHttpRequest();

    xhttpUserExist.open("GET", url + "?studentCode=" + studentCode, true);
    xhttpUserExist.setRequestHeader("Authorization", "Basic " + btoa(basicAuthName + ":" + basicAuthPass));
    xhttpUserExist.send();

    xhttpUserExist.onreadystatechange = function () {
        if (xhttpUserExist.readyState == 4){
            if (xhttpUserExist.status == 200) {
                //Dialog Box OK
                var _messageWindow = new Window_Help ();
                _messageWindow.setText("El usuario " + studentCode + " es correcto.",0,0);
                _messageWindow.refresh(); 
                callerWindow.addWindow(_messageWindow);
                setTimeout(function() {
                    SceneManager.goto(Scene_Title);
                  }, 1000);
            } else if (xhttpUserExist.status == 404) {
                //Dialog Box NOT OK
                var _messageWindow = new Window_Help ();
                _messageWindow.setText("El usuario introducido no existe.");
                SoundManager.playBuzzer();
                callerWindow.addWindow(_messageWindow);
            } else {
                //Not connetion
                var _messageWindow = new Window_Help ();
                _messageWindow.setText("No se ha podido establecer la conexión con el servidor.");
                callerWindow.addWindow(_messageWindow);
                SoundManager.playBuzzer();
                $userName = null; //Needed, because we didn't achieve the connection and we will restart the TitleScene.
                setTimeout(function() {
                    SceneManager.goto(Scene_Title);
                  }, 5000);
                console.log('Check user exist. Status:'+ xhttpUserExist.status+'. Message: '+ xhttpUserExist.responseText);
            }
        }
    };
};

// open the xhttp connection and send it 
// this function is sync not async, such that the game will wait for the 
// response. Change false to true and the code will run while the game
// does other things, so you don't have to pause for non-important things
// where the player doesn't need a response to continue, such as merely
// updating the online players list.  xhttp.open("GET", parameters['URL'] + "?" + get_params, false);  xhttp.send();
// return the retrieved text  return retrievedData;};
