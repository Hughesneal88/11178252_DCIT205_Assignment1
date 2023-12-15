// Landing Page giving information about the site
export default function Landing(){
    return(
        <div className="min-h-screen position-absolute bg-gradient-to-b from-blue-400 to-blue-900  items-center">
      <div className="mx-auto max-w-20xl py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="text-center items-center sm:mx-auto sm:w-full sm:max-w-sm">
        <a href='/'>
          <img
            className="mx-auto h-25 w-auto"
            src="/ug_standard_logo1.png"
            alt="University Logo"
            ></img></a>
            <h1 className="text-3xl font-bold tracking-tight text-white mx-auto mt-6 mb-6">Missing Grade System</h1>
        </div>
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute center-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-lg text-center items-center lg:mx-auto lg:flex-auto lg:py-32 lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Manage your grades the right way
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Start using our site today to manage, improve, and correct your grades.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-center">
              <a
                href="/login"
                className="rounded-lg w-64 bg-white px-3.5 py-2.5 text-md font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Log in
              </a>
              {/* <a href="/about" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
// bg-gradient-to-b from-neutral-900 to-indigo-600 
// bg-gradient-to-d from-cyan-500 to-blue-500