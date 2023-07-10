import * as PIXI from './pixi.mjs'

const app = new PIXI.Application({
    view: document.getElementById('canvas'),
    width: 1000,
    height: 1000
});

const container = new PIXI.Container()
