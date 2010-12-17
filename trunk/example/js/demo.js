/**
* @name     Demo Codes - demo.js
* @project  NESCode
* @author <codes>      mediaHACK - http://mediahack.com
* @date         2010.12.09
* @version      101209
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
        // Music sourced from http://8bc.org/music/Klopfenpop/T.U.R.T.L.E.+Power+%28feat.+Random%29/
        var audioUrl = "http://nescode.googlecode.com/files/Turtle_Power_rough.mp3";
        this.audioEmbed( audioUrl );
                
    };
    
    this.audioEmbed = function( aUrl )
    {
        var audio = document.getElementById( "cheatAudio" ) || document.createElement("audio");								
        audio.id = "cheatAudio"; 
        audio.src = aUrl; 
        audio.hidden = true;
        audio.load();
        audio.addEventListener("load", function(){
            audio.play();
        });  
        
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


