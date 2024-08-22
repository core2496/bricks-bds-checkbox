import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bricks-bds-checkbox';

  checkBoxTwo:boolean = true;
  form!: FormGroup;
  formValue: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      checkBoxThree: [{value:false, disabled:false}],
    });
  }

  handleChange($event:CustomEvent):void {
    alert(`El check ha sido ${$event.detail.checked? 'marcado' : 'desmarcado'}: ${$event.detail.value} - ${$event.detail.checked}`)
  }

  handleToogleCheckBox():void {
    this.checkBoxTwo = !this.checkBoxTwo; 
  }

  handleSubmit():void {
    this.formValue = this.form.value;
    console.log(this.formValue);
    alert(`Form Value: ${ Object.keys(this.formValue)[0]} - ${this.formValue.checkBoxThree} `)
  }

 
}
