import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("PUTER_AUTH_TOKEN"),
    base_url=os.getenv("PUTER_BASE_URL"),
)

MODEL_NAME = os.getenv("MODEL_NAME", "gpt-5.4-nano")


def get_ai_response(user_message: str) -> str:
    """
    Sends a message to Puter AI and returns the response text.
    """

    response = client.chat.completions.create(
        model=MODEL_NAME,
        messages=[
            {
                "role": "system",
                "content": (
                    "You are HealthGPT, a helpful AI healthcare assistant. "
                    "Provide educational information only. "
                    "Do not diagnose diseases or replace a licensed medical professional."
                ),
            },
            {
                "role": "user",
                "content": user_message,
            },
        ],
        temperature=0.7,
    )

    return response.choices[0].message.content