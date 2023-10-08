import { LightningElement } from 'lwc';

export default class Parentevent extends LightningElement {

  messagefromchild;

  handleMessage(event){
    console.log(event.detail);
    this.messagefromchild=event.detail;
  }
}