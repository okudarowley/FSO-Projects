import React from 'react'

// returns the SingleCourse component for each element in the course array
const Course = ({ course }) => (
   <>
      {course.map(singleCourse => 
         <div key={singleCourse.id}>
            <SingleCourse singleCourse={singleCourse} />
         </div>)}
   </>
)

const SingleCourse = ({ singleCourse }) => (
   <>
      <Header head={singleCourse.name} />
      <Content parts={singleCourse.parts} />
      <Total total={singleCourse} />
   </>
)

const Header = ({ head }) => <h1>{head}</h1>

const Content = ({ parts }) => (
   <>
      {parts.map(part => 
         <div key={part.id}>
            <Part part={part} />
         </div>)}
   </>
)

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Total = ({ total }) => {
   const sumTotal = total.parts.reduce((sum, part) => {
      return sum + part.exercises
   }, 0)

   return <p><b>total of {sumTotal} exercises</b></p>
}

export default Course