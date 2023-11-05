import MetaItem from './components/MetaItem';
import wind from './assets/wind.svg';
import humidity from './assets/humidity.svg';
import airQuality from './assets/PM2.5.svg';
import somatosensory from './assets/somatosensory.svg'

const Meta = () => (
    <div className='flex justify-between bg-slate-50 rounded-2xl w-5/6 p-4'>
      <MetaItem  imageUrl={wind} value='9km/h' alt='wind icon'/>
      <MetaItem imageUrl={humidity} value='85%' alt='wind icon'/>
      <MetaItem imageUrl={airQuality} value='75μg' alt='wind icon'/>
      <MetaItem imageUrl={somatosensory} value='26°' alt='wind icon'/>
    </div>
  )

export default Meta
