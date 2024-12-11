import { background, Box } from '@chakra-ui/react'
import React from 'react'
import {  WarningIcon } from '@chakra-ui/icons'
import Card from './Components/Card'

const App = () => {
  return (
    <div>
      <Box>
        welcome to chakra UI
      </Box>
      {/* <QuestionIcon /> */}
      <WarningIcon w={8} h={8} color="red.500" />
      <Card title="Chakra UI" style={{backgroundColor:"#E2E8F0"}}>
        <p>Chakra UI is a simple, modular and accessible UI component library for React.</p>
        </Card>

      <Card title="Chakra UI" style={{backgroundColor:"#718096"}}>
        <p>Chakra UI is a simple, modular and accessible UI component library for React.</p>
      </Card>


    </div>
  )
}

export default App
