import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-900">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Profile Card */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-all">
          <div className="flex items-start gap-6">
            {/* Profile Image */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/richman.jpg"
                alt="Profile picture"
                fill
                className="object-cover"
                sizes="(max-width: 128px) 100vw, 128px"
                priority
              />
            </div>
            
            {/* Profile Info */}
            <div className="flex-1">
              <div className="mb-4">
                <h2 className="text-xl font-bold mb-1 text-white bg-gradient-to-r from-blue-500 to-purple-500 inline-block px-3 py-1 rounded">I AM</h2>
                <p className="text-gray-300 mt-2">이름: 조프로</p>
                <p className="text-gray-300">프리랜서 개발자 / FE Developer(jr)</p>
              </div>
              
              <div className="mb-4">
                <h3 className="font-bold mb-2 text-white">Contact</h3>
                <p className="text-gray-300">Email: whwncjs95@gmail.com</p>
                <p className="text-gray-300">Phone: (+082)010-4545-9806</p>
              </div>
              
              <div>
                <h3 className="font-bold mb-2 text-white">Channel</h3>
                <div className="space-y-2">
                  <div className="border border-gray-700 rounded p-2 text-gray-300 hover:border-blue-500 transition-all">SNS:</div>
                  <div className="border border-gray-700 rounded p-2 text-gray-300 hover:border-blue-500 transition-all">GitHub:</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduce Card */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-all">
          <h2 className="text-xl font-bold mb-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 inline-block px-3 py-1 rounded">Introduce</h2>
          <div className="border border-gray-700 rounded-lg p-4">
            <p className="text-gray-300">안녕하세요 저는 조프로 입니다.</p>
            <p className="text-gray-300">저는 프리랜서 개발자이며, 현재 프론트엔드 개발자로 일하고 있습니다.</p>
            {/* <p className="text-gray-300">저는 프론트엔드 개발자로 일하고 있습니다.</p> */}
          </div>
        </div>

        {/* Tech Skills Card */}
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-all">
          <h2 className="text-xl font-bold mb-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 inline-block px-3 py-1 rounded">Tech Skill</h2>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-lg hover:scale-105 transition-transform cursor-default">JS</span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-400 text-white rounded-full shadow-lg hover:scale-105 transition-transform cursor-default">JAVA</span>
            <span className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-cyan-400 text-white rounded-full shadow-lg hover:scale-105 transition-transform cursor-default">VUE.JS</span>
            <span className="px-4 py-2 bg-gradient-to-r from-teal-600 to-teal-400 text-white rounded-full shadow-lg hover:scale-105 transition-transform cursor-default">ORACLE,MYSQL,MSSQL</span>
            <span className="px-4 py-2 bg-gradient-to-r from-pink-600 to-pink-400 text-white rounded-full shadow-lg hover:scale-105 transition-transform cursor-default">Next.js</span>
          </div>
        </div>
      </div>
    </div>
  );
}
