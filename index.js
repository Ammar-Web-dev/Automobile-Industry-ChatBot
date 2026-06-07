async function GetCHatBotResponse() {
  const queryRef = document.getElementById("query").value;
  const query = queryRef;
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
    {
      method: "POST",
      headers: {
        "x-goog-api-key":
          "AQ.Ab8RN6JkCoI1Ael_fOar-glCPbmVaI-4Hl697qKf1xalAzZ4-A",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        system_instruction: {
          parts: [
            {
              text: "You are an automobile industry expert. Answer only automobile-related questions. If the user asks anything unrelated to automobiles, vehicles, EVs, trucks, engines, maintenance, manufacturing, or transportation, reply exactly: Sorry, I can only assist with automobile-related topics.",
            },
          ],
        },
        contents: [
          {
            parts: [
              {
                text: query,
              },
            ],
          },
        ],
      }),
    },
  );
  const responseJSON = await response.json();
  const Aianswer = responseJSON.candidates[0].content.parts[0].text;
  const AnswerRef = document.getElementById("response");
  AnswerRef.innerHTML = Aianswer;
  console.log(responseJSON);
}
