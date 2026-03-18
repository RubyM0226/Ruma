from fastapi import FastAPI
from motor.motor_asyncio import AsyncIOMotorClient
from typing import List, Optional
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Use your Atlas URI here
client = AsyncIOMotorClient("mongodb+srv://ellynr216_db_user:MongoDB@winghacks2026.3f8cee8.mongodb.net/")
db = client.gatorfamily_db

class Clinic(BaseModel):
    name: str
    lat: float
    lng: float
    type: str
    medicaid: bool
    family_restroom: bool
    description: str

class Product(BaseModel):
    name: str
    price: float
    store: str
    brand: str
    category: str

@app.get("/clinics", response_model=List[Clinic])
async def get_clinics():
    return await db.clinics.find().to_list(100)

@app.get("/products", response_model=List[Product])
async def get_products():
    return await db.products.find().to_list(100)