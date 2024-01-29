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
    setBackground(25,25,25);

    let currentSpeed = 250 
    let speed = 450
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
    let ppj = add([
        sprite("playerProjectile"),
        scale(3),
        area(),
        body(),
        pos(player.pos.x + 30, player.pos.y -15),
        move(player.pos.y + 10, -700 ),
        offscreen({destroy : true}),
        health(1),
        "PlayerPJ",
    ])
    function playerProjFunc(ppj) {
    ppj = add([
        sprite("playerProjectile"),
        scale(3),
        area(),
        body(),
        pos(player.pos.x + 30, player.pos.y -15),
        move(player.pos.y + 10, -700 ),
        offscreen({destroy : true}),
        health(1),
        "PlayerPJ",
    ])}
    onKeyPress("space", () =>{
        playerProjFunc()
    })

    const wall1 = add([
        rect(20, height()),
        color(0,0,0),
        pos(550, 0),
        area(),
        body({isStatic : true}),
        "wall1"
    ])
    const wall2 = add([
        rect(20, height()),
        color(0,0,0),
        pos(1250, 0),
        area(),
        body({isStatic : true}),
        "wall2"
    ])


    onKeyDown("left", () =>{
        player.move(-speed, 0)
    })
    onKeyDown("right", () =>{
        player.move(speed, 0)
    })
    const enemy = add([
        sprite("enemy"),
        pos(700, 50),
        scale(5),
        color(rand(1,255),rand(1,255),rand(1,255)),
        area(),
        body(),
        health(3),
        "enemy"
    ])
    let x = wall1.pos.x
    loop(0.1, () => {
        enemy.moveTo(x,50,currentSpeed)
    })

    onCollide("enemy", "PlayerPJ", () => {
        enemy.hurt(1)
        ppj.hurt(1)
    })

    ppj.on("death", () => {
        destroy(ppj)
    })

    enemy.on("death", () => {
        destroy(enemy)
    })



    onCollide("enemy", "wall2", () => {
        x = wall1.pos.x
    })
    onCollide("enemy","wall1", () => {
        x = wall2.pos.x
    })
    
})



scene("start", () => {
	
	const background = add([
		sprite("background"),
		pos(0,0),
		scale(4),
	])
	const logo = add([
		sprite("logo"),
		pos(450,10),
		"logo"
	])
	const text1 = add([
		text("Press ENTER to start"),
		pos(700,450),
		opacity(1.0)
	])
	loop(2, () => {
		text1.opacity = 1
		wait(1, () => {
			text1.opacity = .5
		})
	})
	loop(.1,() => {
		background.moveTo = (200,50,1)
	})

    onKeyPress("enter", () => {
        go("game");
    })

})


go("start");