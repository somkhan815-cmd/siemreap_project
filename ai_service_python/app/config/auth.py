from jose import jwt
from fastapi import Header, HTTPException

JWT_SECRET = "super_secret_key"  # MUST MATCH auth_service JWT secret
ALGORITHM = "HS256"

def verify_token(authorization: str = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="Token missing")

    try:
        token = authorization.replace("Bearer ", "")
        payload = jwt.decode(token, JWT_SECRET, algorithms=[ALGORITHM])
        return payload["id"]  # userId from token

    except Exception:
        raise HTTPException(status_code=401, detail="Invalid token")
