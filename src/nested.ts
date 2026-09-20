import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((question) => question.published);
}

export function getNonEmptyQuestions(questions: Question[]): Question[] {
    return questions.filter(
        (question) =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0,
    );
}

export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    return questions.find((question) => question.id === id) ?? null;
}

export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter((question) => question.id !== id);
}

export function getNames(questions: Question[]): string[] {
    return questions.map((question) => question.name);
}

export function sumPoints(questions: Question[]): number {
    return questions.reduce((total, question) => total + question.points, 0);
}

export function sumPublishedPoints(questions: Question[]): number {
    return sumPoints(getPublishedQuestions(questions));
}

export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published";
    const rows = questions.map(
        (question) =>
            `${question.id},${question.name},${question.options.length},${question.points},${question.published}`,
    );

    return [header, ...rows].join("\n");
}

export function makeAnswers(questions: Question[]): Answer[] {
    return questions.map((question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false,
    }));
}

export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => ({
        ...question,
        published: true,
    }));
}

export function sameType(questions: Question[]): boolean {
    return (
        questions.length === 0 ||
        questions.every((question) => question.type === questions[0].type)
    );
}

export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    return [...questions, makeBlankQuestion(id, name, type)];
}

export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    return questions.map((question) =>
        question.id === targetId ? { ...question, name: newName } : question,
    );
}

export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    return questions.map((question) =>
        question.id === targetId ?
            {
                ...question,
                type: newQuestionType,
                options:
                    newQuestionType === "multiple_choice_question" ?
                        question.options
                    :   [],
            }
        :   question,
    );
}

export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    return questions.map((question) => {
        if (question.id !== targetId) {
            return question;
        }

        const options =
            targetOptionIndex === -1 ?
                [...question.options, newOption]
            :   question.options.map((option, index) =>
                    index === targetOptionIndex ? newOption : option,
                );

        return { ...question, options };
    });
}

export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    return questions.flatMap((question) =>
        question.id === targetId ?
            [question, duplicateQuestion(newId, question)]
        :   [question],
    );
}
