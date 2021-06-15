import { LightningElement,track } from 'lwc';
import ricerca from '@salesforce/apex/Risultati.ricerca';
export default class Prova extends LightningElement {
    @track camereLibere;
    @track click;
    @track dataInizio;
    @track dataFine;
    @track hotel;
    @track tipologia;
    @track comfort;
    @track prezzo;
    @track showAll;
    @track picklistHotel;
    @track hotelPicklist = [
        { value: 'WR Hotel Roma', label: 'WR Hotel Roma' },
        { value: 'WR Hotel Milano', label: 'WR Hotel Milano' },
        { value: 'WR Hotel Napoli', label: 'WR Hotel Napoli' }
   
    ];
    @track tipologiaPicklist = [
        { value: 'Singola', label: 'Singola' },
        { value: 'Doppia a uso singolo', label: 'Doppia a uso singolo' },
        { value: 'Doppia', label: 'Doppia' },
        { value: 'Matrimoniale', label: 'Matrimoniale' },
        { value: 'Tripla', label: 'Tripla' },
        { value: 'Quadrupla', label: 'Quadrupla' }
   
    ];

    @track comfortPicklist = [
        { value: 'Standard', label: 'Standard' },
        { value: 'Superior', label: 'Superior' },
        { value: 'Busniness', label: 'Busniness' },
        { value: 'Suite', label: 'Suite' }
    ];


    connectedCallback() {
        this.HandleRicerca();
     }
 
     changeInputDataInizio(event) {
         this.dataInizio = event.detail.value;
     }
     changeInputDataFine(event) {
        this.dataFine = event.detail.value;
    }
    changeInputHotel(event) {
        this.hotel = event.detail.value;
    }
    changeInputTipologia(event) {
        this.tipologia = event.detail.value;
    }
    changeInputComfort(event) {
        this.comfort = event.detail.value;
    }
    changeInputPrezzo(event) {
        this.prezzo = event.detail.value;
    }
     


 
     HandleRicerca() {
         ricerca({ hotel: this.hotel, inizio: this.dataInizio , fine : this.dataFine , tipologia : this.tipologia , comfort : this.comfort , prezzo: this.prezzo})
             .then((result) => {
                 console.log(result);
                 this.camereLibere = result;              
             })
             .catch((error) => {
                 
             });
     }

     showAll(event) {
        this.click = event.target.source;
        this.showAll = true;

    }

}