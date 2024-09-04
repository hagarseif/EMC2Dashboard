import React from 'react'
import { Row } from 'reactstrap'
import IndustryForm from '../components/industry/IndustryForm'
import IndustryTabel from '../components/industry/IndustryTabel'
function industry() {
  return (
    <Row>
        <IndustryForm/>
        <IndustryTabel/>
    </Row>
  )
}

export default industry