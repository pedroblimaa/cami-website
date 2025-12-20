export default function Location() {
  return (
    <div id="location" className='bg-gray-100 flex justify-center scroll-mt-16'>
      <div className='max-w-7xl w-full py-10 px-4 flex flex-col items-center gap-6'>
        <h2 className='text-3xl sm:text-4xl md:text-5xl font-lora text-brand'>Localização</h2>
        <div className='text-center w-full max-w-2xl md:max-w-6xl'>
          <p className='text-xl sm:text-2xl text-neutral-600'>Amor saúde - Três Corações</p>
          <div className='w-full aspect-video mt-4'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.0893762263713!2d-45.25535922396726!3d-21.699253495835404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cadd0055e479a3%3A0x344db4e9e49d2e38!2zQU1PUiBTQcOaREUgLSBUUsOKUyBDT1JBw4fDlEVT!5e0!3m2!1sen!2sbr!4v1765930514711!5m2!1sen!2sbr'
              style={{ border: 0, width: '100%', height: '100%', borderRadius: '2rem' }}
              allowFullScreen={true}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
