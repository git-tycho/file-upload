import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:8081/postEmail' });
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      file: ['']
    });
    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('contactName', this.form.value.name);
      form.append('contactEmail', this.form.value.email);
      form.forEach((value, key) => {
        console.log(key, value);
      });
    };

  }
}
