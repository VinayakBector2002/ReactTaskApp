const tasks = [
    {
        id: 1,
        text: 'Sample Text',
        day: 'Sample Date',
        reminder: true
    }
]


export const Tasks = () => {
  return (
    <>
    {tasks.map((task) => (
    <h3>
        {task.text}
    </h3>
    ))}
    </>
  )
}
