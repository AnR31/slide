import { Directive, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSlider]',
})
export class SliderDirective {
  private condition = true;

  @HostBinding('disabled')
  get mydisabled() {
    return this.condition ? 'disabled' : null;
  }
  @HostBinding('class.mat-button-disabled')
  get mydisabled2() {
    return this.condition;
  }
  constructor(renderer: Renderer2, el: ElementRef) {
    const button = renderer.createElement('input');
    renderer.setAttribute(button, 'type', 'checkbox')
    renderer.listen(button, 'click', this.onClickBox); // gjcjvnh
    renderer.appendChild(el.nativeElement, button);
  }
  onClickBox = (event: any) => {
    console.log('fdsfds');
    if (this.condition) {this.condition = false; }
    else {
      this.condition = true;
    }
  }

}
// написать план 
// 1. disabled блокируем кнопку ( @HostBinding('disabled') ) декаратор
// 2. вынести в директиву условие дезейбл
// 3. делаем тогл чекбокс
// 4. отобразить на экране кнопку
// сделать подписку на condition 
// 3 урок посмотреть