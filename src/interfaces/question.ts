/** QuestionType influences how a question is asked and what kinds of answers are possible */
export type QuestionType = "multiple_choice_question" | "short_answer_question";

/** A representation of a Question in a quizzing application */
export interface Question {
    id: number;
    name: string;
    body: string;
    type: QuestionType;
    options: string[];
    expected: string;
    points: number;
    published: boolean;
}
