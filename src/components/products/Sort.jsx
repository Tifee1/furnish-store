import { BsFillGridFill, BsList } from 'react-icons/bs'

const Sort = () => {
  return (
    <section className='grid grid-cols-[1fr] im:grid-cols-[auto_auto_1fr_auto]  items-center px-4 mb-8 gap-y-3 im:gap-y-0 im:gap-x-8 im-mb-8'>
      <div className='w-[50px] im:w-auto grid grid-cols-2 gap-x-2'>
        <button className='border border-black bg-transparent h-6 w-6 flex items-center justify-center rounded-[0.25rem] cursor-pointer text-base'>
          <BsFillGridFill />
        </button>
        <button className='border border-black bg-transparent h-6 w-6 flex items-center justify-center rounded-[0.25rem] cursor-pointer text-base'>
          <BsList />
        </button>
      </div>
      <p className='capitalize tm:mb-0'>20 products found</p>
      <hr className='border-black' />
      <form>
        <label
          htmlFor='sort'
          className='text-base capitalize inline-block mr-2'
        >
          sort by
        </label>
        <select
          name='sort'
          id='sort'
          className='bg-transparent border-transparent text-base capitalize py-1 px-2'
        >
          <option value='a-z'>a-z</option>
          <option value='z-a'>z-a</option>
          <option value='lowest'>price (lowest)</option>
          <option value='highest'>price (highest)</option>
        </select>
      </form>
    </section>
  )
}
export default Sort
