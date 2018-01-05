#!/bin/bash
import csv
import pandas as pd
FILENAME ='data/prosperLoanData.csv'

data = pd.read_csv(FILENAME)

seldata =  data[['ListingKey', 'ListingCreationDate', 'LoanOriginationQuarter', 'Occupation', 'BorrowerRate', 'IncomeRange']]

#grpd = seldata.groupby(['LoanOriginationQuarter', 'Occupation']).agg('count')
#grpd = seldata.groupby(['LoanOriginationQuarter']).count()

#print grpd.head()



#grpd.to_csv('data/parsedData.csv')
seldata.sample(n=1000).to_csv('data/smallParsedData.csv')