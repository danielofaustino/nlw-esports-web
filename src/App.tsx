interface ButtonProps {
  color: string
  texto: string
  p:string
}

function Button(props: ButtonProps) {
  return (
    <button style={{ backgroundColor: props.color,padding:props.p }}>
      {props.texto}
    </button>
  )
}

function App() {

  return (
    <div>
      <Button color='red' texto="Nanai" p='5%' />
      <Button color="blue" texto="Daniel" p='2%' />
      <Button color="pink" texto="Daniel" p='2%' />
    </div>
  )
}

export default App
