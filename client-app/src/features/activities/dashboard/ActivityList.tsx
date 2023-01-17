import { Button, Item, Label, Segment } from 'semantic-ui-react'
import React, { SyntheticEvent, useState } from 'react'
import { useStore } from '../../../app/stores/store'
import { observer } from 'mobx-react-lite'


export default observer(function ActivityList() {
  const [target, setTarget] = useState('')
  const {activityStore} = useStore()
  const {deleteActivity, activitiesByDate, loading} = activityStore


  const handleActivityDelete = (e: SyntheticEvent<HTMLButtonElement>, id: string) => {
    setTarget(e.currentTarget.name)
    deleteActivity(id)
  }

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.city}, {activity.venue}</div>
              </Item.Description>
              <Item.Extra>
                <Button floated="right" color="blue" content="View"
                        onClick={() => activityStore.selectActivity(activity.id)}/>
                <Button name={activity.id}
                        loading={loading && target === activity.id}
                        floated="right"
                        color="red"
                        content="Delete"
                        onClick={e => handleActivityDelete(e, activity.id)}/>
                <Label basic content={activity.category}/>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>

    </Segment>
  )
})