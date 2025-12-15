def chat_to_dict(chat):
    return {
        "userId": chat.get("userId"),
        "message": chat.get("message"),
        "reply": chat.get("reply"),
        "createdAt": chat.get("createdAt")
    }