export const GRID_SIZE = 15;

export const START = {
  x: 0,
  y: 0,
};

export const GOAL = {
  x: 14,
  y: 14,
};

export const LASERS = [
  // Entrance Trap
  { x: 2, y: 0 },
  { x: 2, y: 1 },
  { x: 2, y: 2 },
  { x: 2, y: 3 },

  // Top Right
  { x: 8, y: 1 },
  { x: 9, y: 1 },
  { x: 10, y: 1 },
  { x: 11, y: 1 },

  // Middle Horizontal
  { x: 4, y: 5 },
  { x: 5, y: 5 },
  { x: 6, y: 5 },
  { x: 7, y: 5 },
  { x: 8, y: 5 },

  // Left Wall
  { x: 1, y: 8 },
  { x: 2, y: 8 },
  { x: 3, y: 8 },
  { x: 4, y: 8 },

  // Vertical Block
  { x: 6, y: 7 },
  { x: 6, y: 8 },
  { x: 6, y: 9 },
  { x: 6, y: 10 },

  // Center Trap
  { x: 10, y: 6 },
  { x: 10, y: 7 },
  { x: 10, y: 8 },
  { x: 10, y: 9 },

  // Bottom Left
  { x: 3, y: 12 },
  { x: 4, y: 12 },
  { x: 5, y: 12 },
  { x: 6, y: 12 },

  // Near Goal
  { x: 12, y: 11 },
  { x: 12, y: 12 },
  { x: 12, y: 13 },

  { x: 13, y: 10 },
  { x: 13, y: 11 },

  { x: 9, y: 13 },
  { x: 10, y: 13 },
  { x: 11, y: 13 },
];