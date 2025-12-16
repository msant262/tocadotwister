import { useState } from 'react'
import Container from '../../components/Container/Container'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import './Quiz.css'

interface Question {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Quantos ratos Twister você deve ter no mínimo?',
    options: ['1', '2', '3', '4'],
    correct: 1,
    explanation: 'O mínimo são 2 ratos, pois são animais de colônia. Nunca tenha apenas um!'
  },
  {
    id: 2,
    question: 'Qual é o volume mínimo recomendado por rato?',
    options: ['0,3 m³', '0,5 m³', '0,7 m³', '1 m³'],
    correct: 1,
    explanation: 'O volume mínimo é 0,5 m³ (500 litros) por rato.'
  },
  {
    id: 3,
    question: 'Você pode usar aquários para ratos?',
    options: ['Sim, são seguros', 'Não, são perigosos', 'Sim, mas apenas temporariamente', 'Depende do tamanho'],
    correct: 1,
    explanation: 'Aquários são PROIBIDOS! Causam problemas de ventilação, umidade e doenças respiratórias.'
  },
  {
    id: 4,
    question: 'Qual substrato é PERIGOSO para ratos?',
    options: ['Celulose', 'Hemp', 'Maravalha de Pinus', 'Granulado de Madeira'],
    correct: 2,
    explanation: 'Maravalha de pinus contém fenóis tóxicos que causam problemas respiratórios graves.'
  },
  {
    id: 5,
    question: 'Machos podem comer cítricos?',
    options: ['Sim, sem problemas', 'Não, é tóxico', 'Sim, mas com moderação', 'Depende da quantidade'],
    correct: 1,
    explanation: 'Cítricos contêm d-limoneno, que causa danos renais em machos. Evite laranja, limão, etc.'
  },
  {
    id: 6,
    question: 'Qual é a expectativa de vida média de um rato Twister?',
    options: ['1 ano', '2-3 anos', '4-5 anos', '6-7 anos'],
    correct: 1,
    explanation: 'Ratos Twister vivem em média 2-3 anos, embora alguns possam viver até 4 anos com cuidados excelentes.'
  },
  {
    id: 7,
    question: 'O que é foraging?',
    options: [
      'Um tipo de ração',
      'Fazer ratos caçarem sua comida',
      'Um tipo de gaiola',
      'Um método de limpeza'
    ],
    correct: 1,
    explanation: 'Foraging é fazer os ratos "caçarem" sua comida ao invés de simplesmente encontrá-la em um pote.'
  },
  {
    id: 8,
    question: 'Qual é a melhor fonte de água para ratos?',
    options: [
      'Apenas potes',
      'Apenas bebedouros de bilha',
      'Bebedouros de bilha como principal',
      'Qualquer uma serve'
    ],
    correct: 2,
    explanation: 'Bebedouros de bilha são recomendados como fonte principal, pois mantêm a água limpa e higiênica.'
  }
]

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizFinished, setQuizFinished] = useState(false)

  const handleAnswer = (index: number) => {
    if (showExplanation) return
    
    setSelectedAnswer(index)
    setShowExplanation(true)
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowExplanation(false)
    setQuizFinished(false)
  }

  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100)
    let resultMessage = ''
    let resultColor = ''

    if (percentage >= 80) {
      resultMessage = 'Parabéns! Você está muito bem preparado para ter um Rato Twister! 🎉'
      resultColor = 'success'
    } else if (percentage >= 60) {
      resultMessage = 'Bom trabalho! Continue estudando e você estará pronto em breve! 📚'
      resultColor = 'warning'
    } else {
      resultMessage = 'Continue aprendendo! Leia mais sobre ratos Twister antes de adotar. 📖'
      resultColor = 'info'
    }

    return (
      <Container>
        <div className="page-header">
          <h1>Quiz: Você está pronto para ter um Twister?</h1>
        </div>

        <Card>
          <div className="quiz-result">
            <h2>Resultado do Quiz</h2>
            <div className={`result-score ${resultColor}`}>
              <p className="score-number">{score}/{questions.length}</p>
              <p className="score-percentage">{percentage}%</p>
            </div>
            <p className="result-message">{resultMessage}</p>
            <div className="result-actions">
              <Button onClick={handleRestart} size="lg">
                Fazer Quiz Novamente
              </Button>
            </div>
          </div>
        </Card>
      </Container>
    )
  }

  const question = questions[currentQuestion]

  return (
    <Container>
      <div className="page-header">
        <h1>Quiz: Você está pronto para ter um Twister?</h1>
        <p className="page-intro">
          Teste seus conhecimentos sobre criação de Ratos Twister
        </p>
      </div>

      <Card>
        <div className="quiz-progress">
          <p>Pergunta {currentQuestion + 1} de {questions.length}</p>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="quiz-question">
          <h2>{question.question}</h2>
          
          <div className="quiz-options">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === question.correct
              let className = 'quiz-option'
              
              if (showExplanation) {
                if (isCorrect) {
                  className += ' correct'
                } else if (isSelected && !isCorrect) {
                  className += ' incorrect'
                }
              } else if (isSelected) {
                className += ' selected'
              }

              return (
                <button
                  key={index}
                  className={className}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                >
                  {option}
                </button>
              )
            })}
          </div>

          {showExplanation && (
            <div className="quiz-explanation">
              <p><strong>Explicação:</strong> {question.explanation}</p>
            </div>
          )}

          <div className="quiz-actions">
            <Button onClick={handleNext} size="lg" disabled={!showExplanation}>
              {currentQuestion < questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultado'}
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  )
}

export default Quiz

