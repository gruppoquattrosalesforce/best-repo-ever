trigger contototaleservizi0 on Conto__c (before insert) {
		Trigger.new[0].Totale_servizi__c=0;
    	
}