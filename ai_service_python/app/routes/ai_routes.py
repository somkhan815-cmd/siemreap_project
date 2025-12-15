from fastapi import APIRouter
from pydantic import BaseModel
from app.services.ai_service import chat_with_ai
from app.config.db import chat_collection

router = APIRouter()

class ChatRequest(BaseModel):
    userId: str
    message: str

@router.post("/chat")
def chat(data: ChatRequest):
    reply = chat_with_ai(data.userId, data.message)
    return {"reply": reply}

@router.get("/history/{userId}")
def get_history(userId: str):
    chats = list(chat_collection.find({"userId": userId}, {"_id": 0}))
    return chats
