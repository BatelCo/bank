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
def delete_transactions(id):
    try:
        data_manager.delete_transaction(int(id))
        return {"deleted" : "true"}
    except Exception as e:
        return JSONResponse({"Error": e}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR) 

@router.post("/transactions", status_code=status.HTTP_201_CREATED)
async def insert_transaction(request: Request):
    try:
        add_transaction_fields = await request.json()
        data_manager.add_transaction(add_transaction_fields["amount"],
                                     add_transaction_fields["category"],
                                     add_transaction_fields["vendor"])
        return{"transaction added" : "true"}
    except Exception as e:
            return JSONResponse({"Error": e}, status_code=status.HTTP_400_BAD_REQUEST)

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
        return{"balance updated" : "true"}
    except Exception as e:
        return JSONResponse({"Error":e}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR) 
    