export const cleanInstructions = (instructions: string): string[] => {
  return instructions.split('. ').filter(step => step.trim() !== '').map(step => step.replace(/^\d+\.\s*/, ''));
};