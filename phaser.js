    var config = {
      type: Phaser.AUTO,
      width: 500,
      height: 500,
      parent: document.getElementById("right"),
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
        render: render
      }
    };

    var game = new Phaser.Game(config);
    var player;
    var platforms;
    var cursors;
    var bombs;
    var displayText;


    function preload() {
        this.load.image('paran', 'assets/paran.png');     
    }
    //게임 초기 설정 변수 초기화
    function create() {
        this.paran = this.add.sprite(250,250,'paran');
        this.paran.acrade.enable(this.paran);

    }

     
    function update() {
    
    }

    