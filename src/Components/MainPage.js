import React, { Component } from 'react'
import { connect } from "react-redux"

class MainPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ""
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleClick = (e) => {
    if (e.target.name === "delete") {
      console.log(e.target.id)
      this.props.delete(e.target.id)
    }
    else {
      this.props.postData(this.state.value)
      this.setState({ value: "" })
    }
  }

  componentDidMount() {
    this.props.showData()
  }

  render() {
    return (
      <div>
        <label>Write a title :</label>
        <input onChange={this.handleChange} value={this.state.value}></input>
        <button onClick={this.handleClick}>Add a list</button>
        <div>
          {
            this.props.value ?
              this.props.value.map((i, index) => {
                return <div key={(index + 1).toString()
                }>
                  <p>{index + 1}.{i.title} <button name="delete" id={index + 1} onClick={this.handleClick}>delete</button></p>

                </div>
              }) : ""
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { value: state.value }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showData: () => dispatch({ type: "GET_DATA" }),
    postData: (list) => dispatch({ type: "POST_DATA", list }),
    delete: (id) => dispatch({ type: "DELETE_DATA", id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
