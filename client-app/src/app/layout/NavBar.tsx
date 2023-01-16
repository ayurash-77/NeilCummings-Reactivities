import { Button, Container, Menu } from 'semantic-ui-react';

interface Props {
  openForm: () => void
}

export default function NavBar({openForm}: Props) {
  return (

    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img alt="logo" src="/assets/logo.png" style={{marginRight: 10}}/>
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities"/>
        <Menu.Item>
          <Button size="small" positive content="Create Activity" onClick={openForm}/>
        </Menu.Item>
      </Container>
    </Menu>

  );
}