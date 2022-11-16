from typing import List
from fastapi import APIRouter, status
from fastapi.responses import JSONResponse
from models.data_manager import DataManager


router = APIRouter()
data_manager = DataManager()


@router.get("/breakdown", status_code=status.HTTP_200_OK)
async def get_breakdown():
    try:
        return {"breakdown" : (data_manager.get_breakdown_from_db())}
    except Exception as e:
        return JSONResponse({"Error": e}, status_code=status.HTTP_500_INTERNAL_SERVER_ERROR) 