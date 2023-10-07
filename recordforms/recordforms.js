import { LightningElement,api } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';



export default class Recordforms extends LightningElement {
  fields=[NAME_FIELD,STAGE_FIELD,CLOSEDATE_FIELD];

  
  nameField=NAME_FIELD;
  stageField=STAGE_FIELD;
  closeDateField=CLOSEDATE_FIELD;

  @api objectApiName;
  @api recordId;

 

}