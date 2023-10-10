import React from 'react';
import { useParams } from 'react-router-dom';
const Quiz = () => {
    const { quizId } = useParams();
    return (
        <div className='text-white'>
            Quiz: {quizId}
        </div>
    );
}

export default Quiz;
