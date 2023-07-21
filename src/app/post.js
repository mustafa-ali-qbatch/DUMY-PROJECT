export default function Post({data}) {
    return (
      <>
        <div className="p-8 bg-gray-50 dark:bg-gray-900 flex items-center justify-center w-screen h-screen">
          <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-w-lg">
            <div className="flex mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src={data.image}
                alt="Profile"
              />
              <div className="ml-2 mt-0.5">
                <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                  {data.author}
                </span>
                <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                  {data.timestamp}
                </span>
              </div>
            </div>
            <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
              {data.content}
            </p>
            <div className="flex justify-between items-center mt-5">
              <div className="flex ">
                <span className="ml-1 text-gray-500 dark:text-gray-400 font-light">
                  {data.likes}
                </span>
              </div>
              <div className="ml-1 text-gray-500 dark:text-gray-400 font-light">
                {data.comments} comments
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  