from app.services.ai_service import get_ai_response

print("Testing AI...")

reply = get_ai_response("What are the common symptoms of diabetes?")

print("Response received:")
print(repr(reply))
print("Done!")