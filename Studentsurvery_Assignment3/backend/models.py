"""
Survey Data Model
=================
This module defines the Survey data model using SQLModel.
The Survey class represents a student survey submission with all required fields
including personal information, contact details, and survey responses.

The model is used both for database table creation and API request/response validation.
"""

from sqlmodel import SQLModel, Field
from typing import Optional

class Survey(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    first_name: str
    last_name: str
    street_address: str
    city: str
    state: str
    zip_code: str
    telephone: str
    email: str
    date_of_survey: str
    liked_most: str
    interested_in: str
    recommendation: str
