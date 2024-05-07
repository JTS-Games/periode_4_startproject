import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { delay } from 'excalibur/build/dist/Util/Util.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }
/*
    startGame() {
        console.log("start de game!")

        for (let i = 0; i < 5; i++) {
            this.spawnFish()
          }
    }
    */
    spawnFish(){
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(400, 300)
        fish.vel = new Vector(-100,0)
        this.add(fish)
    }

}

new Game()
