import { Component } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:8081/postEmail' });

  ngOnInit() {

    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('contactName', form.name);
      form.append('contactEmail', form.email);
      console.log(form);
    };

  }
}
