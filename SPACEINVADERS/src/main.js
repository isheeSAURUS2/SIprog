import kaboom from "kaboom"
kaboom()
//pre load for sprite and spritesheets
loadSprite("player", "img/player.png")
loadSprite("enemyProjectile", "img/enemyProj.png")
loadSprite("playerProjectile", "img/playerProj.png")

//scenes
scene("game", () => {
    setBackground(25,25,25);
    
    
    let speed = 450;
    //making an object
    const player = add([
        //sprite
        sprite("player"),
        //scale
        scale(5),
        //position
        pos(885,800),
        //collision
        area(),
        //mass and gravity
        body(),
        //health
        health(10),
        //tags
        "player",
    ])
    onKeyPress("space", () =>{
        const PPJ = add([
            sprite("playerProjectile"),
            scale(3),
            area(),
            body(),
            pos(player.pos.x + 30, player.pos.y),
            move(player.pos.y + 10, -700),
            offscreen({destroy : true}),
            "PlayerPJ",
        ])
        
    })
    add([
        rect(20, height()),
        color(0,0,0),
        pos(550, 0),
        area(),
        body({isStatic : true}),
    ])
    add([
        rect(20, height()),
        color(0,0,0),
        pos(1250, 0),
        area(),
        body({isStatic : true}),
    ])


    onKeyDown("left", () =>{
        player.move(-speed, 0)
    })
    onKeyDown("right", () =>{
        player.move(speed, 0)
    })
})
go("game")