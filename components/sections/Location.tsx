export default function Location() {
  return (
    <div className='bg-gray-100 flex justify-center'>
      <div className='max-w-7xl w-full py-10 flex flex-col items-center gap-10'>
        <h2 className='text-5xl font-lora text-brand'>Localização</h2>
        <div className='text-center w-full'>
          <p className='text-2xl text-neutral-600'>Amor saúde - Três Corações</p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3707.0893762263713!2d-45.25535922396726!3d-21.699253495835404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cadd0055e479a3%3A0x344db4e9e49d2e38!2zQU1PUiBTQcOaREUgLSBUUsOKUyBDT1JBw4fDlEVT!5e0!3m2!1sen!2sbr!4v1765930514711!5m2!1sen!2sbr'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full rounded-4xl mt-4 h-140'
          ></iframe>
        </div>
      </div>
    </div>
  )
}
