import * as PIXI from "pixi.js"
import {carGame} from "./game"
export class Car extends PIXI.Sprite {

    speed:number
    loader: PIXI.Loader
    hornAudio : HTMLAudioElement

    constructor(texture: PIXI.Texture, sound:HTMLAudioElement){
        super(texture)
        console.log("VROOM VROOM!")
        this.speed = 3
        this.x = 800
        this.y = 690
        this.hornAudio = sound
        this.scale.set(1.5)
        this.anchor.set(0.5)
        this.interactive = true
        this.buttonMode = true
        this.on('pointerdown', () => this.carHonk())
    }

    doneLoading(){
        console.log("done loading")
    }

    private carHonk(){
        this.hornAudio.play()
    }

    drive() {
        this.x -= this.speed
        // console.log(this.x)
        // TODO IF STATEMENT CHECK X POSITIE
        // console.log(this.x)
        if (this.x <= -400) {
            this.x = window.innerWidth + 400
        }
    }
}

