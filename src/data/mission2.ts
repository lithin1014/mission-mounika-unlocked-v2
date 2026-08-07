export interface Mission2Challenge {
  question: string;
  answer: string;
  hint?: string;
}

export const mission2Challenges: Mission2Challenge[] = [
  {
    question: "Decode Base64\n\nQkFWQUFBQQ==",
    answer: "BAVAAAA",
    hint: "Cybersecurity students know this encoding."
  },

  {
    question: "Decrypt Caesar Cipher\n\nLKDWHERXOLWKLQXXX",
    answer: "IHATEYOULITHINUUU",
    hint: "Shift every letter backward."
  },

  {
    question: "what is the one thing he always ask for _______' ?",
    answer: "BJ",
    hint: "He always ask for it when he is in a mood 🌚"
  }
];