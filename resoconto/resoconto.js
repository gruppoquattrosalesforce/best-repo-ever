import { LightningElement, track } from 'lwc';
import vediTutto from '@salesforce/apex/Risultati.vediTutto';


export default class Resoconto extends LightningElement {
    //Contengono lista di Pratiche
    @track pratica;
    //input email del cliente
    @track inp;
    @track click;


    //Variabili Booleane per mostrare o meno i componenti a schermo.

    @track showAll = false;


    connectedCallback() {
       
       this.HandlevediTutto();
    }

   
    changeInput(event) {
        this.inp = event.detail.value;
    }

    HandlevediTutto() {
        vediTutto({ cliente: this.inp })
            .then((result) => {
              //  console.log(result);
                this.pratica = result;              
            })
            .catch((error) => {
                
            });
    }

    showAll(event) {
        this.click = event.target.source;
        this.showAll = true;

    }
}