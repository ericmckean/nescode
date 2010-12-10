/**
* @name     Demo Codes - demo.js
* @project  NESCode
* @author <codes>      mediaHACK - http://mediahack.com
* @date         2010.12.07
* @version      1012.07
*
* @licence  New BSD License.
* @licence  Creative-Commons BY
* 
* Some sample cheats.
*
**/
function MyCheats(){ 			
        
    this.doRandomShit = function()
    {
        console.log("lololol");	
    };
        
    this.turtlePower = function()
    {
        // Music provided by http://8bc.org/music/Klopfenpop/T.U.R.T.L.E.+Power+%28feat.+Random%29/
        var audioUrl = "https://jsnescode.googlecode.com/svn/tags/101207/example/audio/Turtle_Power_rough.mp3";
        this.audioEmbed( audioUrl );
                
    };
    
    this.audioEmbed = function( aUrl )
    {
        var audio = document.getElementById( "cheatAudio" ) || document.createElement("embed");								
        audio.id = "cheatAudio"; 
        audio.src = aUrl; 
        audio.autostart = true; 
        audio.hidden = true; 
        
        var div = document.createElement("div");
        div.style.width = "0"; div.style.height = "0"; div.style.overflow = "hidden";				
        
        var modal = document.createElement("div");
        
        div.appendChild( audio );
        modal.appendChild( div );
        document.getElementsByTagName("body")[0].appendChild( modal );		
    
    }
        
        
} // function MyCheats()

function facePalm(){
    console.log("haaaaaaaaaaaaduuuuuken!");
}
        
var hax = { 
    "cowabunga": { "code": [38,39,39,40,40,40,37,37,37,37,66,65,13], "callback": function(){ new MyCheats().turtlePower(); } },				
    "haduken": { "code": [40,39,80], "callback": "facePalm" } 
};

nes = new NESCode( { "customCheats": hax } );


