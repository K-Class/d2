sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.over(true)
})
scene.setBackgroundImage(img`
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666644444444444444444444444444444444444444444444444444444444446666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666686666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666686666666686666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666668886666666686666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666866666686866666666686666866666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666866666868666666666686666866666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666668866668668666666666686666866666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666668866686686666666666686668666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666668866866866666666666686668666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666686868666866666666666686886666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666686886668666666666666688866666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666866666668666666666666688866666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666866666686666666666666686688666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666668666666686666666666666686666866666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666686666666866666666666666686666688666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666866666666866666666666666686666666866666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666668666666666866666666666666686666666866666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666886666666666688666666666666866666666866666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666668666666666666666666666666668666666666686666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666686666666666666666666666666686666666666668666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666668666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666688888888888888888888888888888888888888888886666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666866666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666668666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666686666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666668866666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666686666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666866666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666688666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666688866666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666646666666666666666666666666666666666666666666666666666666646666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666644444444444444444444444444444444444444444444444444444444446666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666466666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666466666666666666666666666666
    6666666666666666666666666444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444466666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
let Doughnut_3 = sprites.create(img`
    . . . c c c c c c . . . . . . . 
    . . c 6 7 7 7 7 6 c . . . . . . 
    . c 7 7 7 7 7 7 7 7 c . . . . . 
    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
    . f 7 7 7 7 6 c 7 7 6 f . . . . 
    . . f c c c c 7 7 6 f c c c . . 
    . . c 6 2 7 7 7 f c c 7 7 7 c . 
    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
    . . c 6 1 1 1 1 1 7 6 6 c c . . 
    . . . c c c c c c c c c c . . . 
    `, SpriteKind.Player)
controller.moveSprite(Doughnut_3)
Doughnut_3 = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Food)
Doughnut_3.setPosition(141, 85)
info.startCountdown(5)
