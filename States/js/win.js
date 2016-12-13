/* 
 * 
 */


/* 
 * The human player must follow the instruction in order to start the game
 */

var winState ={
    
    create: function(){
        
        var nameLabel = game.add.text(80,80, 'You Won', 
                                      {font: '50px Arial', fill: '#ffffff'}); 
        
        var startLabel =game.add.text(80,game.world.height-80, 
                                      'press the "w" key to start', 
                                      {font: '25px Arial', fill: '#ffffff'}); 
                                      
        /*
         * Define the w key als Phaser.Keaboard.W so that we can act
         * when the player presses it 
         */
        var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W); 
        
        //when the player presses the w key , we call the start function 
        
        wkey.onDown.addOnce(this.restart, this); 
        
}, 

//the start function calls the play state

restart: function(){
    game.state.start('menu'); 
    
}, 
}; 


