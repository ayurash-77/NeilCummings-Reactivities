import { Activity } from '../../../app/models/Activity'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import React from 'react'

interface Props {
  activities: Activity[]
  selectActivity: (id: string) => void
  deleteActivity: (id: string) => void
}

export default function ActivityList({activities, selectActivity, deleteActivity}: Props) {
  return (
    <Segment>
      <Item.Group divided>
        {activities.map(activity => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>{activity.city}, {activity.venue}</div>
              </Item.Description>
              <Item.Extra>
                <Button floated="right" color="blue" content="View" onClick={() => selectActivity(activity.id)}/>
                <Button floated="right" color="red" content="Delete" onClick={() => deleteActivity(activity.id)}/>
                <Label basic content={activity.category}/>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>

    </Segment>
  )
}