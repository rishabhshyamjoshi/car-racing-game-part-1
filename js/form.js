class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.box = createButton('background1');
      this.box1 = createButton('background2');
      this.box2 = createButton('background3');
      this.box3 = createButton('background4');
      this.box4 = createButton('background5');
      this.title = createElement('h2');
      //this.tilte1 = createElement('h2');
      this.boost = createButton('boost');
      this.reset = createButton('Reset');
      text("Enter name to Start",600,260);

    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.box.hide();
      this.box1.hide();
      this.box2.hide();
      this.box3.hide();
      this.box4.hide();
      this.title.hide();

    }
  display(){
    
      this.title.html(" RACING GAME");
      this.title.position(displayWidth/2.1 - 70, 120);
     // this.title1.html("Enter name to start the game");
     // this.title1.position(displayWidth/2.2 - 70,140);
      
      this.input.position(displayWidth/2.2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2.6 + 40, displayHeight/2);
      this.reset.position(displayWidth-660,384);
      this.box.position(200,500);
      this.box1.position(200,400);
      this.box2.position(200,300);
      this.box3.position(200,200);
      this.box4.position(200,100);
      this.boost.position(displayWidth/2.3 + 40, displayHeight/2);
      text.visibibily = 0;

this.button.mousePressed(()=>{
  background(mouseX,mouseY,255);
     this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello : " + player.name)
        this.greeting.position(displayWidth/2.2 - 70, displayHeight/20);
        this.reset.position(displayWidth-160,50);
        this.boost.position(1250,20);

      });

      this.box.mousePressed(()=>{
      background(backgroundImage5);
      });
      
      this.box1.mousePressed(()=>{
        background(backgroundImage4);
        });
        
      this.box2.mousePressed(()=>{
        background(backgroundImage3);
        });
        
      this.box3.mousePressed(()=>{
        background(backgroundImage2);
        });
      
      this.box4.mousePressed(()=>{
          background(backgroundImage1);
          });

      this.boost.mousePressed(()=>{
        player.distance +=18;
        player.update();
          });

      
          this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
    }
  }
  