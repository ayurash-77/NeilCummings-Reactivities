import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function NavBar() {

  return (

    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to={'/'} header>
          <img alt="logo" src="/assets/logo.png" style={{ marginRight: 10 }}/>
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to={'/activities'} name="Activities"/>
        <Menu.Item>
          <Button as={NavLink} to={'/createActivity'} size="small" positive content="Create Activity"/>
        </Menu.Item>
      </Container>
    </Menu>

  )
}