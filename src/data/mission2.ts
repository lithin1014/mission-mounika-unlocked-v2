export interface Mission2Challenge {
  question: string;
  answer: string;
  hint?: string;
}

export const mission2Challenges: Mission2Challenge[] = [
  {
    question: "Decode Base64\n\nTU9VTklLQQ==",
    answer: "MOUNIKA",
    hint: "Cybersecurity students know this encoding."
  },

  {
    question: "Decrypt Caesar Cipher\n\nPRXQLND",
    answer: "MOUNIKA",
    hint: "Shift every letter backward."
  },

  {
    question: "Who always calls you 'Agent _______' ?",
    answer: "MOUNIKA",
    hint: "It's your code name."
  }
];