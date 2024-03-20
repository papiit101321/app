import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../campaigns/campaign.model';
import { JsonFormComponent, JsonFormData } from '../components/json-form/json-form.component';
import { FirebaseService } from '../services/firebase.service';

//https://eliteionic.com/tutorials/creating-dynamic-angular-forms-with-json/

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public formData: JsonFormData;
  public quiz:Quiz

  constructor(private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private firebaseService:FirebaseService ) {}


  ngOnInit() {
   
/*
    const path = '/questionary/ZuoOwSzHxZkby5rRlwHp'
      this.firebaseService.getDocument<Quiz>(path).subscribe(res => {
        //this.quiz = res;
        this.formData = res.quiz
        //console.log(this.quiz.quiz)            
      });
*/


    this.http
      .get('/assets/my-form.json')
      .subscribe((formData: JsonFormData) => {
        this.formData = formData;
        this.activatedRoute.paramMap.subscribe( paramMap => {
          //redirect
          this.formData.controls[0].value = paramMap.get('campaignId')
          this.formData.controls[1].value = paramMap.get('visitId')
        });
            
      });
  
  }

}
