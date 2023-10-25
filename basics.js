config();
import {config} from "dotenv";
import { Configuration, OpenAIApi} from "openai"
const Configurtaion= new Configuration({
    apikey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(Configuration);
async function chat(input){
const message=[{role:"user",content:input}]
const response = await openai.createChatCompletion({
    mode:"gpt-3.5-turbo",
    messages:messages,
    temperature: 0,
})
return response.data.choices[0].message.content
}
const question ="what is capital of Pakistan"

chat(question)
.then((response)=>console.log(response))
.catch((error)=> console.error(error))