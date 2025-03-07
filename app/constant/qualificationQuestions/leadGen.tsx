export type QuestionType = 'choice' | 'multiple' | 'open' | 'yesno' | 'scale'
export type ExperiencePath = 'experienced' | 'inexperienced' | 'all'
export type CandidateLevel = 'Junior' | 'PerspectiveJunior' | 'Experienced' | 'Senior'

export interface Question {
  id: string
  textKey: string
  type: QuestionType
  optionsKey?: string
  hintKey?: string
  path?: ExperiencePath
  condition?: {
    dependsOn: string
    value: string | string[] | boolean | number
  }
}

export interface FormState {
  answers: Record<string, any>
  currentStep: number
  history: number[]
}

export const experienceQuestion: Question = {
  id: 'experience',
  textKey: 'lead-gen.experience.text',
  type: 'choice',
  optionsKey: 'lead-gen.experience.options',
  path: 'all'
}

export const experiencedQuestions: Question[] = [
  {
    id: 'sources',
    textKey: 'lead-gen.sources.text',
    type: 'multiple',
    optionsKey: 'lead-gen.sources.options',
    path: 'experienced'
  },
  {
    id: 'telegram_experience',
    textKey: 'lead-gen.telegram_experience.text',
    type: 'open',
    hintKey: 'lead-gen.telegram_experience.hint',
    path: 'experienced',
    condition: {
      dependsOn: 'sources',
      value: ['Telegram']
    }
  },
  {
    id: 'linkedin_experience',
    textKey: 'lead-gen.linkedin_experience.text',
    type: 'open',
    hintKey: 'lead-gen.linkedin_experience.hint',
    path: 'experienced',
    condition: {
      dependsOn: 'sources',
      value: ['LinkedIn']
    }
  },
  {
    id: 'instagram_experience',
    textKey: 'lead-gen.instagram_experience.text',
    type: 'open',
    hintKey: 'lead-gen.instagram_experience.hint',
    path: 'experienced',
    condition: {
      dependsOn: 'sources',
      value: ['Instagram']
    }
  },
  {
    id: 'other_sources',
    textKey: 'lead-gen.other_sources.text',
    type: 'open',
    hintKey: 'lead-gen.other_sources.hint',
    path: 'experienced',
    condition: {
      dependsOn: 'sources',
      value: ['Other']
    }
  },
  {
    id: 'lead_strategies',
    textKey: 'lead-gen.lead_strategies.text',
    type: 'open',
    hintKey: 'lead-gen.lead_strategies.hint',
    path: 'experienced'
  },
  {
    id: 'best_result',
    textKey: 'lead-gen.best_result.text',
    type: 'open',
    hintKey: 'lead-gen.best_result.hint',
    path: 'experienced'
  },
  {
    id: 'future_goals',
    textKey: 'lead-gen.future_goals.text',
    type: 'open',
    hintKey: 'lead-gen.future_goals.hint',
    path: 'experienced'
  }
]

export const inexperiencedQuestions: Question[] = [
  {
    id: 'previous_experience',
    textKey: 'lead-gen.previous_experience.text',
    type: 'open',
    hintKey: 'lead-gen.previous_experience.hint',
    path: 'inexperienced'
  },
  {
    id: 'computer_skills',
    textKey: 'lead-gen.computer_skills.text',
    type: 'scale',
    path: 'inexperienced'
  },
  {
    id: 'ready_for_training',
    textKey: 'lead-gen.ready_for_training.text',
    type: 'yesno',
    path: 'inexperienced'
  },
  {
    id: 'motivation',
    textKey: 'lead-gen.motivation.text',
    type: 'open',
    hintKey: 'lead-gen.motivation.hint',
    path: 'inexperienced'
  },
  {
    id: 'future_goals',
    textKey: 'lead-gen.future_goals.text',
    type: 'open',
    hintKey: 'lead-gen.future_goals.hint',
    path: 'inexperienced'
  }
]

export const commonQuestions: Question[] = [
  {
    id: 'english',
    textKey: 'lead-gen.english.text',
    type: 'yesno',
    path: 'all'
  },
  {
    id: 'english_level',
    textKey: 'lead-gen.english_level.text',
    type: 'choice',
    optionsKey: 'lead-gen.english_level.options',
    path: 'all',
    condition: {
      dependsOn: 'english',
      value: true
    }
  },
  {
    id: 'age',
    textKey: 'lead-gen.age.text',
    type: 'choice',
    optionsKey: 'lead-gen.age.options',
    path: 'all'
  },
  {
    id: 'why_us',
    textKey: 'lead-gen.why_us.text',
    type: 'open',
    hintKey: 'lead-gen.why_us.hint',
    path: 'all'
  },
  {
    id: 'how_found',
    textKey: 'lead-gen.how_found.text',
    type: 'open',
    path: 'all'
  },
  {
    id: 'questions',
    textKey: 'lead-gen.questions.text',
    type: 'open',
    hintKey: 'lead-gen.questions.hint',
    path: 'all'
  }
]

export const getCandidateQuestions = (experienceAnswer: string | undefined): Question[] => {
  if (!experienceAnswer) {
    return [experienceQuestion];
  }

  const isExperienced = [
    '1-2 роки', '2-5 років', 'Більше 5 років',
    '1-2 years', '2-5 years', 'More than 5 years'
  ].includes(experienceAnswer);
  
  let questions = [experienceQuestion];
  
  if (isExperienced) {
    questions = questions.concat(experiencedQuestions);
  } else {
    questions = questions.concat(inexperiencedQuestions);
  }
  
  questions = questions.concat(commonQuestions);
  
  return questions;
}

export const getFilteredQuestions = (allQuestions: Question[], answers: Record<string, any>): Question[] => {
  return allQuestions.filter(question => {
    if (question.condition) {
      const { dependsOn, value } = question.condition;
      const answerValue = answers[dependsOn];
      
      if (dependsOn === 'sources') {
        if (Array.isArray(value) && Array.isArray(answerValue)) {
          return value.some(v => answerValue.includes(v));
        }
      } else {
        if (Array.isArray(value)) {
          return value.includes(answerValue);
        } else {
          return answerValue === value;
        }
      }
      
      return false;
    }
    
    return true;
  });
}