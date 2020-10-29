//=============================================================================
// varTextInput.js
//=============================================================================

/*:
*
*@plugindesc Variable Text input.
*v1.0
*
*@author N1nj4R4bb1D
*@help
*
*@param DefaultVariableID
*@desc Default variable's ID to store input text.
*@default 1
*
*@param DefaultMaxTextLength
*@desc Default maximum length of input text.
*@default 30
*
*/

(function () {

var parameters = PluginManager.parameters("varTextInput");
var _DefaultVariableID = Number(parameters["DefaultVariableID"] || 1);
var _DefaultMaxTextLength = Number(parameters["DefaultMaxTextLength"] || 30);

var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === "varTextInput") {
      SceneManager.push(Scene_Text);
      switch (args.length) {
        case 2:
          SceneManager.prepareNextScene(Number(args[0]), Number(args[1]));
          break;
        case 1:
          SceneManager.prepareNextScene(Number(args[0]), _DefaultMaxTextLength);
          break;
        case 0:
          SceneManager.prepareNextScene(_DefaultVariableID, _DefaultMaxTextLength);
          break;
      }
    }
};

//-----------------------------------------------------------------------------
// Scene_Text
//
// The scene class of the text input screen.

function Scene_Text() {
    this.initialize.apply(this, arguments);
}

Scene_Text.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Text.prototype.constructor = Scene_Text;

Scene_Text.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_Text.prototype.prepare = function(varId, maxLength) {
    this._varId = varId;
    this._maxLength = maxLength;
};

Scene_Text.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this._text = ((typeof $gameVariables.value(this._varId) != "string") ? "" : $gameVariables.value(this._varId));
    this.createEditWindow();
    this.createInputWindow();
};

Scene_Text.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    this._editWindow.refresh();
};

Scene_Text.prototype.createEditWindow = function() {
    this._editWindow = new Window_TextEdit(this._text, this._maxLength);
    this.addWindow(this._editWindow);
};

Scene_Text.prototype.createInputWindow = function() {
    this._inputWindow = new Window_TextInput(this._editWindow);
    this._inputWindow.setHandler('ok', this.onInputOk.bind(this));
    this.addWindow(this._inputWindow);
};

Scene_Text.prototype.onInputOk = function() {
    this._text = this._editWindow.name();
    $gameVariables.setValue(this._varId, this._text);
    this.popScene();
};

//-----------------------------------------------------------------------------
// Window_TextEdit
//
// The window for editing an variable's text on the name input screen.

function Window_TextEdit() {
    this.initialize.apply(this, arguments);
}

Window_TextEdit.prototype = Object.create(Window_Base.prototype);
Window_TextEdit.prototype.constructor = Window_TextEdit;

Window_TextEdit.prototype.initialize = function(varText, maxLength) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    var x = (Graphics.boxWidth - width) / 2;
    var y = (Graphics.boxHeight - (height + this.fittingHeight(9) + 8)) / 2;
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._text = varText;
    this._index = this._text.length;
    this._maxLength = maxLength;
    this._defaultText = this._text;
    this.deactivate();
    this.refresh();
};

Window_TextEdit.prototype.windowWidth = function() {
    return 480;
};

Window_TextEdit.prototype.windowHeight = function() {
    return this.fittingHeight(4);
};

Window_TextEdit.prototype.name = function() {
    return this._text;
};

Window_TextEdit.prototype.restoreDefault = function() {
    this._text = this._defaultText;
    this._index = this._text.length;
    this.refresh();
    return this._text.length > 0;
};

Window_TextEdit.prototype.add = function(ch) {
    if (this._index < this._maxLength) {
        this._text += ch;
        this._index++;
        this.refresh();
        return true;
    } else {
        return false;
    }
};

Window_TextEdit.prototype.back = function() {
    if (this._index > 0) {
        this._index--;
        this._text = this._text.slice(0, this._index);
        this.refresh();
        return true;
    } else {
        return false;
    }
};

Window_TextEdit.prototype.faceWidth = function() {
    return 144;
};

Window_TextEdit.prototype.charWidth = function() {
    var text = $gameSystem.isJapanese() ? '\uff21' : 'A';
    return this.textWidth(text);
};

