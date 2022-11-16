all_transactions = """
                   SELECT *
                   From transactions
                   """

insert_transaction =    """
                           INSERT into transactions (amount,category,vendor) 
                           values (%f,%s,%s)
                           """
                        
delete_transaction =    """
                            DELETE FROM transactions 
                            WHERE id = %s
                            """

breakdown_by_category = """
                            SELECT transactions.category , SUM(transactions.amount) AS total_amount
                            From transactions
                            GROUP BY transactions.category
                            """    
