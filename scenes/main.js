const moveSpeed = 200
const invaderSpeed = 100
let currentSpeed = invaderSpeed
const bulletSpeed = 400
const levelDown = 50
const timeLeft = 30

layer(['obj', 'ui'], 'obj')

addLevel([
  '!^^^^^^^^^^^^        &',
  '!^^^^^^^^^^^^        &',
  '!^^^^^^^^^^^^        &',
  '!                    &',
  '!                    &',
  '!                    &',
  '!                    &',
  '!                    &',
  '!                    &',
  '!                    &',
  '!                    &'
], {
  width: 30,
  height: 22,
  '^': [sprite('space-invader'), scale(0.7), 'space-invader'],
  '!': [sprite('wall'), 'left-wall'],
  '&': [sprite('wall'), 'right-wall']
})

const player = add([
  sprite('space-ship'),
  pos(width() / 2, height() / 1.2),
  origin('center')
])

keyDown('left', () => {
  player.move(-moveSpeed, 0)
})

keyDown('right', () => {
  player.move(moveSpeed, 0)
})

function spawnBullet(p) {
  add([rect(6, 18),
  pos(p),
  origin('center'),
  color(0.5, 0.5, 1),
    'bullet'
  ])
}

keyPress('space', () => {
  spawnBullet(player.pos.add(0, -20))
})

collides('bullet', 'space-invader', (b, s) => {
  camShake(score.value / 10)
  destroy(b)
  destroy(s)
  score.value++
  score.text = score.value
})

action('bullet', (b) => {
  b.move(0, -bulletSpeed)
  if (b.pos.y < 0) {
    destroy(b)
  }
})

const score = add([
  text((args.prevScore ? args.prevScore : 0)),
  pos(25, 50),
  layer('ui'),
  scale(3),
  {
    value: (args.prevScore ? args.prevScore : 0),
  }
])

const timer = add([
  text('0'),
  pos(25, 25),
  scale(2),
  layer('ui'),
  {
    time: timeLeft,
  },
])

timer.action(() => {
  timer.time -= dt()
  timer.text = timer.time.toFixed(2)
  if (timer.time <= 0) {
    go('win', { score: score.value })
  }

})

action('space-invader', (s) => {
  s.move(currentSpeed, 0)
})

collides('space-invader', 'right-wall', () => {
  currentSpeed = -invaderSpeed
  every('space-invader', (s) => {
    s.move(0, levelDown)
  })
});

collides('space-invader', 'left-wall', () => {
  currentSpeed = invaderSpeed
  every('space-invader', (s) => {
    s.move(0, levelDown)
  })
});

player.overlaps('space-invader', () => {
  go('win', { score: score.value })
});

action('space-invader', (s) => {
  if (s.pos.y >= (12 * 22)) {
    go('win', { score: score.value })
  }
});