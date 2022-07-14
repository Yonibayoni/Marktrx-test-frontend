import './personalInfo.css'
import countries from '../../static/data/countries-code.json'

interface personInformation {
  [country: string]: any,
  name?: string,
  gender?: string,
  probability?: number
}
export type JSONData = typeof countries;

const PersonInfo = (props: personInformation) => {
  return props.loading ? <div>loading...</div> :(
    <div className="personal_info">
      <h2 className='name'>
        {props?.data?.name}
      </h2>
      {props?.data && <p className='country'> Best Chance { props?.data?.probability <= 0.6 ? 'he/she' :
        props?.data?.gender === 'male' ?
          'he' : 'she' } lives at { props?.data?.country?.[0]?.country_id }</p>}
    </div>
  )
}

export default PersonInfo