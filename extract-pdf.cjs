const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const pdfPath = 'd:/TRABAJO/Currículum/Currículum - Ismael Bahmane Rodriguez.pdf';

fs.readFile(pdfPath, async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Data read');
  const parser = new PDFParse({ data });
  try {
    const result = await parser.getText();
    console.log(result.text);
    await parser.destroy();
  } catch (error) {
    console.error(error);
  }
});