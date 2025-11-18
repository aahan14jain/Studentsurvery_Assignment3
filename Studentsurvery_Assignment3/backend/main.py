"""
Student Survey Backend API
==========================
This module implements a FastAPI REST API for managing student survey submissions.
It provides endpoints for creating, reading, updating, and deleting survey records.

Features:
- POST /survey - Create a new survey submission
- GET /surveys - Retrieve all survey submissions
- GET /survey/{id} - Retrieve a specific survey by ID
- PUT /survey/{id} - Update an existing survey
- DELETE /survey/{id} - Delete a survey

The API uses SQLModel for database operations and includes CORS middleware
to allow cross-origin requests from the frontend application.

Authors:
Aahan Jain - G01522443
Aditya Samir Vaidya - G01501989
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, select

from database import engine, init_db
from models import Survey


app = FastAPI()

# Configure CORS
# Allow all origins for Kubernetes deployment
# In production, you may want to restrict this to specific domains
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for Kubernetes
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Initialize DB when API starts
@app.on_event("startup")
def on_startup():
    init_db()


@app.get("/")
def root():
    return {"message": "Student Survey Backend Running"}


# POST: Save a new survey
@app.post("/survey")
def create_survey(survey: Survey):
    with Session(engine) as session:
        session.add(survey)
        session.commit()
        session.refresh(survey)
        return survey


# GET: Return all surveys
@app.get("/surveys")
def get_surveys():
    with Session(engine) as session:
        statement = select(Survey)
        results = session.exec(statement).all()
        return results


# GET: Return a single survey by ID
@app.get("/survey/{survey_id}")
def get_survey(survey_id: int):
    with Session(engine) as session:
        survey = session.get(Survey, survey_id)
        if not survey:
            raise HTTPException(status_code=404, detail="Survey not found")
        return survey


# PUT: Update a survey by ID
@app.put("/survey/{survey_id}")
def update_survey(survey_id: int, survey_update: Survey):
    with Session(engine) as session:
        survey = session.get(Survey, survey_id)
        if not survey:
            raise HTTPException(status_code=404, detail="Survey not found")
        
        # Update all fields from survey_update
        survey.first_name = survey_update.first_name
        survey.last_name = survey_update.last_name
        survey.street_address = survey_update.street_address
        survey.city = survey_update.city
        survey.state = survey_update.state
        survey.zip_code = survey_update.zip_code
        survey.telephone = survey_update.telephone
        survey.email = survey_update.email
        survey.date_of_survey = survey_update.date_of_survey
        survey.liked_most = survey_update.liked_most
        survey.interested_in = survey_update.interested_in
        survey.recommendation = survey_update.recommendation
        
        session.add(survey)
        session.commit()
        session.refresh(survey)
        return survey


# DELETE: Delete a survey by ID
@app.delete("/survey/{survey_id}")
def delete_survey(survey_id: int):
    with Session(engine) as session:
        survey = session.get(Survey, survey_id)
        if not survey:
            raise HTTPException(status_code=404, detail="Survey not found")
        session.delete(survey)
        session.commit()
        return {"message": "Survey deleted successfully", "id": survey_id}
