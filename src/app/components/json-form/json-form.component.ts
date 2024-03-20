import { Component, OnInit, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CampaignsService } from 'src/app/campaigns/campaigns.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Questionary } from '../../campaigns/campaign.model'

interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}
interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}
interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
}
export interface JsonFormData {
  //campaignsId: string;
  //visitId:string;
  controls: JsonFormControls[];
}
@Component({
  selector: 'app-json-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss'],
})


export class JsonFormComponent implements OnInit {
  @Input() jsonFormData: JsonFormData;

  public myForm: FormGroup = this.fb.group({});

  constructor( private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private router:Router) { }
  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.jsonFormData.firstChange) {
      this.createForm(this.jsonFormData.controls);
      //console.log(this.jsonFormData);
    }
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];
      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(value));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      this.myForm.addControl(
        control.name,
        this.fb.control(control.value, validatorsToAdd)
      );
    }
  }

  quest: Questionary = {
    id:'',
    data:'',
  }
  
  onSubmit() {
      console.log('Form valid: ', this.myForm.valid);
      console.log('Form values: ', this.myForm.value);

      if (this.myForm.valid){
        const formValues = this.myForm.value

        this.quest.id = this.firebaseService.createID()
        this.quest.data= this.myForm.value
        
        const link = '/campaigns/'+ formValues.campaignId + '/visits/'+formValues.visitId+'/questionary'

        
        this.firebaseService.createDocument(this.quest, link, this.quest.id).then(res =>  {
          this.router.navigate(['/campaigns/'+ formValues.campaignId +'/'+ formValues.visitId])
        }).catch( err => {
          console.log('Error de firebase -> ',err)
          this.router.navigate(['/error-firebase'])
    
        });
    



      }

    }
}