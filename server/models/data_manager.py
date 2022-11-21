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

    def get_balance_from_db(self):
        try:
                connection = pymysql.connect(
                host='localhost',
                user='root',
                password="",
                db="bank_app",
                charset="utf8",
                cursorclass=pymysql.cursors.DictCursor
                )
        except pymysql.Error as e:
            print("Error connecting to MySQL", e)
        try:
            with connection.cursor() as cursor:
                cursor.execute(queries.get_balance)
                result = cursor.fetchall()
                return result
        except pymysql.Error as e:
            raise e


    def update_balance(self, balance):
        try:
            connection = pymysql.connect(
            host='localhost',
            user='root',
            password="",
            db="bank_app",
            charset="utf8",
            cursorclass=pymysql.cursors.DictCursor
            )
        except pymysql.Error as e:
            print("Error connecting to MySQL", e)
        try:
            with connection.cursor() as cursor:
                cursor.execute(queries.update_balance, [balance])
                connection.commit()
        except pymysql.Error as e:
            raise e

    def get_transactions_from_db(self):
        try:
                connection = pymysql.connect(
                host='localhost',
                user='root',
                password="",
                db="bank_app",
                charset="utf8",
                cursorclass=pymysql.cursors.DictCursor
                )
        except pymysql.Error as e:
            print("Error connecting to MySQL", e)
        try:
            with connection.cursor() as cursor:
                cursor.execute(queries.all_transactions)
                result = cursor.fetchall()
                return result
        except pymysql.Error as e:
            raise e

    def get_breakdown_from_db(self):
        try:
                connection = pymysql.connect(
                host='localhost',
                user='root',
                password="",
                db="bank_app",
                charset="utf8",
                cursorclass=pymysql.cursors.DictCursor
                )
        except pymysql.Error as e:
            print("Error connecting to MySQL", e)
        try:
            with connection.cursor() as cursor:
                cursor.execute(queries.breakdown_by_category)
                result = cursor.fetchall()
                return result
        except pymysql.Error as e:
            raise e

    def delete_transaction(self, id):
        try:
                connection = pymysql.connect(
                host='localhost',
                user='root',
                password="",
                db="bank_app",
                charset="utf8",
                cursorclass=pymysql.cursors.DictCursor
                )
        except pymysql.Error as e:
            print("Error connecting to MySQL", e)
        try:
            with connection.cursor() as cursor:
                cursor.execute(queries.delete_transaction, [id])
                connection.commit()
        except pymysql.Error as e:
            raise e

    def add_transaction(self, amount, category, vendor):
        try:
                connection = pymysql.connect(
                host='localhost',
                user='root',
                password="",
                db="bank_app",
                charset="utf8",
                cursorclass=pymysql.cursors.DictCursor
                )
        except pymysql.Error as e:
            print("Error connecting to MySQL", e)
        try:
            with connection.cursor() as cursor:
                cursor.execute(queries.add_transaction, (amount, category, vendor))
                connection.commit()
        except pymysql.Error as e:
            raise e

