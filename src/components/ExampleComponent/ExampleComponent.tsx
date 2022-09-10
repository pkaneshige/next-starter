type ExampleComponentProps = {
  title: string
  text: string
}

const ExampleComponent = ({ title, text }: ExampleComponentProps) => {
  return (
    <div>
      <h1 className="text-3xl mb-4">{title ? title : 'Placeholder title'}</h1>
      <p>{text ? text : 'Placeholder text'}</p>
    </div>
  )
}

export default ExampleComponent
