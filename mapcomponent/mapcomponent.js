import { LightningElement,track,api,wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import MailingCity from '@salesforce/schema/Contact.MailingCity';
import MailingCountry from '@salesforce/schema/Contact.MailingCountry';
import MailingState from '@salesforce/schema/Contact.MailingState';
import MailingPostalCode from '@salesforce/schema/Contact.MailingPostalCode';
import MailingStreet from '@salesforce/schema/Contact.MailingStreet';

const FIELDS =[FirstName,LastName,MailingCity,MailingCountry,MailingState,MailingPostalCode,MailingStreet];


export default class LWC09_MAPComponent extends LightningElement { }