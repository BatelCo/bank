import models.queries as queries
import pymysql


class DataManager():
        def __init__(self):
            try:
                self.connection = pymysql.connect(
                                                    host='localhost',
                                                    user='root',
                                                    password="",
                                                    db="bank_app",
                                                    charset="utf8",
                                                    cursorclass=pymysql.cursors.DictCursor
                                                )
            except pymysql.Error as e:
                print("Error connecting to MySQL", e)
    
        def get_transactions_from_db(self):
            try:
                with self.connection.cursor() as cursor:
                    cursor.execute(queries.select_all_transactions)
                    result = cursor.fetchall()
                    return result
            except pymysql.Error as e:
                raise e


# d_m = DataManager()
# print(d_m.get_transactoins())