Window_TextEdit.prototype.left = function() {
    var nameCenter = this.contentsWidth() / 2;
    var nameWidth = (this._maxLength + 1) * this.charWidth();
    return Math.min(nameCenter - nameWidth / 2, this.contentsWidth() - nameWidth);
};

Window_TextEdit.prototype.itemRect = function(index) {
    return {
        x: this.left() + index * this.charWidth(),
        y: 54,
        width: this.charWidth(),
        height: this.lineHeight()
    };
};

Window_TextEdit.prototype.underlineRect = function(index) {
    var rect = this.itemRect(index);
    rect.x++;
    rect.y += rect.height - 4;
    rect.width -= 2;
    rect.height = 2;
    return rect;
};

Window_TextEdit.prototype.underlineColor = function() {
    return this.normalColor();
};

Window_TextEdit.prototype.drawUnderline = function(index) {
    var rect = this.underlineRect(index);
    var color = this.underlineColor();
    this.contents.paintOpacity = 48;
    this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
    this.contents.paintOpacity = 255;
};

Window_TextEdit.prototype.drawChar = function(index) {
    var rect = this.itemRect(index);
    this.resetTextColor();
    this.drawText(this._text[index] || '', rect.x, rect.y);
};

Window_TextEdit.prototype.refresh = function() {
    this.contents.clear();
    for (var i = 0; i < this._maxLength; i++) {
        this.drawUnderline(i);
    }
    for (var j = 0; j < this._text.length; j++) {
        this.drawChar(j);
    }
    var rect = this.itemRect(this._index);
    this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
};

//-----------------------------------------------------------------------------
// Window_TextInput
//
// The window for selecting text characters on the text input screen.

function Window_TextInput() {
    this.initialize.apply(this, arguments);
}

Window_TextInput.prototype = Object.create(Window_Selectable.prototype);
Window_TextInput.prototype.constructor = Window_TextInput;
Window_TextInput.LATIN1 =
        [ 'A','B','C','D','E',  'a','b','c','d','e',
          'F','G','H','I','J',  'f','g','h','i','j',
          'K','L','M','N','O',  'k','l','m','n','o',
          'P','Q','R','S','T',  'p','q','r','s','t',
          'U','V','W','X','Y',  'u','v','w','x','y',
          'Z','[',']','^','_',  'z','{','}','|','~',
          '0','1','2','3','4',  '!','#','$','%','&',
          '5','6','7','8','9',  '(',')','*','+','-',
          '/','=','@','<','>',  ':',';',' ','Page','OK' ];
Window_TextInput.LATIN2 =
        [ 'Á','É','Í','Ó','Ú',  'á','é','í','ó','ú',
          'À','È','Ì','Ò','Ù',  'à','è','ì','ò','ù',
          'Â','Ê','Î','Ô','Û',  'â','ê','î','ô','û',
          'Ä','Ë','Ï','Ö','Ü',  'ä','ë','ï','ö','ü',
          'Ā','Ē','Ī','Ō','Ū',  'ā','ē','ī','ō','ū',
          'Ã','Å','Æ','Ç','Ð',  'ã','å','æ','ç','ð',
          'Ñ','Õ','Ø','Š','Ŵ',  'ñ','õ','ø','š','ŵ',
          'Ý','Ŷ','Ÿ','Ž','Þ',  'ý','ÿ','ŷ','ž','þ',
          'Ĳ','Œ','ĳ','œ','ß',  '«','»',' ','Page','OK' ];
Window_TextInput.RUSSIA =
        [ 'А','Б','В','Г','Д',  'а','б','в','г','д',
          'Е','Ё','Ж','З','И',  'е','ё','ж','з','и',
          'Й','К','Л','М','Н',  'й','к','л','м','н',
          'О','П','Р','С','Т',  'о','п','р','с','т',
          'У','Ф','Х','Ц','Ч',  'у','ф','х','ц','ч',
          'Ш','Щ','Ъ','Ы','Ь',  'ш','щ','ъ','ы','ь',
          'Э','Ю','Я','^','_',  'э','ю','я','%','&',
          '0','1','2','3','4',  '(',')','*','+','-',
          '5','6','7','8','9',  ':',';',' ','','OK' ];
