

export class Flash{


    constructor(question, answer){

        this.question = question;
        this.answer = answer;
    }
}




let flashArray = [];
export function createFlash(newQuestion, newAnswer){



    flashArray.push(new Flash(newQuestion, newAnswer));
    return flashArray;

}