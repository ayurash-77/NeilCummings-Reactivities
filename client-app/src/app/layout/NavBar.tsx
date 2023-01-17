import { Button, Container, Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store'

export default function NavBar() {
  const {activityStore} = useStore()

  return (

    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img alt="logo" src="/assets/logo.png" style={{marginRight: 10}}/>
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities"/>
        <Menu.Item>
          <Button size="small" positive content="Create Activity" onClick={() => activityStore.openForm()}/>
        </Menu.Item>
      </Container>
    </Menu>

  );
}