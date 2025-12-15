from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from app.routes.ai_routes import router as ai_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Serve Web UI
app.mount("/public", StaticFiles(directory="public"), name="public")

@app.get("/")
def root():
    return FileResponse("public/index.html")

# ✅ AI Routes
app.include_router(ai_router, prefix="/api/ai")

