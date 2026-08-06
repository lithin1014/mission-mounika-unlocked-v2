export interface Mission {
  id: number;
  title: string;
  description: string;
  unlocked: boolean;
}

export const missions: Mission[] = [
  {
    id: 1,
    title: "Identity Verification",
    description: "Verify Agent Mounika",
    unlocked: true,
  },
  {
    id: 2,
    title: "Memory Decryption",
    description: "Recover hidden memories",
    unlocked: false,
  },
  {
    id: 3,
    title: "Cyber Challenge",
    description: "Complete cybersecurity mission",
    unlocked: false,
  },
  {
    id: 4,
    title: "Love Investigation",
    description: "Investigate classified feelings",
    unlocked: false,
  },
  {
    id: 5,
    title: "Secret Messages",
    description: "Decrypt secret messages",
    unlocked: false,
  },
  {
    id: 6,
    title: "Final Access Key",
    description: "Obtain the final key",
    unlocked: false,
  },
  {
    id: 7,
    title: "Mission Complete",
    description: "Unlock the classified vault",
    unlocked: false,
  },
];