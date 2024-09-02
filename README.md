# Joke GPT

AI-Powered Joke Generator is a web application that leverages OpenAI's GPT-4 model to create personalized jokes based on user-defined parameters. Built with Next.js, TypeScript, and Tailwind CSS, this application showcases how to develop an interactive, AI-driven platform.

## Features

- Generate jokes on specific topics: Office (Crypto Company), School (For Kids), and Gym (Thai Boxing)
- Customize the joke tone: Absurd, Playful, or Edgy
- Choose from multiple joke types: Knock-knock, Quick-witted, or Short Story
- Adjust the creativity level using a temperature slider
- Real-time joke streaming for an interactive experience

## Prerequisites

Before getting started, ensure you have the following installed:
- Node.js
- npm

You will also need an OpenAI API key to utilize the GPT-4 model.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/joke-gpt.git
   cd ai-joke-generator
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

## Usage

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

3. Use the form to customize your joke:
    - Enter a topic
    - Choose a tone
    - Select a joke type
    - Adjust the creativity level
    - Click "Generate Joke"

4. The generated joke will appear in the display area below the form.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [shadcn UI](https://ui.shadcn.com/)
- [OpenAI API](https://openai.com/blog/openai-api)


### Explanation:
- **Introduction**: Provides a brief overview of the project and its purpose.
- **Features**: Lists the key functionalities of the application.
- **Prerequisites**: Details the necessary tools and an OpenAI API key.
- **Installation**: Step-by-step guide to setting up the project.
- **Usage**: Instructions on how to use the application.
- **Technologies Used**: Lists the tech stack.
- **License**: States the licensing terms.

This README should help users and contributors understand and set up your project with ease.
