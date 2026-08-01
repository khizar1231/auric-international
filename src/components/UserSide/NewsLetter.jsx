import React from 'react'

const NewsLeteerBox = (e) => {
    const onSubmitHandler = ()=>{
      e.preventDefault();
      
    }
  return (
    <div className='text-center'>
        <p className='text-xl font-bold text-gray-800'>Stay Updated with Auric International</p>
        <p className='text-gray-500 mt-3 max-w-2xl mx-auto'>Subscribe to receive updates on our latest  collections,
   and manufacturing services.</p>
        <form
  onSubmit={onSubmitHandler}
  className="sm:w-150 w-90 flex items-center gap-3 mx-auto my-8 border rounded-lg overflow-hidden shadow-sm"
>
  <input
    className="w-full px-4 py-4 outline-none"
    type="email"
    placeholder="Enter your business email"
    required
  />

  <button
    type="submit"
    className="bg-orange-500 hover:bg-black transition duration-300 text-white px-8 py-4 font-semibold"
  >
    Subscribe
  </button>
</form>
    </div>
  )
}

export default NewsLeteerBox