# Text Counter

A simple, client-side text analysis tool - count characters, words, sentences, paragraphs, and more directly from your browser.

## Features

- **Character Count**: Count total characters (with and without spaces)
- **Word Count**: Count total words
- **Sentence Count**: Count total sentences
- **Paragraph Count**: Count total paragraphs
- **Line Count**: Count total lines
- **Reading Time**: Estimate reading time based on average reading speed
- **Speaking Time**: Estimate speaking time based on average speaking speed
- **Character Frequency**: Show most common characters
- **Word Frequency**: Show most common words
- **Real-time Analysis**: Results update as you type
- **Copy to Clipboard**: One-click copy functionality
- **Dark/Light Mode**: Toggle between themes
- **100% Client-side**: All processing happens in your browser, no data sent to any server

## Usage

1. Enter or paste your text in the input field
2. View real-time statistics as you type
3. Click the copy button to copy the text to clipboard

## Features in Detail

### Text Statistics
- **Characters (with spaces)**: Total character count including spaces
- **Characters (without spaces)**: Total character count excluding spaces
- **Words**: Total word count (separated by whitespace)
- **Sentences**: Total sentence count (ending with . ! or ?)
- **Paragraphs**: Total paragraph count (separated by blank lines)
- **Lines**: Total line count

### Time Estimates
- **Reading Time**: Estimated time to read the text (based on 200 words per minute)
- **Speaking Time**: Estimated time to speak the text (based on 150 words per minute)

### Frequency Analysis
- **Top Characters**: Most frequently used characters (excluding spaces)
- **Top Words**: Most frequently used words (case-insensitive)

### Copy Functionality
- One-click copy to clipboard
- Visual feedback on successful copy

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (ES6+)
- Local Storage for theme persistence

## Browser Support

Works in all modern browsers that support:
- CSS Grid
- CSS Variables
- ES6 Classes
- Clipboard API

## License

MIT License

## Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## Demo

[https://herusdianto.github.io/text-counter/](https://herusdianto.github.io/text-counter/)
