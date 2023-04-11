Connect to a database. Then let the user choose what table they want to look at.


connect - connects to a database. using multiple args, this will change the root directory.
view - view a table. This will change the current directory to the table. only works if connected to table.
ls - list the current directory. If connected to a table, this will list the columns. If connected to a database, this will list the tables.
cd - change directory. This will change the current directory to the table. only works if connected to table.


[ ]: # Path: Notes.md




The connect and disconnect works for localhost, but not for a remote server. so do that.