import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <Link to ="/">หน้าแรก</Link>
        <Link to ="/about">เกี่ยวกับตนเอง</Link>
        <Link to ="/education">ประวัติการศึกษา</Link>
        <Link to ="/work">ประวัติการทำงาน</Link>
        <Link to ="/bmi">คำนวณ BMI</Link>
        <Link to ="/contact">ติดต่อ</Link>
    </nav>
  )
}

export default Nav