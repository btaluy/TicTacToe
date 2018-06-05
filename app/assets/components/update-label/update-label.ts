import { Directive, ElementRef, Input } from '@angular/core';
import { Label } from 'tns-core-modules/ui/label';

/**
 * Make sure the layout is updated when the Label's text is changed.
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'Label[text]'
})
export class UpdateLabelDirective {
  @Input('text')
  public set _text(text: string) {
    const nativeView: any = this.el.nativeElement;
    if (nativeView && nativeView instanceof Label) {
      nativeView.text = text;
      nativeView.requestLayout();
    }
  }

  public constructor(private readonly el: ElementRef) { }
}
