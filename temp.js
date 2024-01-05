const express = require('express');
const OpenAI = require('openai');
const app = express();

app.use(express.json());

const openai = new OpenAI({
    apiKey: "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"
})

app.get('/open',async (req, res) => {
    const result = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{"role": 'user', "content": 'hello ChatGPT!'}],
        max_tokens: 100
    })
})

app.listen(3000,() =>{
    console.log("server started");
})