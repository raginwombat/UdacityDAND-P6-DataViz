#!/bin/bash
import csv
import pandas as pd
FILENAME ='data/prosperLoanData.csv'

data = pd.read_csv(FILENAME)
#print data.head()

seldata =  data[['ListingKey', 'LoanOriginationQuarter', 'Occupation', 'BorrowerRate', 'IncomeRange']]

grpd = seldata.groupby(['LoanOriginationQuarter', 'Occupation']).agg('count')
#grpd = seldata.groupby(['LoanOriginationQuarter']).count()

#print grpd.head()



#grpd.to_csv('data/parsedData.csv')
seldata.to_csv('data/parsedData.csv')