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
  textKey: 'cold-email.experience.text',
  type: 'choice',
  optionsKey: 'cold-email.experience.options',
  path: 'all'
}

export const experiencedQuestions: Question[] = [
  {
    id: 'tools',
    textKey: 'cold-email.tools.text',
    type: 'multiple',
    optionsKey: 'cold-email.tools.options',
    hintKey: 'cold-email.tools.hint',
    path: 'experienced'
  },
  {
    id: 'spam_avoidance',
    textKey: 'cold-email.spam_avoidance.text',
    type: 'open',
    hintKey: 'cold-email.spam_avoidance.hint',
    path: 'experienced'
  },
  {
    id: 'copywriting',
    textKey: 'cold-email.copywriting.text',
    type: 'open',
    hintKey: 'cold-email.copywriting.hint',
    path: 'experienced'
  },
  {
    id: 'metrics',
    textKey: 'cold-email.metrics.text',
    type: 'open',
    hintKey: 'cold-email.metrics.hint',
    path: 'experienced'
  },
  {
    id: 'best_result',
    textKey: 'cold-email.best_result.text',
    type: 'open',
    hintKey: 'cold-email.best_result.hint',
    path: 'experienced'
  },
  {
    id: 'future_plans',
    textKey: 'cold-email.future_plans.text',
    type: 'open',
    hintKey: 'cold-email.future_plans.hint',
    path: 'experienced'
  }
]

export const inexperiencedQuestions: Question[] = [
  {
    id: 'previous_experience',
    textKey: 'cold-email.previous_experience.text',
    type: 'open',
    hintKey: 'cold-email.previous_experience.hint',
    path: 'inexperienced'
  },
  {
    id: 'computer_skills',
    textKey: 'cold-email.computer_skills.text',
    type: 'scale',
    optionsKey: 'cold-email.computer_skills.options',
    path: 'inexperienced'
  },
  {
    id: 'training_readiness',
    textKey: 'cold-email.training_readiness.text',
    type: 'yesno',
    optionsKey: 'cold-email.training_readiness.options',
    path: 'inexperienced'
  },
  {
    id: 'goals',
    textKey: 'cold-email.goals.text',
    type: 'open',
    hintKey: 'cold-email.goals.hint',
    path: 'inexperienced'
  },
  {
    id: 'future_plans',
    textKey: 'cold-email.future_plans.text',
    type: 'open',
    hintKey: 'cold-email.future_plans.hint',
    path: 'inexperienced'
  }
]

export const commonQuestions: Question[] = [
  {
    id: 'english_level',
    textKey: 'cold-email.english_level.text',
    type: 'choice',
    optionsKey: 'cold-email.english_level.options',
    path: 'all'
  },
  {
    id: 'age',
    textKey: 'cold-email.age.text',
    type: 'choice',
    optionsKey: 'cold-email.age.options',
    path: 'all'
  }
]

export const getCandidateQuestions = (experienceAnswer: string): Question[] => {
  if (experienceAnswer === 'all') {
    return [
      experienceQuestion,
      ...experiencedQuestions,
      ...inexperiencedQuestions,
      ...commonQuestions,
    ];
  }

  if (!experienceAnswer) {
    return [experienceQuestion];
  }

  const isExperienced = ['1-2 роки', '2-5 років', 'Більше 5 років'].includes(experienceAnswer);
  
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
      
      if (dependsOn === 'tools') {
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
