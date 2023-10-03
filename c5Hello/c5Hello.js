import { LightningElement,track } from 'lwc';

export default class C5Hello extends LightningElement {

    @track person={
        firstName:'Fatih',
        lastName:'Yazici'
    }
    clickHandler(){

        console.log('LWC button clicked...');
        this.person.firstName='Steve';
        console.log(JSON.parse(JSON.stringify(this.person)));
    }
}