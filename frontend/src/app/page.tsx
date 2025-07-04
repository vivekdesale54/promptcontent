'use client'


export default function Home(){
  return(
    <div className="min-h-screen w-[80%] mx-auto ">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* QUESTION  */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">What Content Would you like to 
            <span className="text-blue-600"> Repurpose</span> today?</h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Transform your content into engaging posts for LinkedIn, Instagram, and <br/>
                Twitter with AI-powered optimization</p>

            {/* Input and output */}
            <div className="flex sm:flex-row gap-4 max-w-10vh mx-auto mb-16">
              <div className="relative flex-1 flex items-center justify-center w-full">
                <search className="absolute left-3 top-1/2 transform -translate-y-1/2
                text-gray-400 h-5 w-5" /> 
                <input type="text"
                 className="flex flex-1 pl-10 py-6 text-lg border-2 border-gray-200
                 focus:border-blue-500 rounded-xl sm:w-full w-full"
                 placeholder="Paste your blog post, article, or any content here..." />
              </div>
              <button className="px-6 py-6 text-sm bg-blue-600 hover:bg-blue-700
              rounded-xl font-semibold text-white">Repurpose Content</button>
            </div>
        </div>
        {/* Content type Boxes */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray- mb-12">
              See your content transformed for each platform
          </h2>
          <div className="flex flex-wrap max-w-7xl mx-auto">
            {/* LinkedIn Box */}
          </div>
        </div>
      </div>
    </div>
  )
}