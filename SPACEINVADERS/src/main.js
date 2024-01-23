import kaboom from "kaboom"
kaboom()
<<<<<<< Updated upstream

loadSprite("bean", "sprites/bean.png")



scene("game", () => {
	setGravity(1600)
	const bean = add([
		sprite("bean"),
		pos(80, 40),
		area(),
		body(),
		scale(10),
	])

	onKeyPress("space", () => {
		if (bean.isGrounded()) {
			bean.jump()
		}
	})

	add([
		rect(width(), 48),
		pos(0, height() - 48),
		outline(4),
		area(),
		body({ isStatic: true }),
		color(127, 200, 255),
	])

	function spawnTree() {
		add([
			rect(48, rand(25, 64)),
			area(),
			outline(4),
			pos(width(), height() - 48),
			anchor("botleft"),
			color(255, 180, 255),
			move(LEFT, 240),
			"tree",
		])
		wait(rand(1, 3), () => {
			spawnTree();
		})
	}
	spawnTree()

	bean.onCollide("tree", () => {
		addKaboom(bean.pos)
		shake()
		go("lose", score)
	})

	let score = 69
	const scoreLabel = add([
		text(score),
		pos(50, 50)
	])

	onUpdate(() => {
		score++;
		scoreLabel.text = score;
	})
})

scene("lose", (score) => {
	add([
		text("Game Over"),
		color(255,200,50),
		pos(center()),
		scale(3),
		outline(4),
		anchor("center"),
	])
	add([
		text(score),
		pos(center()-10),
		scale(2),
		anchor("center"),
=======

loadSprite("logo", "img/space_invaders_logo.png")
loadSprite("background", "img/spacebackground.jpg")
scene("start", () => {
	
	const background = add([
		sprite("background"),
		pos(0,0),
		scale(4),
>>>>>>> Stashed changes
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

})


<<<<<<< Updated upstream
go("game")
=======
go("start")
>>>>>>> Stashed changes
