import { fabric } from 'fabric';
import { Attribute } from './Types';

export class Slug {
    private canvas?: fabric.Canvas | fabric.StaticCanvas;

    constructor(
        public background: Attribute,
        public color: Attribute,
        public chest: Attribute,
        public mouth: Attribute,
        public back: Attribute,
        public head: Attribute,
        public eyes: Attribute,
        public tail: Attribute,
        public hands: Attribute
    ) {
    }

    private async loadImage(base64: string, canvasSize: number) {
        return new Promise<void>((res) => {
            fabric.Image.fromURL(base64, (img) => {
                img.selectable = false;
                img.scaleToHeight(canvasSize);
                img.scaleToWidth(canvasSize);
                this?.canvas?.add(img);
                res();
            });
        });
    }

    public async setCanvas(canvas: fabric.Canvas | fabric.StaticCanvas) {
        this.canvas = canvas;
    }

    public async draw(canvasSize: number) {
        if (!this.canvas) {
            return;
        }

        await this.canvas.clear();

        if ((this.canvas as any).selection) {
            (this.canvas as any).selection = false;
        }

        for (const item of [
            this.background,
            this.color,
            this.chest,
            this.mouth,
            this.head,
            this.eyes,
            this.tail,
            this.back,
            this.hands,
        ]) {
            if (!item || item.image === '') {
                continue;
            }

            await this.loadImage(item.image, canvasSize);
        }
    }
}
