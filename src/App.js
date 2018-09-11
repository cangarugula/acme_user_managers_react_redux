import React, {Component} from 'react'
import axios from 'axios'
import {HashRouter as Router, Route} from 'react-router-dom'
import store, {getAllUsers, getAllManagers} from './store'
import Nav from './Nav'
import Users from './Users'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.getManager = this.getManager.bind(this)
    this.getManagers = this.getManagers.bind(this)
  }

  componentDidMount() {

    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))

    axios.get('/api/users')
    .then(response => store.dispatch(getAllUsers(response.data)))

  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  getManager(user) {
    if(user.managerId){
      const manager = this.state.users.filter(_user => _user.id === user.managerId)
      return manager[0].name
    }
  }

  getManagers(){
    const usersWithManagers = this.state.users.filter(_user => _user.managerId)
    return usersWithManagers.map(_user => this.getManager(_user))

  }

  render(){
    const {users} = this.state
    const {getManager} = this
    return(
      <Router>
        <div>
          <Nav users={users} managers={this.getManagers(users)} />
          <Route path='/users' render={()=> <Users users={users} getManager={getManager}/>}></Route>
        </div>
      </Router>
    )
  }
}

export default App
