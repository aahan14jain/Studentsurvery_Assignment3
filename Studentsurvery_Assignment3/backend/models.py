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
