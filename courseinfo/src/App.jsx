const Header = (props) => {  
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  const parts = props.parts
  return (
    <>
    {parts.map(part => <Part key={part.name} part={part.name} exercise={part.exercises} />)}
    </>
  )
}

const Total = (props) => {
  const number = props.parts.map(p => p.exercises).reduce((a, b)=> a + b)
  return (
    <p>Number of exercises {number}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content 
        parts={course.parts}
      />
      <Total parts={course.parts}/>
    </div>
  )
}

export default App