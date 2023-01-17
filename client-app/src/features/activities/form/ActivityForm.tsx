import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/Activity'
import { ChangeEvent, useState } from 'react'

interface Props {
  activity: Activity | undefined
  closeForm: () => void
  createOrEdit: (activity: Activity) => void
  submitting: boolean
}

export default function ActivityForm({activity: selectedActivity, closeForm, createOrEdit, submitting}: Props) {

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
        <Form.Input placeholder={'Title'} name={'title'} value={activity.title} onChange={handleInputChange}/>
        <Form.TextArea placeholder={'Description'} name={'description'} value={activity.description} onChange={handleInputChange}/>
        <Form.Input placeholder={'Category'} name={'category'} value={activity.category} onChange={handleInputChange}/>
        <Form.Input placeholder={'Date'} name={'date'} type={'date'} value={activity.date} onChange={handleInputChange}/>
        <Form.Input placeholder={'City'} name={'city'} value={activity.city} onChange={handleInputChange}/>
        <Form.Input placeholder={'Venue'} name={'venue'} value={activity.venue} onChange={handleInputChange}/>
        <Button floated={'right'} type={'submit'} content={'Submit'} loading={submitting} positive/>
        <Button floated={'right'} type={'button'} content={'Cancel'} onClick={closeForm}/>
      </Form>
    </Segment>
  )
}