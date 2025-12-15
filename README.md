# Siem Reap Smart Tourism Platform

## Overview
This project is a mobile backend system built using a **microservices and distributed system architecture**.
Each service is containerized using **Docker** and orchestrated with **Docker Compose**.

## Architecture
- Microservice-based architecture
- Distributed system using REST APIs
- Docker containerization
- Cloud-ready design

## Services
### 1. Auth Service
- Technology: Node.js + Express
- Responsibilities: Login, Register, JWT authentication
- Port: 5001

### 2. Favorite Service
- Technology: Node.js + Express
- Responsibilities: Manage user favorite places
- Port: 5002

### 3. AI Service
- Technology: Python + FastAPI
- Responsibilities: AI Tour Guide (LLM-based)
- Port: 5003

## Docker
Each service has its own Dockerfile.
All services are managed using docker-compose.

### Run the system
```bash
docker compose up --build
