import pymysql

DB_NAME = '''bank_app'''

CREATE_TRANSACTIONS_TABLE = ''' CREATE TABLE transactions
                                           (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                           amount FLOAT,
                                           category NVARCHAR(30),
                                           vendor NVARCHAR(30));
                            '''

INIT_BALANCE_TABLE = ''' CREATE TABLE balance
                        (amount FLOAT);
                       '''

INIT_BALANCE_VALUE = ''' INSERT INTO balance
                         (amount) VALUES (0);
                     '''

UPDATE_BALANCE_TO_ZERO = '''
                        UPDATE balance 
                        SET balance = 8;
                        '''
                
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

    initial_connection.cursor().execute(INIT_BALANCE_VALUE)
    initial_connection.commit()
    print("successfully DONE")
except Exception: 
    print(Exception.args[0])
    print("tables already exists!")