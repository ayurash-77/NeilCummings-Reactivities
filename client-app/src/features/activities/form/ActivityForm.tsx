import { Button, Form, Segment } from 'semantic-ui-react'
import { ChangeEvent, useEffect, useState } from 'react'
import { useStore } from '../../../app/stores/store'
import { observer } from 'mobx-react-lite'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Activity } from '../../../app/models/Activity'
import LoadingComponent from '../../../app/layout/LoadingComponent'
import { v4 as uuid } from 'uuid'


export default observer(function ActivityForm() {

  const { activityStore } = useStore()
  const { createActivity, updateActivity, loading, loadActivity, loadingInitial } = activityStore
  const { id } = useParams()

  const navigate = useNavigate()


  const [activity, setActivity] = useState<Activity>({
    id: '',
    title: '',
    date: '',
    description: '',
    category: '',
    city: '',
    venue: '',
  })

  useEffect(() => {
    if (id) {
      loadActivity(id).then(activity => setActivity(activity!))
    }
  }, [id, loadActivity])

  const handleSubmit = () => {
    if (!activity.id) {
      activity.id = uuid()
      createActivity(activity).then(() => navigate(`/activities/${activity.id}`))
    } else {
      updateActivity(activity).then(() => navigate(`/activities/${activity.id}`))
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setActivity({ ...activity, [name]: value })
  }

  if (loadingInitial) return <LoadingComponent content={'Loading activity...'}/>

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
        <Button as={Link} to={'/activities'} floated={'right'} type={'button'} content={'Cancel'}/>
      </Form>
    </Segment>
  )
})