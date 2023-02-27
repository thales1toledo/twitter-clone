import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"
import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Não concordo...'])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  return (
    <main className="status">

      <Header title="Tweet" />

      <Tweet content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt assumenda eos quas deleniti suscipit perferendis numquam unde, cumque voluptatem incidunt ullam cupiditate, consectetur eum expedita ad iste earum facilis delectus!" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form" >
        <label htmlFor="tweet">
          <img src="https://github.com/thales1toledo.png" alt="Thales Toledo" />
          <textarea id="tweet" placeholder="Tweet your answer" value={newAnswer} onChange={(event) => {
            setNewAnswer(event.target.value)
          }} />
        </label>
        <button type="submit"> <PaperPlaneRight /> <span>Answer</span></button>
      </form>


      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />
      })}

    </main>
  )
}