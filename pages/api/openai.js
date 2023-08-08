const OpenAI = require('openai-api');

export default async (req, res) => {
  if (req.method === 'OPTIONS') {
    return res.status(200).send({message: "OK"});
  }
  if (req.method === 'POST') {
    const { name } = req.body;
    console.log("Received name:", name);
    let prompt = `Current inventory of food at the foodbank. Here is the list, cater the recipe to number of people, age and BMI: ${name}\n\n RECIPE NAME: \n\nRECIPE STEPS: \n\nNUTRITION FACTS: `;
    // console.log(prompt);
    const openai = new OpenAI(process.env.OPENAI_API_KEY);
    const gptResponse = await openai.complete({
      engine: 'text-davinci-003',
      prompt: prompt,
      maxTokens: 2000, // Adjust this value based on the model's token limit
      temperature: 0.6, // Lower values like 0.6 provide a good balance of creativity and coherence
      //topP: 0.7, // Higher values like 0.7 allow for more randomness and creativity
      //frequencyPenalty: 0.4, // Adjust if you want to encourage or discourage repetition
      //presencePenalty: 0.4, // Adjust if you want to encourage or discourage generating similar responses
      //n: 1 // Generate a single response
    });

    res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
  } else {
    res.status(400).json({text: "Invalid request method"})
  }


}