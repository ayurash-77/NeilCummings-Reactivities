import { Button, Form, Segment } from 'semantic-ui-react'
import { ChangeEvent, useState } from 'react'
import { useStore } from '../../../app/stores/store'
import { observer } from 'mobx-react-lite'


export default observer(function ActivityForm() {

  const {activityStore} = useStore()
  const {selectedActivity, closeForm, createActivity, updateActivity, loading} = activityStore

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
    activity.id ? updateActivity(activity) : createActivity(activity)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target
    setActivity({...activity, [name]: value})
  }

  return (
    <Segment clearing>
      <Form autoComplete={'off'} onSubmit={handleSubmit}>
        <Form.Input placeholder={'Title'} name={'title'} value={activity.title} onChange={handleInputChange}/>
        <Form.TextArea placeholder={'Description'} name={'description'} value={activity.description}
                       onChange={handleInputChange}/>
        <Form.Input placeholder={'Category'} name={'category'} value={activity.category} onChange={handleInputChange}/>
        <Form.Input placeholder={'Date'} name={'date'} type={'date'} value={activity.date}
                    onChange={handleInputChange}/>
        <Form.Input placeholder={'City'} name={'city'} value={activity.city} onChange={handleInputChange}/>
        <Form.Input placeholder={'Venue'} name={'venue'} value={activity.venue} onChange={handleInputChange}/>
        <Button floated={'right'} type={'submit'} content={'Submit'} loading={loading} positive/>
        <Button floated={'right'} type={'button'} content={'Cancel'} onClick={closeForm}/>
      </Form>
    </Segment>
  )
})