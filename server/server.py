import uvicorn
from fastapi import FastAPI
from routers import breakdown, transoctions

app = FastAPI()

app.include_router(transoctions.router)
app.include_router(breakdown.router)


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)