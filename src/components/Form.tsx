
const Form = () => {
  return (
    <div className="justify-star flex items-center lg:mt-10">
      <div className="mx-auto lg:mx-0 w-full max-w-lg dark:text-offwhite">
        <p className="mt-3">
          Email me at <a href="mailto:a.alfredops@gmail.com" ><span className=" text-accentColor dark:text-darkAccentColor">a.alfredops@gmail.com</span></a>{" "}
          or message me here:
        </p>

        <form action="" className="mt-10">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <div className="grid gap-6 sm:grid-cols-2 ">
            <div className="relative z-0 col-span-2">
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b caret-accentColor border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-accentColor focus:outline-none focus:ring-0 dark:focus:border-darkAccentColor dark:caret-darkAccentColor"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 dark:text-offwhite duration-500 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accentColor  dark:peer-focus:text-darkAccentColor">
                Your name
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <input
                type="text"
                name="email"
                className="peer block w-full appearance-none border-0 border-b caret-accentColor border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-accentColor focus:outline-none focus:ring-0  dark:focus:border-darkAccentColor dark:caret-darkAccentColor"
                placeholder=" "
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500  dark:text-offwhite duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accentColor  dark:peer-focus:text-darkAccentColor">
                Your email
              </label>
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows={5}
                className="peer block w-full appearance-none border-0 border-b caret-accentColor border-gray-500 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-accentColor focus:outline-none focus:ring-0  dark:focus:border-darkAccentColor dark:caret-darkAccentColor"
                placeholder=" "
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500  dark:text-offwhite duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-accentColor  dark:peer-focus:text-darkAccentColor">
                Your message
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="mt-8 rounded-2xl border-2 border-solid border-accentColor dark:border-darkAccentColor
                        px-4 py-2 font-semibold uppercase text-accentColor  dark:text-darkAccentColor                       
                        transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px]
                        hover:rounded-md hover:shadow-[4px_4px_0px_#24527A] dark:hover:shadow-[4px_4px_0px_#82e2c6] active:translate-x-[0px] 
                        active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form