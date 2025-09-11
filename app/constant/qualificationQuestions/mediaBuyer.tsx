export type QuestionType = 'choice' | 'multiple' | 'open' | 'yesno' | 'scale' | 'file'
export type ExperiencePath = 'experienced' | 'all'
export type CandidateLevel = 'Junior' | 'MediaBuyer' | 'Senior'

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
  acceptTypes?: string
}

export interface FormState {
  answers: Record<string, any>
  currentStep: number
  history: number[]
}

export const experienceQuestion: Question = {
  id: 'experience',
  textKey: 'media-buyer.experience.text',
  type: 'choice',
  optionsKey: 'media-buyer.experience.options',
  path: 'all'
}

export const experiencedQuestions: Question[] = [
  {
    id: 'platforms',
    textKey: 'media-buyer.platforms.text',
    type: 'multiple',
    optionsKey: 'media-buyer.platforms.options',
    path: 'experienced'
  },
  {
    id: 'niches',
    textKey: 'media-buyer.niches.text',
    type: 'multiple',
    optionsKey: 'media-buyer.niches.options',
    path: 'experienced'
  },
  {
    id: 'budget',
    textKey: 'media-buyer.budget.text',
    type: 'open',
    hintKey: 'media-buyer.budget.hint',
    path: 'experienced'
  },
  {
    id: 'proof',
    textKey: 'media-buyer.proof.text',
    type: 'file',
    hintKey: 'media-buyer.proof.hint',
    path: 'experienced',
    acceptTypes: 'image/*,.pdf'
  },
  {
    id: 'success_case',
    textKey: 'media-buyer.success_case.text',
    type: 'open',
    hintKey: 'media-buyer.success_case.hint',
    path: 'experienced'
  },
  {
    id: 'english',
    textKey: 'media-buyer.english.text',
    type: 'yesno',
    path: 'experienced'
  },
  {
    id: 'english_level',
    textKey: 'media-buyer.english_level.text',
    type: 'choice',
    optionsKey: 'media-buyer.english_level.options',
    path: 'experienced',
    condition: {
      dependsOn: 'english',
      value: true
    }
  }
]

export const getCandidateQuestions = (experienceAnswer: string): Question[] => {
  if (experienceAnswer === 'all') {
    return [experienceQuestion, ...experiencedQuestions];
  }

  if (experienceAnswer === 'Менше 1 року' || experienceAnswer === 'Less than 1 year' || experienceAnswer === 'Немає досвіду' || experienceAnswer === 'No experience') {
    return [experienceQuestion];
  }
  
  const isExperienced = [
    '1-3 роки', '3+ років',
    '1-3 years', '3+ years'
  ].includes(experienceAnswer);
  
  let questions = [experienceQuestion];
  
  if (isExperienced) {
    questions = questions.concat(experiencedQuestions);
  }
  
  return questions;
}

export const getFilteredQuestions = (allQuestions: Question[], answers: Record<string, any>): Question[] => {
  return allQuestions.filter(question => {
    if (question.condition) {
      const { dependsOn, value } = question.condition;
      const answerValue = answers[dependsOn];
      
      if (dependsOn === 'platforms') {
        if (Array.isArray(value) && Array.isArray(answerValue)) {
          return value.some(v => answerValue.includes(v));
        }
      } else if (dependsOn === 'english') {
        return answerValue === value;
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
