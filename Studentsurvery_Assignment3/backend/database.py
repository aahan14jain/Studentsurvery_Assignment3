"""
Database Configuration and Initialization
==========================================
This module handles database connection and initialization for the survey application.
It sets up a SQLite database using SQLModel and provides a function to initialize
the database schema (create tables) on application startup.

The database file is stored in the same directory as this module using an absolute path
to ensure proper file location in both development and Docker environments.

Authors:
Aahan Jain - G01522443
Aditya Samir Vaidya - G01501989
"""

from sqlmodel import SQLModel, create_engine
import os

# Use absolute path for database file
DB_PATH = os.path.join(os.path.dirname(__file__), "surveys.db")
DATABASE_URL = f"sqlite:///{DB_PATH}"

engine = create_engine(DATABASE_URL, echo=True)


def init_db():
    SQLModel.metadata.create_all(engine)
