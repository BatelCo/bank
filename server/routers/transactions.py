from typing import List
from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from models.data_manager import DataManager

import inspect

router = APIRouter()
data_manager = DataManager()

print(inspect.getmembers(DataManager, predicate=inspect.isfunction))

@router.get("/transactions", status_code=status.HTTP_200_OK)
async def get_transactions():
    try:
        return {"transactions":(data_manager.get_transactions_from_db())}
    except Exception as e:
        return JSONResponse({"Error": e}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR) 
    

# @router.post("/transactions}", status_code=status.HTTP_200_OK)
# async def insert_transaction():


# @router.delete("/transactions}", status_code=status.HTTP_200_OK)
# async def delete_transaction():