const generateBtn = document.getElementById('generate-btn');
const promptOutput = document.getElementById('prompt-output');

function generateArtPrompt(theme, emotion) {
    if (!theme) {
        return "Please enter a theme to generate a prompt.";
    }
    if (!emotion) {
        return "Please enter an emotional tone to generate a prompt.";
    }

    // Basic templates for prompt generation
    const templates = [
        `Create an artwork depicting a ${theme} that evokes a feeling of ${emotion}.`,
        `Imagine a scene in a ${theme} filled with ${emotion} emotions.`,
        `Design a piece inspired by the theme '${theme}' with an emotional tone of ${emotion}.`,
        `Visualize the essence of a ${theme} at dusk, capturing the mood of ${emotion}.`,
        `Craft a mysterious artwork centered around a ${theme} that conveys ${emotion}.`,
        `Illustrate a ${theme} where the atmosphere is thick with ${emotion}.`,
        `Compose an art piece that blends the theme '${theme}' with the emotion '${emotion}'.`
    ];

    // Randomly select a template
    const randomIndex = Math.floor(Math.random() * templates.length);
    return templates[randomIndex];
}

generateBtn.addEventListener('click', () => {
    const theme = document.getElementById('theme').value.trim();
    const emotion = document.getElementById('emotion').value.trim();
    const prompt = generateArtPrompt(theme, emotion);
    promptOutput.textContent = prompt;
});
