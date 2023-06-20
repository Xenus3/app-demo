import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent {
 // message: UntypedFormControl = new UntypedFormControl('');

  demoForm: UntypedFormGroup = new UntypedFormGroup({
    message: new UntypedFormControl('Coucou'),
    pseudo: new UntypedFormControl('Quelqu\'un')
  });
  

  updateValue(): void {
    //this.message.setValue('Bonjour ' + this.message.value);
    console.log(this.demoForm.value.message);
    this.demoForm.controls['message'].setValue('Toto');
  }

  submit(): void {
    const data = this.demoForm.value;
    console.log(data);
  }
}
