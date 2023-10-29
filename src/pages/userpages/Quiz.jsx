import React , { useState ,useEffect } from 'react'
import qiuz from '../../questions.json';


function Quiz() {
    const [questions] = useState(qiuz);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [nextQuestion, setNextQuestion] = useState({});
    const [previousQuestion, setPreviousQuestion] = useState({});
    const [answer, setAnswer] = useState('');
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [numberOfAnsweredQuestions, setNumberOfAnsweredQuestions] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState(0);
    const [hints, setHints] = useState(5);
    const [fiftyFifty, setFiftyFifty] = useState(2);
    const [usedFiftyFifty, setUsedFiftyFifty] = useState(false);
    const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
    const [previousButtonDisabled, setPreviousButtonDisabled] = useState(true);
    const [previousRandomNumbers, setPreviousRandomNumbers] = useState([]);
    const [time, setTime] = useState({});

    let interval = null;

    useEffect(() => {
        document.title = "Quiz";

        const { questions, currentQuestion, nextQuestion, previousQuestion } = state;
        displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
        startTimer();

        return () => {
            clearInterval(interval);
        };  
      }, []);

  return (
    <Fragment>
                <Container maxWidth="sm">
                    <Paper elevation={3} className="questions">
                        <Typography variant="h4">Quiz Mode</Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <div className="lifeline-container">
                                    <Button startIcon={<Highlight />} onClick={handleFiftyFifty} variant="outlined">
                                        {fiftyFifty}
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="lifeline-container">
                                    <Button startIcon={<LightbulbOutline />} onClick={handleHints} variant="outlined">
                                        {hints}
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                        <div className="timer-container">
                            <Typography variant="body2">
                                <span style={{ float: 'left' }}>{currentQuestionIndex + 1} of {numberOfQuestions}</span>
                                <span className={classnames('right valid', {
                                    'warning': time.distance <= 120000,
                                    'invalid': time.distance < 30000
                                })}>
                                    {time.minutes}:{time.seconds}
                                    <span className="mdi mdi-clock-outline mdi-24px"></span>
                                </span>
                            </Typography>
                        </div>
                        <Typography variant="h6">{currentQuestion.question}</Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Button onClick={handleOptionClick} variant="contained" className="option">
                                    {currentQuestion.optionA}
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button onClick={handleOptionClick} variant="contained" className="option">
                                    {currentQuestion.optionB}
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Button onClick={handleOptionClick} variant="contained" className="option">
                                    {currentQuestion.optionC}
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button onClick={handleOptionClick} variant="contained" className="option">
                                    {currentQuestion.optionD}
                                </Button>
                            </Grid>
                        </Grid>
                        <div className="button-container">
                            <Button
                                startIcon={<KeyboardArrowLeft />}
                                variant="outlined"
                                onClick={handleButtonClick}
                                id="previous-button"
                                className={classnames('', { 'disable': state.previousButtonDisabled })}
                            >
                                Previous
                            </Button>
                            <Button
                                endIcon={<KeyboardArrowRight />}
                                variant="outlined"
                                onClick={handleButtonClick}
                                id="next-button"
                                className={classnames('', { 'disable': state.nextButtonDisabled })}
                            >
                                Next
                            </Button>
                            <Button
                                startIcon={<ExitToApp />}
                                onClick={handleButtonClick}
                                id="quit-button"
                            >
                                Quit
                            </Button>
                        </div>
                    </Paper>
                </Container>
            </Fragment>
  )
}

export default Quiz