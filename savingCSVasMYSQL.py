import csv
import mysql.connector
mydb = mysql.connector.connect(host="localhost", user="root", passwd="#Happy12345")
cursor = mydb.cursor()

cursor.execute('CREATE DATABASE DB12')
cursor.execute('USE DB12')
cursor.execute('CREATE TABLE SKILLS (A VARCHAR(100), B VARCHAR(100),A VARCHAR(100) B VARCHAR(100),')
with open('Skills.csv', 'r') as csvfile:
    csvreader = csv.reader(csvfile)
    for row in csvreader:
        print(row)
        #cursor.execute('INSERT INTO ')
        # cursor.execute('INSERT INTO testcsv(names,classes, mark ) VALUES("%s", "%s", "%s")',
        #       row)
    #close the connection to the database.
    mydb.commit()
    cursor.close()
    print ("Done")