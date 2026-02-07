import { useState } from 'react'

const StatisticLine = (props) => {
	const { text, value } = props;
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
}

const Statistics = (props) => {
	const { good, bad, neutral } = props;
	const totalVotes = good + bad + neutral;

	if (totalVotes === 0) {
		return <p>No feedback given</p>
	}

	return (
		<table>
			<StatisticLine text="good" value={good} />
			<StatisticLine text="neutral" value={neutral} />
			<StatisticLine text="bad" value={bad} />
			<StatisticLine text="all" value={totalVotes} />
			<StatisticLine text="average" value={(good - bad) / totalVotes} />
			<StatisticLine text="positive" value={`${good / totalVotes * 100} %`} />
		</table>
	);
}

const Button = (props) => {
	const { onClick, text } = props;
	return <button onClick={onClick}>{text}</button>
}

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)


	return (
		<div>
			<h1>give feedback</h1>
			<div>
				<Button onClick={() => setGood(good + 1)} text="good" />
				<Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
				<Button onClick={() => setBad(bad + 1)} text="bad" />
			</div>
			<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

export default App