trigger contoservizi on Servizio__c (after insert, after update) {
    id p = Trigger.new[0].Pratica__c;
    Pratica__c prat = [select id,Conto__c from Pratica__c where id=:p];
    Conto__c c = [select id,Totale_servizi__c from Conto__c where id=:prat.Conto__c];
    if(Trigger.new[0].Pagato__c == false)
    	c.Totale_servizi__c = c.Totale_servizi__c + Trigger.new[0].Importo__c;
    update c;
}