import React, { Component } from "react"
import * as actions from "../actions"
import { connect } from "react-redux"
import { Col, Row } from "react-bootstrap"
import { Lesson, Step } from "../components"
import BuyBlueprint from "./Payments/BuyBlueprint"

class Steps extends Component {
  componentDidMount() {
    const {
      user: { uid }
    } = this.props
    this.props.checkPayment(uid)
  }

  steps() {
    const { steps, user } = this.props

    if (steps === undefined) return null

    const { lessons, progress } = steps

    const stepsArray = Object.keys(lessons).map(key => {
      const newSteps = lessons[key]
      newSteps.id = key

      // find completed steps
      if (progress !== null) {
        const completed = Object.keys(progress).find(step => key === step)
        if (completed) newSteps.completed = progress[completed].completed
      }

      return newSteps
    })

    return stepsArray
  }

  countModules() {
    const steps = this.steps()

    if (steps === null) return 0

    const modules = Math.max(...steps.map(o => o.level), 0) + 1
    return modules
  }

  buildLessons() {
    const steps = this.steps()
    const modules = this.countModules()
    if (steps === null)
      return (
        <div>
          <i className="fad fa-spinner-third loading-spinner" /> Loading...
        </div>
      )

    const items = []

    for (let i = 0; i < modules; i++) {
      const lessons = steps.filter(lesson => lesson.level === i)
      const rows = lessons.map((lesson, i) => {
        return (
          <Lesson
            key={lesson.id}
            lessonI={i}
            step={lesson.id}
            content={lesson.content}
            summary={lesson.summary}
            title={lesson.title}
            video={lesson.video}
            completed={lesson.completed}
          />
        )
      })

      items.push(
        <Row key={`lesson_${i}`}>
          <Col sm={12} xs={12}>
            {rows}
          </Col>
        </Row>
      )
    }

    return items
  }

  render() {
    const numModules = this.countModules()
    const lessons = this.buildLessons()
    const {
      user: { uid }
      // payment: { course }
    } = this.props
    const course = true // giving course away for free

    return course === true ? (
      <Step numModules={numModules} lessons={lessons} />
    ) : (
      <div>
        <BuyBlueprint uid={uid} />
      </div>
    )
  }
}

Steps.defaultProps = {
  payment: {
    course: false
  }
}

const mapStateToProps = ({ payment, steps, user }) => {
  return {
    steps,
    user,
    payment
  }
}

export default connect(
  mapStateToProps,
  actions
)(Steps)
