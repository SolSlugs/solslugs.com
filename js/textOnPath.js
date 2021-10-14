import { map, lerp, clamp } from './mathUtils';
import winsize from './winsize'

export default class TextOnPath {
    constructor(svgEl) {
        // The SVG element
        this.DOM = {svg: svgEl};
        // The text element
        this.DOM.text = this.DOM.svg.querySelector('text');
        // The textPath element
        this.DOM.textPath = this.DOM.text.querySelector('textPath');
        // The path total length
        this.pathLength = this.DOM.svg.querySelector('path').getTotalLength();
        // SVG element's size/position 
        this.svgRect = this.DOM.svg.getBoundingClientRect();
        // this is the svg element top value relative to the document
        // To calculate this, we need to get the top value relative to the viewport and sum the current page scroll
        this.positionY = this.svgRect.top + window.pageYOffset;
        // Recalculate on window resize
        window.addEventListener('resize', () => {
            this.svgRect = this.DOM.svg.getBoundingClientRect();
            this.positionY = this.svgRect.top + window.pageYOffset;
        });
        // In order to smooth the text animation, we will use linear interpolation to calculate the value of the startOffset
        // "value" is the current interpolated value and "amt" the amount to interpolate
        this.startOffset = {
            value: this.computeOffset(),
            amt: 0.22
        };
        // Calculate and set initial startOffset value
        this.startOffset.value = this.computeOffset();
        this.updateTextPathOffset();
        // Interpolated scroll value. 
        // To calculate the speed, we use the distance from the current scroll value to the previous scroll value (or interpolated one)
        this.scroll = {
            value: window.pageYOffset,
            amt: 0.17
        };
        // By using the IntersectionObserverAPI to check when the SVG element in inside the viewport, we can avoid calculating and updating the values for the elements outside the viewport
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                this.isVisible = entry.intersectionRatio > 0;
                if ( !this.isVisible ) {
                    this.entered = false;
                    // reset
                    this.update();
                }
            });
        });
        this.observer.observe(this.DOM.svg);

        // rAF/loop
        requestAnimationFrame(() => this.render());
    }
    // Calculate the textPath element startOffset value
    // This will allow us to position the text, depending on the current scroll position
    computeOffset() {
        // We want the text to start appearing from the right side of the screen when it comes into the viewport. 
        // This translates into saying that the text startOffset should have it's highest value (total path length) when the svg top value minus the page scroll equals the viewport height and it's lowest value (this case -this.pathLength/2) when it equals 0 (element is on the top part of the viewport)
        return map(this.positionY - window.pageYOffset, winsize.height, 0, this.pathLength, -this.pathLength/2);
    }
    // Updates the text startOffset value
    updateTextPathOffset() {
        this.DOM.textPath.setAttribute('startOffset', this.startOffset.value);
    }
    update() {
        // Calculate and set the interpolated startOffset value
        const currentOffset = this.computeOffset();
        this.startOffset.value = !this.entered ? currentOffset : lerp(this.startOffset.value, currentOffset, this.startOffset.amt);
        this.updateTextPathOffset();
        
        // SVG Filter related:
        // The current scroll value
        const currentScroll = window.pageYOffset;
        // Interpolated scroll value
        this.scroll.value = !this.entered ? currentScroll : lerp(this.scroll.value, currentScroll, this.scroll.amt);
        // Distance between the current and interpolated scroll value
        const distance = Math.abs(this.scroll.value - currentScroll);

        if ( !this.entered ) {
            this.entered = true;
        }
    }
    render() {
        if ( this.isVisible ) {
            this.update();
        }
        // ...
        requestAnimationFrame(() => this.render());
    }
    
}