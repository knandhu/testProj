export const createQuestion = (question) => (
    $.ajax({
        url: '/api/questions/',
        method: 'POST',
        data: { question:question }
    })
);

export const fetchQuestions = () => (
    $.ajax({
        url: '/api/questions',
        method: 'GET'
    })
);