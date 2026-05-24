// src/utils/pdfParser.js
/**
 * PDF Parsing Utility
 * Extracts text and data from resume PDFs
 */

import pdfParse from 'pdf-parse';
import fs from 'fs';

/**
 * Parse PDF file and extract text
 */
export const parsePDF = async (filePath) => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);

    return {
      text: data.text,
      numPages: data.numpages,
      metadata: data.info,
    };
  } catch (error) {
    throw new Error(`Failed to parse PDF: ${error.message}`);
  }
};

/**
 * Extract skills from PDF text (basic implementation)
 * Can be enhanced with NLP in the future
 */
export const extractSkills = (text) => {
  // Common technical skills list
  const commonSkills = [
    'JavaScript',
    'Python',
    'Java',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Git',
    'HTML',
    'CSS',
    'TypeScript',
    'Vue.js',
    'Angular',
    'GraphQL',
    'REST API',
  ];

  const extractedSkills = [];
  const lowerText = text.toLowerCase();

  commonSkills.forEach((skill) => {
    if (lowerText.includes(skill.toLowerCase())) {
      extractedSkills.push(skill);
    }
  });

  return [...new Set(extractedSkills)]; // Remove duplicates
};
