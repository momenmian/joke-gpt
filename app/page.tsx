'use client';

import { useState } from 'react';

export default function JokeGenerator() {
  const [topic, setTopic] = useState('Office');
  const [tone, setTone] = useState('Absurd');
  const [jokeType, setJokeType] = useState('Knock-knock');
  const [temperature, setTemperature] = useState(0.7);
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false);

  const generateJoke = async () => {
    setLoading(true);
    setJoke('');

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: `Tell me a ${tone} ${jokeType} joke about ${topic}.`,
          },
        ],
      }),
    });

    const reader = response.body?.getReader();
    const decoder = new TextDecoder();
    let result = '';

    while (true) {
      const { done, value } = await reader?.read() || {};
      if (done) break;
      result += decoder.decode(value);
      setJoke((prev) => prev + decoder.decode(value));
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Joke Generator</h1>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Select Topic:</label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="Office">Office (Crypto Company)</option>
          <option value="School">School (For Kids)</option>
          <option value="Gym">Gym (Thai Boxing)</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Select Tone:</label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="Absurd">Absurd</option>
          <option value="Playful">Playful</option>
          <option value="Edgy">Edgy</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Select Joke Type:</label>
        <select
          value={jokeType}
          onChange={(e) => setJokeType(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="Knock-knock">Knock-knock</option>
          <option value="Quick-witted">Quick-witted</option>
          <option value="Short Story">Short Story</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-semibold mb-2">Select Temperature:</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={temperature}
          onChange={(e) => setTemperature(parseFloat(e.target.value))}
          className="w-full"
        />
        <span className="block text-sm mt-2">Creativity Level: {temperature}</span>
      </div>

      <button
        onClick={generateJoke}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Joke'}
      </button>

      {joke && (
        <div className="mt-6 p-4 border border-gray-300 rounded bg-gray-50">
          <h2 className="text-lg font-bold mb-2">Your Joke:</h2>
          <p>{joke}</p>
        </div>
      )}
    </div>
  );
}
