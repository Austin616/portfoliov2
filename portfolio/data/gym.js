export const gymStats = {
  personalRecords: {
    bench: { weight: 315, unit: 'lbs', date: '2024-01-15' },
    squat: { weight: 425, unit: 'lbs', date: '2024-02-20' },
    deadlift: { weight: 455, unit: 'lbs', date: '2024-03-10' },
    overhead: { weight: 185, unit: 'lbs', date: '2024-01-30' },
  },
  currentStats: {
    bodyweight: { weight: 175, unit: 'lbs' },
    bodyfat: { percentage: 12 },
    yearsTraining: 4.5,
    totalLifted: '2,150,000',
  },
  weeklySchedule: {
    frequency: '5-6 sessions/week',
    avgDuration: '90 minutes',
    restDays: 1,
    activeRecovery: 'Light cardio & stretching',
  }
};

export const workoutSplit = {
  'Push (Chest, Shoulders, Triceps)': {
    primary: ['Bench Press', 'Incline Dumbbell Press', 'Overhead Press'],
    secondary: ['Lateral Raises', 'Dips', 'Tricep Extensions'],
    duration: '90 min',
    frequency: '2x/week',
  },
  'Pull (Back, Biceps)': {
    primary: ['Deadlift', 'Pull-ups', 'Barbell Rows'],
    secondary: ['Face Pulls', 'Bicep Curls', 'Hammer Curls'],
    duration: '85 min',
    frequency: '2x/week',
  },
  'Legs (Quads, Hamstrings, Glutes)': {
    primary: ['Squat', 'Romanian Deadlift', 'Bulgarian Split Squats'],
    secondary: ['Leg Curls', 'Calf Raises', 'Hip Thrusts'],
    duration: '100 min',
    frequency: '2x/week',
  },
  'Arms & Accessories': {
    primary: ['Close-Grip Bench', 'Barbell Curls', 'Overhead Press'],
    secondary: ['Cable Work', 'Isolation Movements', 'Core'],
    duration: '75 min',
    frequency: '1x/week',
  },
};

export const progressData = [
  { month: 'Jan 2021', bench: 135, squat: 185, deadlift: 225, bodyweight: 150 },
  { month: 'Jul 2021', bench: 185, squat: 225, deadlift: 275, bodyweight: 155 },
  { month: 'Jan 2022', bench: 225, squat: 275, deadlift: 315, bodyweight: 160 },
  { month: 'Jul 2022', bench: 255, squat: 315, deadlift: 365, bodyweight: 165 },
  { month: 'Jan 2023', bench: 275, squat: 365, deadlift: 405, bodyweight: 170 },
  { month: 'Jul 2023', bench: 295, squat: 395, deadlift: 435, bodyweight: 172 },
  { month: 'Jan 2024', bench: 315, squat: 425, deadlift: 455, bodyweight: 175 },
];

export const fitnessGoals = {
  shortTerm: [
    { goal: 'Bench 320 lbs', target: '2024-06-01', progress: 95 },
    { goal: 'Squat 450 lbs', target: '2024-07-01', progress: 85 },
    { goal: 'Maintain 12% BF', target: 'Ongoing', progress: 100 },
  ],
  longTerm: [
    { goal: '1200 lb Total', target: '2024-12-31', progress: 75 },
    { goal: 'Compete in Powerlifting', target: '2025-06-01', progress: 30 },
    { goal: 'Coach Others', target: '2025-12-31', progress: 20 },
  ],
  completed: [
    { goal: '1000 lb Total', completedDate: '2023-01-15' },
    { goal: '300 lb Bench', completedDate: '2024-01-15' },
    { goal: '400 lb Squat', completedDate: '2023-08-10' },
    { goal: '400 lb Deadlift', completedDate: '2023-06-20' },
  ],
};

export const nutritionPlan = {
  dailyCalories: 2800,
  macros: {
    protein: { grams: 175, percentage: 25 },
    carbs: { grams: 350, percentage: 50 },
    fats: { grams: 78, percentage: 25 },
  },
  meals: [
    { name: 'Breakfast', calories: 600, protein: 35 },
    { name: 'Lunch', calories: 800, protein: 45 },
    { name: 'Pre-workout', calories: 300, protein: 15 },
    { name: 'Post-workout', calories: 400, protein: 40 },
    { name: 'Dinner', calories: 700, protein: 40 },
  ],
  supplements: [
    'Whey Protein', 'Creatine Monohydrate', 'Multivitamin', 
    'Omega-3', 'Vitamin D3', 'Magnesium'
  ],
};

export const achievements = [
  {
    title: 'First 300lb Bench',
    date: '2024-01-15',
    description: 'Hit my first 300+ lb bench press after 3+ years of training',
    milestone: true,
  },
  {
    title: '1000lb Total Club',
    date: '2023-01-15',
    description: 'Reached combined total of 1000+ lbs across the big three lifts',
    milestone: true,
  },
  {
    title: 'Consistent Training',
    date: 'Ongoing',
    description: '4+ years of consistent training with minimal missed sessions',
    milestone: false,
  },
  {
    title: 'Body Recomposition',
    date: '2022-12-01',
    description: 'Successfully gained 25lbs while maintaining low body fat',
    milestone: false,
  },
];

export const favoriteLiftAnalysis = {
  bench: {
    whyFavorite: 'Upper body power display, technical challenge',
    keyTechnique: 'Leg drive, tight back, controlled descent',
    commonMistakes: 'Bouncing off chest, poor bar path',
    progressTips: 'Pause bench, close-grip variations, tricep strength',
  },
  squat: {
    whyFavorite: 'Full-body movement, builds overall strength',
    keyTechnique: 'Hip hinge, knee tracking, core bracing',
    commonMistakes: 'Knee valgus, forward lean, shallow depth',
    progressTips: 'Box squats, front squats, mobility work',
  },
  deadlift: {
    whyFavorite: 'Pure strength test, incredible feeling',
    keyTechnique: 'Hip hinge, neutral spine, bar close to body',
    commonMistakes: 'Rounded back, bar drift, hyperextension',
    progressTips: 'Deficit pulls, Romanian DLs, grip strength',
  },
};
