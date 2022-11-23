import StarRatings from 'react-star-ratings'

const Stars = ({ reviews, stars }) => {
  return (
    <article className='my-5 grid grid-cols-2 w-[350px] items-center'>
      <div>
        <StarRatings
          rating={stars}
          starRatedColor='#FDCC0D'
          starDimension='1.5rem'
          starSpacing='2px'
          numberOfStars={5}
        />
      </div>
      <p>({reviews} customer reviews)</p>
    </article>
  )
}
export default Stars
