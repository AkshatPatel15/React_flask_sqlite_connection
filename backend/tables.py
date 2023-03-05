import sqlite3

# Connect to the database
conn = sqlite3.connect('names.db')

# Create a cursor object
cur = conn.cursor()

# Create the friends table
cur.execute('''CREATE TABLE friends
               (id TEXT PRIMARY KEY NOT NULL,
                name TEXT NOT NULL)''')

# Insert a row into the friends table
cur.execute("INSERT INTO friends (id, name) VALUES (?, ?)", ('adf', '2'))

# Commit the transaction
conn.commit()

# Close the cursor and the connection
cur.close()
conn.close()
