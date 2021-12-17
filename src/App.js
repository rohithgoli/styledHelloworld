import {Heading, CustomButton} from './styledComponent'
import './App.css'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomButton type="button">Click</CustomButton>
    <CustomButton type="button" outline>
      Click
    </CustomButton>
  </>
)

export default App
