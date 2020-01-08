
import React from 'react';
import { Link } from 'react-router-dom';

const QuestionIndexItem = (props) => {
    return (
        <div>
            
        <li>{props.question.title}</li>
      </div>
    );
};

export default QuestionIndexItem;