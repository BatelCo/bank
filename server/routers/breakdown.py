from typing import List
from fastapi import APIRouter
from fastapi import status
from fastapi.responses import JSONResponse

router = APIRouter()

@router.get("/breakdown", status_code=status.HTTP_200_OK)
async def get_breakdown():
    return "breakdown"
    
