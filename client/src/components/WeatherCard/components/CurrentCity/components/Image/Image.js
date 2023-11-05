const Image = ({ imageUrl, alt, className}) => {
  return (
    <img
    src={imageUrl}
    alt={alt}
    className={className}
    />
  )
}

export default Image
