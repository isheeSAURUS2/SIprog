import kaboom from "kaboom"
kaboom()

//pre load for sprite and spritesheets
loadSprite("player", "img/player.png")
loadSprite("enemyProjectile", "img/enemyProj.png")
loadSprite("playerProjectile", "img/playerProj.png")
loadSprite("logo", "img/space_invaders_logo.png")
loadSprite("background", "img/spacebackground.jpg")
loadSprite("enemy", "img/enemy.png")

//scenes
scene("game", () => {
    setBackground(25, 25, 25);

    let currentSpeed = 250
    let speed = 450
    //making an object
    const player = add([
        //sprite
        sprite("player"),
        //scale
        scale(5),
        //position
        pos(885, 800),
        //collision
        area(),
        //mass and gravity
        body(),
        //health
        health(10),
        //tags
        "player",
    ])
    let ppj = add([
        sprite("playerProjectile"),
        scale(3),
        area(),
        body(),
        pos(player.pos.x + 30, player.pos.y - 15),
        move(player.pos.y + 10, -700),
        offscreen({ destroy: true }),
        health(1),
        "PlayerPJ",
    ])
    function playerProjFunc(ppj) {
        ppj = add([
            sprite("playerProjectile"),
            scale(3),
            area(),
            body(),
            pos(player.pos.x + 30, player.pos.y - 15),
            move(player.pos.y + 10, -700),
            offscreen({ destroy: true }),
            health(1),
            "PlayerPJ",
        ])
    }
    onKeyPress("space", () => {
        playerProjFunc()
    })

    const wall1 = add([
        rect(20, height()),
        color(0, 0, 0),
        pos(550, 0),
        area(),
        body({ isStatic: true }),
        "wall1"
    ])
    const wall2 = add([
        rect(20, height()),
        color(0, 0, 0),
        pos(1250, 0),
        area(),
        body({ isStatic: true }),
        "wall2"
    ])


    onKeyDown("left", () => {
        player.move(-speed, 0)
    })
    onKeyDown("right", () => {
        player.move(speed, 0)
    })
    let score = 0;
    const enemy = add([
        sprite("enemy"),
        pos(700, 50),
        scale(5),
        color(rand(1, 255), rand(1, 255), rand(1, 255)),
        area(),
        body(),
        health(3),
        "enemy",
        "0"
    ])
    const enemy1 = add([
        sprite("enemy"),
        pos(800, 50),
        scale(5),
        color(rand(1, 255), rand(1, 255), rand(1, 255)),
        area(),
        body(),
        health(3),
        "enemy",
        "1"
    ])
    const enemy2 = add([
        sprite("enemy"),
        pos(900, 50),
        scale(5),
        color(rand(1, 255), rand(1, 255), rand(1, 255)),
        area(),
        body(),
        health(3),
        "enemy",
        "2"
    ])
    const enemy3 = add([
        sprite("enemy"),
        pos(1000, 50),
        scale(5),
        color(rand(1, 255), rand(1, 255), rand(1, 255)),
        area(),
        body(),
        health(3),
        "enemy",
        "3"
    ])
    const enemy4 = add([
        sprite("enemy"),
        pos(1100, 50),
        scale(5),
        color(rand(1, 255), rand(1, 255), rand(1, 255)),
        area(),
        body(),
        health(3),
        "enemy",
        "4"
    ])

    const enemy5 = add([
        sprite("enemy"),
        pos(700, 80),
        scale(5),
        color(rand(1, 255), rand(1, 255), rand(1, 255)),
        area(),
        body(),
        health(3),
        "enemy",
        "5"
    ])
    const enemy6 = add([
        sprite("enemy"),
        pos(800, 80),
        scale(5),
        color(rand(1, 255), rand(1, 255), rand(1, 255)),
        area(),
        body(),
        health(3),
        "enemy",
        "6"
    ])
    const enemy7 = add([
        sprite("enemy"),
        pos(900, 80),
        scale(5),
        color(rand(1, 255), rand(1, 255), rand(1, 255)),
        area(),
        body(),
        health(3),
        "enemy",
        "7"
    ])
    const enemy8 = add([
        sprite("enemy"),
        pos(1000, 80),
        scale(5),
        color(rand(1, 255), rand(1, 255), rand(1, 255)),
        area(),
        body(),
        health(3),
        "enemy",
        "8"
    ])
    const enemy9 = add([
        sprite("enemy"),
        pos(1100, 80),
        scale(5),
        color(rand(1, 255), rand(1, 255), rand(1, 255)),
        area(),
        body(),
        health(3),
        "enemy",
        "9"
    ])

    let x = wall1.pos.x
    loop(0.1, () => {
        enemy.moveTo(x, 50, currentSpeed)
    })
    loop(0.1, () => {
        enemy1.moveTo(x, 50, currentSpeed)
    })
    loop(0.1, () => {
        enemy2.moveTo(x, 50, currentSpeed)
    })
    loop(0.1, () => {
        enemy3.moveTo(x, 50, currentSpeed)
    })
    loop(0.1, () => {
        enemy4.moveTo(x, 50, currentSpeed)
    })
    loop(0.1, () => {
        enemy5.moveTo(x, 80, currentSpeed)
    })
    loop(0.1, () => {
        enemy6.moveTo(x, 80, currentSpeed)
    })
    loop(0.1, () => {
        enemy7.moveTo(x, 80, currentSpeed)
    })
    loop(0.1, () => {
        enemy8.moveTo(x, 80, currentSpeed)
    })
    loop(0.1, () => {
        enemy9.moveTo(x, 80, currentSpeed)
    })

    onCollide("0", "PlayerPJ", () => {
        enemy.hurt(1)
        destroyAll("PlayerPJ")
    })
    onCollide("1", "PlayerPJ", () => {
        enemy1.hurt(1)
        destroyAll("PlayerPJ")
    })
    onCollide("2", "PlayerPJ", () => {
        enemy2.hurt(1)
        destroyAll("PlayerPJ")
    })
    onCollide("3", "PlayerPJ", () => {
        enemy3.hurt(1)
        destroyAll("PlayerPJ")
    })
    onCollide("4", "PlayerPJ", () => {
        enemy4.hurt(1)
        destroyAll("PlayerPJ")
    })
    onCollide("5", "PlayerPJ", () => {
        enemy5.hurt(1)
        destroyAll("PlayerPJ")
    })
    onCollide("6", "PlayerPJ", () => {
        enemy6.hurt(1)
        destroyAll("PlayerPJ")
    })
    onCollide("7", "PlayerPJ", () => {
        enemy7.hurt(1)
        destroyAll("PlayerPJ")
    })
    onCollide("8", "PlayerPJ", () => {
        enemy8.hurt(1)
        destroyAll("PlayerPJ")
    })
    onCollide("9", "PlayerPJ", () => {
        enemy9.hurt(1)
        destroyAll("PlayerPJ")
    })

    ppj.on("death", () => {
        destroy(ppj)
    })

    enemy.on("death", () => {
        destroy(enemy)
        score++
    })
    enemy1.on("death", () => {
        destroy(enemy1)
        score++
    })
    enemy2.on("death", () => {
        destroy(enemy2)
        score++
    })
    enemy3.on("death", () => {
        destroy(enemy3)
        score++
    })
    enemy4.on("death", () => {
        destroy(enemy4)
        score++
    })
    enemy5.on("death", () => {
        destroy(enemy5)
        score++
    })
    enemy6.on("death", () => {
        destroy(enemy6)
        score++
    })
    enemy7.on("death", () => {
        destroy(enemy7)
        score++
    })
    enemy8.on("death", () => {
        destroy(enemy8)
        score++
    })
    enemy9.on("death", () => {
        destroy(enemy9)
        score++
    })
    let epj = add([
        sprite("enemyProjectile"),
        scale(3),
        area(),
        body(),
        pos(enemy.pos.x - 30, enemy.pos.y - 15),
        move(player.pos.y + 10, -700),
        offscreen({ destroy: true }),
        health(1),
        "EnemyPJ",
    ]) 
    let epj1 = add([
        sprite("enemyProjectile"),
        scale(3),
        area(),
        body(),
        pos(enemy1.pos.x - 30, enemy1.pos.y - 15),
        move(player.pos.y + 10, -700),
        offscreen({ destroy: true }),
        health(1),
        "EnemyPJ",
    ]) 
    let epj2 = add([
        sprite("enemyProjectile"),
        scale(3),
        area(),
        body(),
        pos(enemy2.pos.x - 30, enemy2.pos.y - 15),
        move(player.pos.y + 10, -700),
        offscreen({ destroy: true }),
        health(1),
        "EnemyPJ",
    ]) 
    let epj3 = add([
        sprite("enemyProjectile"),
        scale(3),
        area(),
        body(),
        pos(enemy3.pos.x - 30, enemy3.pos.y - 15),
        move(player.pos.y + 10, -700),
        offscreen({ destroy: true }),
        health(1),
        "EnemyPJ",
    ]) 
    let epj4 = add([
        sprite("enemyProjectile"),
        scale(3),
        area(),
        body(),
        pos(enemy4.pos.x - 30, enemy4.pos.y - 15),
        move(player.pos.y + 10, -700),
        offscreen({ destroy: true }),
        health(1),
        "EnemyPJ",
    ]) 
    let epj5 = add([
        sprite("enemyProjectile"),
        scale(3),
        area(),
        body(),
        pos(enemy5.pos.x - 30, enemy5.pos.y - 15),
        move(player.pos.y + 10, -700),
        offscreen({ destroy: true }),
        health(1),
        "EnemyPJ",
    ]) 
    let epj6 = add([
        sprite("enemyProjectile"),
        scale(3),
        area(),
        body(),
        pos(enemy6.pos.x - 30, enemy6.pos.y - 15),
        move(player.pos.y + 10, -700),
        offscreen({ destroy: true }),
        health(1),
        "EnemyPJ",
    ]) 
    let epj7 = add([
        sprite("enemyProjectile"),
        scale(3),
        area(),
        body(),
        pos(enemy7.pos.x - 30, enemy7.pos.y - 15),
        move(player.pos.y + 10, -700),
        offscreen({ destroy: true }),
        health(1),
        "EnemyPJ",
    ]) 
    let epj8 = add([
        sprite("enemyProjectile"),
        scale(3),
        area(),
        body(),
        pos(enemy8.pos.x - 30, enemy8.pos.y - 15),
        move(player.pos.y + 10, -700),
        offscreen({ destroy: true }),
        health(1),
        "EnemyPJ",
    ]) 
    let epj9 = add([
        sprite("enemyProjectile"),
        scale(3),
        area(),
        body(),
        pos(enemy9.pos.x - 30, enemy9.pos.y - 15),
        move(player.pos.y + 10, -700),
        offscreen({ destroy: true }),
        health(1),
        "EnemyPJ",
    ]) 
    while(score <= 4){
        function enemyProjFunc5(epj5) {
            epj5 = add([
                sprite("enemyProjectile"),
                scale(3),
                area(),
                body(),
                pos(enemy5.pos.x - 30, enemy5.pos.y - 15),
                move(enemy5.pos.y + 10, -700),
                offscreen({ destroy: true }),
                health(1),
                "EnemyPJ",
            ])
        }
        function enemyProjFunc6(epj6) {
            epj6 = add([
                sprite("enemyProjectile"),
                scale(3),
                area(),
                body(),
                pos(enemy6.pos.x - 30, enemy6.pos.y - 15),
                move(enemy6.pos.y + 10, -700),
                offscreen({ destroy: true }),
                health(1),
                "EnemyPJ",
            ])
        }
        function enemyProjFunc7(epj7) {
            epj7 = add([
                sprite("enemyProjectile"),
                scale(3),
                area(),
                body(),
                pos(enemy7.pos.x - 30, enemy7.pos.y - 15),
                move(enemy7.pos.y + 10, -700),
                offscreen({ destroy: true }),
                health(1),
                "EnemyPJ",
            ])
        }
        function enemyProjFunc8(epj8) {
            epj8 = add([
                sprite("enemyProjectile"),
                scale(3),
                area(),
                body(),
                pos(enemy8.pos.x - 30, enemy8.pos.y - 15),
                move(enemy8.pos.y + 10, -700),
                offscreen({ destroy: true }),
                health(1),
                "EnemyPJ",
            ])
        }
        function enemyProjFunc9(epj9) {
            epj9 = add([
                sprite("enemyProjectile"),
                scale(3),
                area(),
                body(),
                pos(enemy9.pos.x - 30, enemy9.pos.y - 15),
                move(enemy9.pos.y + 10, -700),
                offscreen({ destroy: true }),
                health(1),
                "EnemyPJ",
            ])
        }
        loop(rand(1, 2), ()=>{
            enemyProjFunc5();
            enemyProjFunc6();
            enemyProjFunc7();
            enemyProjFunc8();
            enemyProjFunc9();
        })
    }
    while(score >= 5){
        function enemyProjFunc(epj) {
            epj = add([
                sprite("enemyProjectile"),
                scale(3),
                area(),
                body(),
                pos(enemy.pos.x - 30, enemy.pos.y - 15),
                move(enemy.pos.y + 10, -700),
                offscreen({ destroy: true }),
                health(1),
                "EnemyPJ",
            ])
        }
        function enemyProjFunc1(epj1) {
            epj1 = add([
                sprite("enemyProjectile"),
                scale(3),
                area(),
                body(),
                pos(enemy1.pos.x - 30, enemy1.pos.y - 15),
                move(enemy1.pos.y + 10, -700),
                offscreen({ destroy: true }),
                health(1),
                "EnemyPJ",
            ])
        }
        function enemyProjFunc2(epj2) {
            epj2 = add([
                sprite("enemyProjectile"),
                scale(3),
                area(),
                body(),
                pos(enemy2.pos.x - 30, enemy2.pos.y - 15),
                move(enemy2.pos.y + 10, -700),
                offscreen({ destroy: true }),
                health(1),
                "EnemyPJ",
            ])
        }
        function enemyProjFunc3(epj3) {
            epj3 = add([
                sprite("enemyProjectile"),
                scale(3),
                area(),
                body(),
                pos(enemy3.pos.x - 30, enemy3.pos.y - 15),
                move(enemy3.pos.y + 10, -700),
                offscreen({ destroy: true }),
                health(1),
                "EnemyPJ",
            ])
        }
        function enemyProjFunc4(epj4) {
            epj4 = add([
                sprite("enemyProjectile"),
                scale(3),
                area(),
                body(),
                pos(enemy4.pos.x - 30, enemy4.pos.y - 15),
                move(enemy4.pos.y + 10, -700),
                offscreen({ destroy: true }),
                health(1),
                "EnemyPJ",
            ])
        }
        loop(rand(1, 2), ()=>{
            enemyProjFunc();
            enemyProjFunc1();
            enemyProjFunc2();
            enemyProjFunc3();
            enemyProjFunc4();
        })
    }



    onCollide("enemy", "wall2", () => {
        x = wall1.pos.x
    })
    onCollide("enemy", "wall1", () => {
        x = wall2.pos.x
    })

})

scene("start", () => {

    const background = add([
        sprite("background"),
        pos(0, 0),
        scale(4),
    ])
    const logo = add([
        sprite("logo"),
        pos(450, 10),
        "logo"
    ])
    const text1 = add([
        text("Press ENTER to start"),
        pos(700, 450),
        opacity(1.0)
    ])
    loop(2, () => {
        text1.opacity = 1
        wait(1, () => {
            text1.opacity = .5
        })
    })
    loop(.1, () => {
        background.moveTo = (200, 50, 1)
    })

    onKeyPress("enter", () => {
        go("game");
    })

})


go("start");