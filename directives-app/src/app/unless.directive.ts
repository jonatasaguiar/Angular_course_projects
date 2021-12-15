import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      console.log(`constructor me now`);
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      console.log(`constructor me clear`);
      this.vcRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log(`constructor me`);
  }
}
