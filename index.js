const pdf = require('pdf-parse');
const fs = require('fs');

async function extractTextFromPDF(base64PDF) {
  // Convert the base64 encoded PDF to a buffer
  const buffer = new Buffer.from(base64PDF, 'base64');

  // Save the buffer as a temporary .pdf file
  const tempPDFPath = './temp.pdf';
  fs.writeFileSync(tempPDFPath, buffer);

  // Parse the PDF and extract the text content
  const data = await pdf(fs.readFileSync(tempPDFPath));
  
  // Clean up the temporary PDF file
  fs.unlinkSync(tempPDFPath);

  return data.text;
}

// Example usage
const base64PDF = '<base64-encoded-pdf>';
const textContent = await extractTextFromPDF(base64PDF);
console.log(textContent);
