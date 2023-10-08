import { LightningElement } from 'lwc';

export default class Childevent extends LightningElement {

  childmessage;

  textchangeHandler(event){

    this.childmessage=event.target.value;
  }

  sendmessagetoParent(){
    //event publish ( Custom Event xxxxxx )

    const childmessageevent = new CustomEvent('xxxxxx',{
      detail:this.childmessage
    });

    this.dispatchEvent(childmessageevent);
  }
}