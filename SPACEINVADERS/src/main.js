import kaboom from "kaboom"
import { Scale } from "phaser"

kaboom()
loadSprite("bean", "sprites/bean.png")

scene("game", () => {
	let score = 0;
	const scoreLable = add([
		text(score),
		pos(24,24),
	])
	onUpdate(() => {
		score++;
		scoreLable.text = score;
	})
setGravity(1500);

const bean = add([
	sprite("bean"),
	pos(80, 40),
	area(),
	body(),
])

onKeyPress("space", () =>{
	if (bean.isGrounded()){
		bean.jump();
	}
});

const platform = add([
	rect(width(), 48),
	pos(0, height() - 48),
	outline(4),
	area(),
	body({isStatic: true}),
	color(127, 200, 255),
]);
function spawnTree(){
add([
	rect(48,rand(24, 75)),
	area(),
	outline(4),
	pos(width(), height() - 48),
	anchor("botleft"),
	color(255, 180, 255),
	move(LEFT, 240),
	"tree"
]);
wait(rand(1, 2), () =>{
	spawnTree();
});
};
bean.onCollide("tree", () =>{
	addKaboom(bean.pos);
	shake();
	go("gameOver");
})
spawnTree();
})

scene("gameOver", () => {
	add([
		text("game over"),
		pos(center()),
		anchor("center"),
		scale(4),
		color(255,0,0)
	])
})
go("game")