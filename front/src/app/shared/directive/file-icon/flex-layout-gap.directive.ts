import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFlexLayoutGap]'
})
export class FlexLayoutGapDirective implements OnInit, OnDestroy {

  private gap = '16px;';

  private observer: MutationObserver;

  constructor(private elRef: ElementRef, 
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.observer = new MutationObserver(() => this.setGap());
    
    this.observer.observe(this.elRef.nativeElement, {
      childList: true
    });

    this.setGap();
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

  setGap() {
    const fxLayout = this.elRef.nativeElement.getAttribute('fxLayout');
    if(!fxLayout) {
      return;
    }

    for(let i = 0; i < this.elRef.nativeElement.children.length; i++) {
      this.renderer.removeAttribute(this.elRef.nativeElement.children[i], 'style');
    }
    
    const style = (fxLayout === 'column' ? 'margin-bottom' : 'margin-right') + ': ' + this.gap;
    for(let i = 0; i < this.elRef.nativeElement.children.length - 1; i++) {
      this.renderer.setAttribute(this.elRef.nativeElement.children[i], 'style', style);
    }
  }

}
