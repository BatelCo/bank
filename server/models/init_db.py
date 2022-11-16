import pymysql

DB_NAME = "bank_app"

# create DB
try:
    initial_connection = pymysql.connect(
        host="localhost",
        user="root",
        password=""
    )
    print("creating data base...")
    initial_connection.cursor().execute(f'create database {DB_NAME}')
    print("data base created successfully")
except Exception: 
    print("data base already exists!")

# create tables
try:
    initial_connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db=DB_NAME,
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)
    print("creating value table...")

    initial_connection.cursor().execute('''CREATE TABLE transactions
                                           (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                           amount FLOAT,
                                           category NVARCHAR(30),
                                           vendor NVARCHAR(30));''')
    initial_connection.commit()
    print("table created successfully")
except Exception: 
    print(Exception.args[0])
    print("tables already exists!")