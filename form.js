class Form 
{ 
    constructor() {

     } 
     display(){ 
         var title = createElement('h2')
          title.html("Car Racing Game");
           title.position(700, 0); 
           var input = createInput("Name"); 
           var button = createButton('Play'); 
           input.position(720, 260);
            button.position(800, 300); 
            button.mousePressed(function(){
                 input.hide();
                  button.hide();
                   var name = input.value();
                    playercount+=1;
                     player.update(name)
                      player.updateCount(playercount);
                       var greeting = createElement('h3');
                        greeting.html("Hello " + name )
                         greeting.position(770, 260) 
                        }); 
                        } 
                    }