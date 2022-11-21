from typing import List
from fastapi import APIRouter, status, Request
from fastapi.responses import JSONResponse
from models.data_manager import DataManager

router = APIRouter()
data_manager = DataManager()

@router.get("/transactions", status_code=status.HTTP_200_OK)
def get_transactions():
    try:
        return JSONResponse({"transactions" : (data_manager.get_transactions_from_db())})
    except Exception as e:
        return JSONResponse({"Error": str(e)}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR) 
    
@router.delete("/transactions/{id}", status_code=status.HTTP_202_ACCEPTED)
def delete_transaction(id):
    try:
        data_manager.delete_transaction(int(id))
        return {"deleted" : "true"}
    except data_manager.ElementNotExistError as e:
        return JSONResponse({"Error": "Transaction does not exist"}, status_code=status.HTTP_404_NOT_FOUND)

    except Exception as e:
        return JSONResponse({"Error": e}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR) 

@router.post("/transactions", status_code=status.HTTP_201_CREATED)
async def insert_transaction(request: Request):
    try:
        transaction_data = await request.json()
        new_transaction = data_manager.add_transaction(transaction_data)
        return JSONResponse({"status": "Success. Added Transaction", "transaction":new_transaction},
            status_code = status.HTTP_201_CREATED)
    except Exception as e:
            return JSONResponse({"Error": e}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR)

@router.get("/transactions/balance", status_code=status.HTTP_200_OK)
def get_balance():
    try:
        return JSONResponse({"balance" : (data_manager.get_balance_from_db())})
    except Exception as e:
        return JSONResponse({"Error": e}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR) 

@router.post("/transactions/balance", status_code=status.HTTP_200_OK)
async def update_balance(request: Request):
    try:
        value_to_update = await request.json()
        current_balance = data_manager.get_balance_from_db()[0]["amount"]
        updated_balance = current_balance + value_to_update  
        data_manager.update_balance(updated_balance)
        return JSONResponse({"status": "Success. Balance Updated", "balance":updated_balance},
            status_code = status.HTTP_201_CREATED)
    except Exception as e:
        return JSONResponse({"Error":e}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR) 
    