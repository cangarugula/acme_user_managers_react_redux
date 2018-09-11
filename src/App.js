import React, {Component} from 'react'
import axios from 'axios'
import store, {getAllUsers, getAllManagers} from './store'
import Nav from './Nav'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  async componentDidMount() {
    try {

      this.unsubscribe = store.subscribe(() => this.setState(store.getState()))

      const users = await axios.get('/api/users')
      store.dispatch(getAllUsers(users.data))

      let managerIds = []
      users.data.forEach(user => {
        if(user.managerId) {
          managerIds.push(user.managerId)
        }
      })
      const [...managers] = await Promise.all(managerIds.map(manager => axios.get(`/api/users/${manager}`)))
      store.dispatch(getAllManagers(managers.map(manager => manager.data)))

    } catch (err) {
      console.log(err)
    }

  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render(){
    const {users, managers} = this.state

    return(
      <div>
        <Nav users={users} managers={managers} />
      </div>
    )
  }
}

export default App
