import Image from '../../../Image'
const MetaItem = ({imageUrl,alt, value}) => {
  return (
    <div className='flex flex-col justify-center'>
        <Image imageUrl={imageUrl} alt={alt} className='w-6 h-6'/>
      {value}
    </div>
  )
}

export default MetaItem
