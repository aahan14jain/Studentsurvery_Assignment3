from sqlmodel import SQLModel, create_engine
import os

# Use absolute path for database file
DB_PATH = os.path.join(os.path.dirname(__file__), "surveys.db")
DATABASE_URL = f"sqlite:///{DB_PATH}"

engine = create_engine(DATABASE_URL, echo=True)


def init_db():
    SQLModel.metadata.create_all(engine)
