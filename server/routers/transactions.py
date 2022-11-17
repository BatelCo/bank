from typing import List
from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from models.data_manager import DataManager

router = APIRouter()
data_manager = DataManager()

@router.get("/transactions", status_code=status.HTTP_200_OK)
def get_transactions():
    try:
        return JSONResponse({"transactions" : (data_manager.get_transactions_from_db())})
    except Exception as e:
        return JSONResponse({"Error": e}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR) 
    
@router.delete("/transactions/{id}", status_code=status.HTTP_202_ACCEPTED)
def delete_transactions(id):
    try:
        data_manager.delete_transaction(int(id))
        return {"deleted" : "true"}
    except Exception as e:
        return JSONResponse({"Error": e}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR) 

# @router.post("/transactions}", status_code=status.HTTP_200_OK)
# async def insert_transaction():


# @router.delete("/transactions}", status_code=status.HTTP_200_OK)
# async def delete_transaction():