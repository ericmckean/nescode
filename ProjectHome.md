<img src='http://nescode.googlecode.com/svn/trunk/nescode_banner.png' />
# NES Code jsApp #

This jsApp will enable NES style cheat codes in your webpage.

If you have any questions, suggestions or issues <a href='http://www.twitter.com/mediahack'>let me know on twitter</a>.

---

&lt;wiki:gadget url="http://nescode.googlecode.com/svn/trunk/example/gadget.xml" width="100%" height="115" border="0" /&gt;

---



## Usage ##

If you want to just use this and instantly go, copy the code directly below. This will get the current available version hosted on Google Code. Warning there could be caching issues between releases.
```
<script src="http://nescode.googlecode.com/files/nescode.min.js"></script>
<script>nes = new NESCode();</script>
```

The instances of a cheat code can be passed a settings object. If you don't give it a settings object then you'll have a default Konami code cheat (its not fancy).


## Cheat Codes ##

A settings JSON object can be passed to the constructor. Multiple codes can be passed in via the JSON object. Each entry is expected to be an sub collection contained within another JSON object. This inner object can have 2 properties: the code and the callback. Here is an example:

```
var myCodes = { 
     "contra": { code: [40,39,80], callback: "doSomething" }, 
     "superC": {callback: new Cheats().tenLives() }, 
     "goCodeGo": { code: [40,39,40,39,80], callback: function(){ /* code */; } }
};

nes = new NESCode( { "customCheats": myCodes } );

```

### Breakdown ###
There are 2 cheat codes defined above.

The first one is a code that will be referenced as contra in the NESCode. It defines a code that will activate when keys 40,39 and 80 are pressed in sequence and finally it will look in the scope for a function called doSomething.

The second function is labeled superC. It has a callback that creates a cheat object on the fly then calls a function within that object called tenLives(). Notice that there is no code defined. This means the Konami code will be used to define its code.

Finally we create a new NESCode object and pass it in a settings object. For most cases all you'll have to do is create the customCheats property and assign it your cheat object.

**_In regards to the new Cheats() object that is created in the callback, that is not part of the NESCode code but merely an example of what can be done. Its up to you to implement your own awesomeness_**

### JSON Settings Object Details ###
  * **code**: this is the key code the user must use to active. It is defined as an array of key character codes. <a href='https://developer.mozilla.org/en/DOM/Event/UIEvent/KeyEvent'>Mozilla Listing of KeyCodes</a>. Default: Konami code.
  * **callback**: What function do you want to run when the code is activated. It will accept a String or a function.