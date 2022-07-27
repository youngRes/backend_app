//=============================================================================
//  RMMVNodeP1.js
//=============================================================================

/*:
* @author PluginDev
* @plugindesc A plugin to read and write files using Node.js
*
*/
(function () {

    //Setup function in case we want to split up our code further  
    function setup() {
  //=============================================================================
  //  MVNodeFS
  //=============================================================================    
      function MVNodeFS() {
  
      }
  
      MVNodeFS.fs = require("fs");
  
      //Wrapper for Node.js writeFileSync
      MVNodeFS.writeFile = function (filePath, filename, event, parameterName, data) {
        filePath = this.createPath("./" + filePath +"/");
        if (MVNodeFS.fs.existsSync(filePath + filename)) {
          //file exists
          console.log("File Exists")
          //let rawdata = MVNodeFS.fs.readFileSync(filePath + filename, 'utf8');
          //console.log(rawdata)
          console.log(filePath + filename)
          var json = MVNodeFS.fs.readFileSync('./save/AAA.json', 'utf8')
          console.log(json)
          var obj = JSON.parse(json);
        } else {
          console.log("File does not Exists")
          var obj = {
            player_data : {}
          };
        }

        console.log(obj)
        if (event in obj.player_data) {
          obj.player_data[event][parameterName] = data
        } else {
          obj.player_data[event] = {}
          obj.player_data[event][parameterName] = data
          //obj.player_data[event] = {id:parameterName, value:data}
        }
        
        var json = JSON.stringify(obj);
        console.log(json)
        MVNodeFS.fs.writeFile(filePath + filename, json, 'utf8');
        //this.fs.writeFileSync(filePath + filename, data);
      };
  
      //Wrapper for Node.js readFileSync
      MVNodeFS.readFile = function (filePath, filename) {
        filePath = this.createPath("/" + filePath +"/");
        console.log("Read File:", filename);
        //Returning the file we read using utf8 encoding; this means it will be in text
        return this.fs.readFileSync(filePath + filename, "utf8");
      };
  
      //Method for creating the proper file path from the relative file path
      MVNodeFS.createPath = function (relativePath) {
        //Checks if MV is in dev mode, or production, then decides the appropriate path
        relativePath = (Utils.isNwjs() && Utils.isOptionValid("test")) ? relativePath : "/www/" + relativePath;
        //Creates the path using the location pathname of the window and replacing certain characters
        var path = window.location.pathname.replace(/(\/www|)\/[^\/]*$/, relativePath);
        if(path.match(/^\/([A-Z]\:)/)) {
          path = path.slice(1);
        }
        //Decode URI component and finally return the path
        path = decodeURIComponent(path);
        console.log(path)
        return path;
      };
      
      //Export Our Class so it can be used anywhere
      window.MVNodeFS = MVNodeFS;
    }
  
    //Execute setup function to run our code after setup
    setup();
  })();