trigger CreaContoxPratica on Pratica__c (before insert) 
{
    for(Pratica__c a : trigger.new)
    {
        Conto__c nuovoConto = new Conto__c ();
        Database.insert(nuovoConto, false);
        a.Conto__c = nuovoConto.Id;
	}
}