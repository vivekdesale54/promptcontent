import React from 'react';

const Card = () => {
  return (
    // LinkedIn
    <div className="grid md:grid-cols-3 gap-18">
      <div className="h-full w-[40vh] bg-white p-auto shadow shadow-gray-500 hover:shadow-blue-500">
        <div className="flex flex-col m-5">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <div className="h-xl bg-blue-100">
                <img
                  src="icons8-linkedin-50.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </div>
              <h2 className="text-3xl">
                <span className="text-black font-bold text-lg">LinkedIn</span>
              </h2>
            </div>
            <div className="w-50 bg-gray-200 rounded-2xl text-center mt-4">
              <span className="text-black font-bold text-sm">
                Professional Tone
              </span>
            </div>
          </div>
        </div>
        <div className="m-7 bg-gray-100">
          <img src="rocket-bg.png" alt="" className="w-6 h-6 inline" />
          Just discovered an incredible insight about AI in content marketing...
          The key to successful content repurposing isn't just about changing
          formats—it's about understanding your audience on each platform. Here
          are 3 strategies that transformed our content strategy: 1️⃣
          Platform-specific optimization 2️⃣ Audience behavior analysis 3️⃣
          Engagement-driven formatting What's your biggest challenge with
          content repurposing? #ContentMarketing #AI #DigitalStrategy
        </div>
        <div className="flex text-sm text-gray-600 gap-3 ml-3 mb-0">
          <span>👍 24 reactions</span>
          <span>💬 8 comments</span>
          <span>🔄 12 reposts</span>
        </div>
      </div>
      <div className="h-full w-full bg-white p-auto shadow shadow-gray-500 hover:shadow-pink-600">
        <div className="flex flex-col m-5">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <div className="h-xl bg-pink-100">
                <img
                  src="Instagram_logo_2016.svg-removebg-preview.png"
                  alt="LinkedIn"
                  className="w-8 h-8"
                />
              </div>
              <h2 className="text-3xl">
                <span className="text-black font-bold text-lg">Instagram</span>
              </h2>
            </div>
            <div className="w-60 bg-gray-200 rounded-2xl text-center mt-4">
              <span className="text-black font-bold text-sm">
                Visuals and Engaging
              </span>
            </div>
          </div>
        </div>
        <div className="m-7 bg-[#fef6ff] rounded-xl px-4 pt-4 pb-8 space-y-4 text-[#1a1a1a] font-sans">
          {/* <!-- Visual Content Placeholder --> */}
          <div className="bg-[#e3e7ea] rounded-xl h-35 flex items-center justify-center">
            <span className="text-xl font-semibold text-[#6a91d4]">
              📱 Visual Content
            </span>
          </div>

          {/* <!-- Main Text Content --> */}
          <div className="text-sm leading-relaxed space-y-2">
            <p>
              ✨ Content repurposing game-changer! ✨ Swipe to see how ONE blog
              post becomes: 📱 Instagram carousel 🧑🏾‍💼 LinkedIn article 🐡 Twitter
              thread The secret? Understanding each platform's vibe! 💫
              #ContentCreator #AITools #SocialMediaTips #ContentStrategy
              #DigitalMarketing
            </p>
          </div>
        </div>
        {/* <!-- Reactions (Clean background) --> */}
        <div className="flex text-sm text-gray-600 gap-4 ml-7 mb-0">
          <span>❤️ 156 likes</span>
          <span>💬 23 comments</span>
          <span>📤 8 shares</span>
        </div>
      </div>
      <div className="max-w-md mx-auto border border-[#c9e0ff] rounded-xl p-5 bg-white space-y-4 shadow-sm">
        {/* <!-- Header --> */}
        <div className="flex items-center gap-3">
          <div className="bg-[#e8f1ff] p-2 rounded-md">
            <svg
              className="w-6 h-6 text-[#4c9bf5]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.38 8.59 8.59 0 01-2.73 1.04 4.28 4.28 0 00-7.29 3.9 12.14 12.14 0 01-8.8-4.46 4.28 4.28 0 001.32 5.71 4.27 4.27 0 01-1.94-.54v.05a4.29 4.29 0 003.43 4.2 4.27 4.27 0 01-1.93.07 4.29 4.29 0 004 2.97A8.58 8.58 0 013 19.54a12.1 12.1 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.56A8.72 8.72 0 0024 4.56a8.48 8.48 0 01-2.54.7z" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-[#1a1a1a]">Twitter</h2>
        </div>

        {/* <!-- Tag --> */}
        <div className="inline-block px-3 py-1 bg-gray-100 text-xs font-semibold text-gray-700 rounded-full">
          Concise & Punchy
        </div>

        {/* <!-- Tweet 1 --> */}
        <div className="bg-[#f9fbfc] rounded-lg p-4 border-l-4 border-[#4c9bf5] space-y-2">
          <p className="text-sm text-gray-800 leading-snug">
            🧵 Thread: How to repurpose 1 blog post into 10+ pieces of content{' '}
            <br />
            Most creators struggle with content creation. Here's how to work
            smarter, not harder: 1/7
          </p>
          <div className="flex justify-between text-xs text-gray-600">
            <span>🔁 12 retweets</span>
            <span>❤️ 45 likes</span>
          </div>
        </div>

        {/* <!-- Tweet 2 --> */}
        <div className="bg-[#f9fbfc] rounded-lg p-4 border-l-4 border-[#4c9bf5] space-y-2">
          <p className="text-sm text-gray-800 leading-snug">
            Step 1: Extract key insights from your original content. Don't just
            copy-paste. <br />
            Find the golden nuggets that provide real value. 2/7
          </p>
          <div className="flex justify-between text-xs text-gray-600">
            <span>🔁 8 retweets</span>
            <span>❤️ 32 likes</span>
          </div>
        </div>
        <p className="flex justify-center text-sm m-auto">
          ... and 5 more tweets in thread{' '}
        </p>
      </div>
    </div>
  );
};

export default Card;
