# !pip install openai langchain python-dotenv

import openai # connectivity with LLM
import os # operating system variables use

from dotenv import load_dotenv, find_dotenv # .env file variable create in your operating system

_ = load_dotenv(find_dotenv()) # variable intialize

openai.api_key  = os.getenv('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')#