Window_TextInput.JAPAN1 =
        [ 'あ','い','う','え','お',  'が','ぎ','ぐ','げ','ご',
          'か','き','く','け','こ',  'ざ','じ','ず','ぜ','ぞ',
          'さ','し','す','せ','そ',  'だ','ぢ','づ','で','ど',
          'た','ち','つ','て','と',  'ば','び','ぶ','べ','ぼ',
          'な','に','ぬ','ね','の',  'ぱ','ぴ','ぷ','ぺ','ぽ',
          'は','ひ','ふ','へ','ほ',  'ぁ','ぃ','ぅ','ぇ','ぉ',
          'ま','み','む','め','も',  'っ','ゃ','ゅ','ょ','ゎ',
          'や','ゆ','よ','わ','ん',  'ー','～','・','＝','☆',
          'ら','り','る','れ','ろ',  'ゔ','を','　','カナ','決定' ];
Window_TextInput.JAPAN2 =
        [ 'ア','イ','ウ','エ','オ',  'ガ','ギ','グ','ゲ','ゴ',
          'カ','キ','ク','ケ','コ',  'ザ','ジ','ズ','ゼ','ゾ',
          'サ','シ','ス','セ','ソ',  'ダ','ヂ','ヅ','デ','ド',
          'タ','チ','ツ','テ','ト',  'バ','ビ','ブ','ベ','ボ',
          'ナ','ニ','ヌ','ネ','ノ',  'パ','ピ','プ','ペ','ポ',
          'ハ','ヒ','フ','ヘ','ホ',  'ァ','ィ','ゥ','ェ','ォ',
          'マ','ミ','ム','メ','モ',  'ッ','ャ','ュ','ョ','ヮ',
          'ヤ','ユ','ヨ','ワ','ン',  'ー','～','・','＝','☆',
          'ラ','リ','ル','レ','ロ',  'ヴ','ヲ','　','英数','決定' ];
Window_TextInput.JAPAN3 =
        [ 'Ａ','Ｂ','Ｃ','Ｄ','Ｅ',  'ａ','ｂ','ｃ','ｄ','ｅ',
          'Ｆ','Ｇ','Ｈ','Ｉ','Ｊ',  'ｆ','ｇ','ｈ','ｉ','ｊ',
          'Ｋ','Ｌ','Ｍ','Ｎ','Ｏ',  'ｋ','ｌ','ｍ','ｎ','ｏ',
          'Ｐ','Ｑ','Ｒ','Ｓ','Ｔ',  'ｐ','ｑ','ｒ','ｓ','ｔ',
          'Ｕ','Ｖ','Ｗ','Ｘ','Ｙ',  'ｕ','ｖ','ｗ','ｘ','ｙ',
          'Ｚ','［','］','＾','＿',  'ｚ','｛','｝','｜','～',
          '０','１','２','３','４',  '！','＃','＄','％','＆',
          '５','６','７','８','９',  '（','）','＊','＋','－',
          '／','＝','＠','＜','＞',  '：','；','　','かな','決定' ];

Window_TextInput.prototype.initialize = function(editWindow) {
    var x = editWindow.x;
    var y = editWindow.y + editWindow.height + 8;
    var width = editWindow.width;
    var height = this.windowHeight();
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._editWindow = editWindow;
    this._page = 0;
    this._index = 0;
    this.refresh();
    this.updateCursor();
    this.activate();
};

Window_TextInput.prototype.windowHeight = function() {
    return this.fittingHeight(9);
};

Window_TextInput.prototype.table = function() {
    if ($gameSystem.isJapanese()) {
        return [Window_TextInput.JAPAN1,
                Window_TextInput.JAPAN2,
                Window_TextInput.JAPAN3];
    } else if ($gameSystem.isRussian()) {
        return [Window_TextInput.RUSSIA];
    } else {
        return [Window_TextInput.LATIN1,
                Window_TextInput.LATIN2];
    }
};

Window_TextInput.prototype.maxCols = function() {
    return 10;
};

