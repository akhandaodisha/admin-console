import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  pageTitle = 'Admin Console';
  pageSubtitle = 'Changes might break the website. Please be careful !!!';
  checked: Boolean;
  configForm: FormGroup;
  saveText = 'Save';
  color = 'warn';

  createConfigForm() {
    this.configForm = this.fb.group({
      configValue: ['']
    });
  }

  submitConfigForm() {
    this.firebase.object('/config').set(JSON.parse(this.configForm.value.configValue));
    this.color = 'primary';
    this.saveText = 'Saved!';
  }


  onChange(e: Event) {
    if (e['checked'] === true) {
      this.checked = true;
      this.firebase.object('/config/siteAvailable').set(true);
    } else {
      this.checked = false;
      this.firebase.object('/config/siteAvailable').set(false);
    }
  }


  constructor(private fb: FormBuilder,
    private http: Http,
    private firebase: AngularFireDatabase) {
    this.createConfigForm();

    firebase.object('/config/siteAvailable')
      .valueChanges()
      .subscribe(res => this.checked = !!res);

    firebase.object('config')
      .valueChanges()
      .subscribe(res => {
        this.configForm.controls['configValue'].setValue(JSON.stringify(res, undefined, 4));
      });
  }

  ngOnInit() {
  }

}
