/**
 * ── Skills Data ──
 *
 * TODO: To add a new category, add a new object to the array below.
 * TODO: To add a skill to an existing category, append to its `items` array.
 *
 * Skills are rendered as elegant badges in the Skills section.
 */

export interface SkillCategory {
  name: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    name: 'Programming',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C/C++', 'SQL'],
  },
  {
    name: 'Backend',
    items: ['FastAPI', 'Node.js', 'Express', 'Django', 'REST APIs', 'GraphQL'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Pinecone', 'FAISS'],
  },
  {
    name: 'AI / ML',
    items: [
      'TensorFlow',
      'PyTorch',
      'LangChain',
      'Hugging Face',
      'Scikit-learn',
      'LSTM',
      'Transformers',
    ],
  },
  {
    name: 'Cloud & DevOps',
    items: ['Docker', 'AWS', 'GCP', 'GitHub Actions', 'CI/CD', 'Linux'],
  },
  {
    name: 'Developer Tools',
    items: ['Git', 'VS Code', 'Postman', 'Jupyter', 'Figma'],
  },

  /* ── TODO: Add more skill categories here ── */
];
