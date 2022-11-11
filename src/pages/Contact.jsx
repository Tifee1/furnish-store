import Hero from '../components/Hero'

const Contact = () => {
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
      form.reset()
    }
  }
  return (
    <>
      <Hero title='contact' />
      <section className='py-12 px-6'>
        <h2 className='text-center font-bold'>contact us</h2>
        <div className='underline'></div>
        <div className='py-4'>
          <form
            action='https://formspree.io/f/xqkjwvzz'
            method='POST'
            className='grid pt-8 w-[90vw] mx-auto max-w-xl tm:max-w-3xl'
          >
            <div className='grid tm:grid-cols-2 tm:gap-2'>
              <input
                type='name'
                name='text'
                className='contact-input'
                placeholder='your name'
              />
              <input
                type='email'
                name='email'
                className='contact-input'
                placeholder='your email'
              />
            </div>
            <div className='grid tm:grid-cols-2 tm:gap-2'>
              <input
                type='text'
                name='phone number'
                className='contact-input'
                placeholder='your phone number'
              />
              <input
                type='text'
                name='subject'
                className='contact-input'
                placeholder='subject'
              />
            </div>

            <textarea
              name='message'
              className='contact-input w-full resize-none'
              rows='5'
              placeholder='your message'
            ></textarea>

            <button
              type='submit'
              className='trans bg-yel  text-white px-4 py-3 rounded-full hover:bg-yel/70'
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
export default Contact
