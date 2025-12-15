import requests
import json
from datetime import datetime
from app.config.db import chat_collection

# Load training data
with open("data/train_data.json", "r", encoding="utf-8") as f:
    TRAIN_DATA = json.load(f)

def find_related_knowledge(question):
    question = question.lower()
    for item in TRAIN_DATA:
        if item["title"].lower() in question:
            return item["content"]
    return ""

def chat_with_ai(user_id, message):
    extra_knowledge = find_related_knowledge(message)

    prompt = f"""
You are an AI Tour Guide for Siem Reap, Cambodia.

Here is your training data:
{extra_knowledge}

User Question:
{message}
"""

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3.2:3b",
            "prompt": prompt,
            "stream": False
        }
    )

    reply = response.json()["response"]

    # ✅ Save chat to MongoDB
    chat_collection.insert_one({
        "userId": user_id,
        "message": message,
        "reply": reply,
        "createdAt": datetime.utcnow()
    })

    return reply
