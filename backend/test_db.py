print("Starting test...")

from app.database.database import engine

print("Engine created...")

try:
    with engine.connect():
        print("✅ PostgreSQL connection successful!")
except Exception as e:
    print("❌ Connection failed:")
    print(repr(e))

print("Finished.")