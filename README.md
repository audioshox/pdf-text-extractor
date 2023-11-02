# Base64 PDF to Text Extractor

This Node.js function takes a base64 encoded PDF and extracts the text content from within the PDF.

## Installation

Before running the function, make sure you have Node.js and npm (Node Package Manager) installed on your machine. Then, follow these steps:

1. Clone or download this repository.
2. In your terminal, navigate to the project directory.
3. Run the `npm install` command to install the required dependencies.

## Usage

1. Import the `extractTextFromPDF` function into your Node.js application.
2. Invoke the function with a base64 encoded PDF.
3. Access the extracted text content as a string.

```javascript
const extractTextFromPDF = require('./extractTextFromPDF');

const base64PDF = '<base64-encoded-pdf>';
const textContent = await extractTextFromPDF(base64PDF);
console.log(textContent);
```

## Dependencies

- pdf-parse: A library to parse PDF files and extract text content. [Github](https://github.com/Niger-Volta-LTI/pdf-parse)

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more information.