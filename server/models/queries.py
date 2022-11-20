all_transactions = """
                   SELECT *
                   From transactions;
                   """

add_transaction = """
                  INSERT into transactions (amount,category,vendor) 
                  values (%s,%s,%s);
                  """
                        
delete_transaction = """
                     DELETE FROM transactions 
                     WHERE id = '%s' LIMIT 1;
                     """

breakdown_by_category = """
                        SELECT transactions.category , SUM(transactions.amount) AS total_amount
                        From transactions
                        GROUP BY transactions.category;
                        """    