Window_TextInput.prototype.maxItems = function() {
    return 90;
};

Window_TextInput.prototype.character = function() {
    return this._index < 88 ? this.table()[this._page][this._index] : '';
};

Window_TextInput.prototype.isPageChange = function() {
    return this._index === 88;
};

Window_TextInput.prototype.isOk = function() {
    return this._index === 89;
};

Window_TextInput.prototype.itemRect = function(index) {
    return {
        x: index % 10 * 42 + Math.floor(index % 10 / 5) * 24,
        y: Math.floor(index / 10) * this.lineHeight(),
        width: 42,
        height: this.lineHeight()
    };
};

Window_TextInput.prototype.refresh = function() {
    var table = this.table();
    this.contents.clear();
    this.resetTextColor();
    for (var i = 0; i < 90; i++) {
        var rect = this.itemRect(i);
        rect.x += 3;
        rect.width -= 6;
        this.drawText(table[this._page][i], rect.x, rect.y, rect.width, 'center');
    }
};

Window_TextInput.prototype.updateCursor = function() {
    var rect = this.itemRect(this._index);
    this.setCursorRect(rect.x, rect.y, rect.width, rect.height);
};

Window_TextInput.prototype.isCursorMovable = function() {
    return this.active;
};

Window_TextInput.prototype.cursorDown = function(wrap) {
    if (this._index < 80 || wrap) {
        this._index = (this._index + 10) % 90;
    }
};

Window_TextInput.prototype.cursorUp = function(wrap) {
    if (this._index >= 10 || wrap) {
        this._index = (this._index + 80) % 90;
    }
};

Window_TextInput.prototype.cursorRight = function(wrap) {
    if (this._index % 10 < 9) {
        this._index++;
    } else if (wrap) {
        this._index -= 9;
    }
};

Window_TextInput.prototype.cursorLeft = function(wrap) {
    if (this._index % 10 > 0) {
        this._index--;
    } else if (wrap) {
        this._index += 9;
    }
};

Window_TextInput.prototype.cursorPagedown = function() {
    this._page = (this._page + 1) % this.table().length;
    this.refresh();
};

Window_TextInput.prototype.cursorPageup = function() {
    this._page = (this._page + this.table().length - 1) % this.table().length;
    this.refresh();
};

Window_TextInput.prototype.processCursorMove = function() {
    var lastPage = this._page;
    Window_Selectable.prototype.processCursorMove.call(this);
    this.updateCursor();
    if (this._page !== lastPage) {
        SoundManager.playCursor();
    }
};

Window_TextInput.prototype.processHandling = function() {
    if (this.isOpen() && this.active) {
        if (Input.isTriggered('shift')) {
            this.processJump();
        }
        if (Input.isRepeated('cancel')) {
            this.processBack();
        }
        if (Input.isRepeated('ok')) {
            this.processOk();
        }
    }
};

Window_TextInput.prototype.isCancelEnabled = function() {
    return true;
};

Window_TextInput.prototype.processCancel = function() {
    this.processBack();
};

Window_TextInput.prototype.processJump = function() {
    if (this._index !== 89) {
        this._index = 89;
        SoundManager.playCursor();
    }
};

Window_TextInput.prototype.processBack = function() {
    if (this._editWindow.back()) {
        SoundManager.playCancel();
    }
};

Window_TextInput.prototype.processOk = function() {
    if (this.character()) {
        this.onNameAdd();
    } else if (this.isPageChange()) {
        SoundManager.playOk();
        this.cursorPagedown();
    } else if (this.isOk()) {
        this.onNameOk();
    }
};

Window_TextInput.prototype.onNameAdd = function() {
    if (this._editWindow.add(this.character())) {
        SoundManager.playOk();
    } else {
        SoundManager.playBuzzer();
    }
};

Window_TextInput.prototype.onNameOk = function() {
    if (this._editWindow.name() === '') {
        if (this._editWindow.restoreDefault()) {
            SoundManager.playOk();
        } else {
            SoundManager.playBuzzer();
        }
    } else {
        SoundManager.playOk();
        this.callOkHandler();
    }
};

})();
