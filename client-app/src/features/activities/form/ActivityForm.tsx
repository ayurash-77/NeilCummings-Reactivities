import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/Activity'
import { ChangeEvent, useState } from 'react'

interface Props {
  activity: Activity | undefined
  closeForm: () => void
  createOrEdit: (activity: Activity) => void
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit}: Props) {

  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    date: '',
    description: '',
    category: '',
    city: '',
    venue: '',
  }

  const [activity, setActivity] = useState(initialState)

  const handleSubmit = () => {
    createOrEdit(activity)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setActivity({...activity, [name]: value})
  }

  return (
    <Segment clearing>
      <Form autoComplete={'off'} onSubmit={handleSubmit}>
        <Form.TextArea placeholder={'Title'} name={'title'} value={activity.title} onChange={handleInputChange}/>
        <Form.TextArea placeholder={'Description'} name={'description'} value={activity.description} onChange={handleInputChange}/>
        <Form.TextArea placeholder={'Category'} name={'category'} value={activity.category} onChange={handleInputChange}/>
        <Form.TextArea placeholder={'Date'} name={'date'} value={activity.date} onChange={handleInputChange}/>
        <Form.TextArea placeholder={'City'} name={'city'} value={activity.city} onChange={handleInputChange}/>
        <Form.TextArea placeholder={'Venue'} name={'venue'} value={activity.venue} onChange={handleInputChange}/>
        <Button floated={'right'} type={'submit'} content={'Submit'} positive/>
        <Button floated={'right'} type={'button'} content={'Cancel'} onClick={closeForm}/>
      </Form>
    </Segment>
  )
}