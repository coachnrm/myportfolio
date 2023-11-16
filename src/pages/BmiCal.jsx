import React from 'react'
import { useRef, useState } from 'react'
import Nav from '../components/Nav'

const BmiCal = () => {
    const [bmi, setBmi] = useState(0)
    const heightRef = useRef(null)
    const weightRef = useRef(null)

    const calculateBmi = () => {
        const weight = weightRef.current.value
        const height = heightRef.current.value

        const bmi = Number(weight) / (Number(height/100)** 2)
        setBmi(bmi)
    }
        return (
    <>
    <Nav />
    <h1>BMI Calculator</h1>
      <p>โปรแกรมคำนวณค่าดัชนีมวลกาย - BMI</p>

      <label htmlFor="weight">น้ำหนัก (kg)</label>
      <input type="number" name="weight" ref={weightRef} />
      <br/>
      <label htmlFor="height">ส่วนสูง (cm)</label>
      <input type="number" name="height" ref={heightRef} />
      <br />
      <button type="button" onClick={calculateBmi}>
        คำนวณ
      </button>

      <div className="result">
        <p>ค่า BMI คือ: {bmi.toFixed(2)}</p>
      </div>
    </>
  )
}

export default BmiCal