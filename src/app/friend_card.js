import ConfirmDialog from './confirm_dialogue'
import { addPendingFriend, addFriend } from './Helpers'
async function myServerFunc(userId, friendId) {
  'use server'
  await addPendingFriend(userId, friendId)
}
async function addFriendFunc(userId, friendId) {
  'use server'
  await addFriend(userId, friendId)
}
export default function FriendCard({ data, status, key, isFriend, userId, isAccept }) {
  return (
    <>
      <div className="my-2 grid">
        <div className="flex flex-row rounded-lg border border-gray-200/80 bg-white p-6">
          <div className="relative">
            <div
              className="absolute -right-3 bottom-5 h-5 w-5 sm:top-2 rounded-full border-4 border-white bg-green-400 sm:invisible md:visible"
              title="User is online"
            ></div>
          </div>

          <div className="flex flex-col px-6">
            <div className="flex h-8 flex-row">
              <h2 className="text-lg font-semibold">{data.user_name || data.name}</h2>
            </div>

            <div className="my-2 flex flex-row space-x-2">
              <div className="flex flex-row">
                <div className="text-xs text-gray-400/80 hover:text-gray-400">{"I don't know myself"}</div>
              </div>

              <div className="flex flex-row">
                <div className="text-xs text-gray-400/80 hover:text-gray-400">{'Fsd'}</div>
              </div>

              <div className="flex flex-row">
                <div className="text-xs text-gray-400/80 hover:text-gray-400">{data.name}</div>
              </div>
            </div>

            <div className="mt-2 flex flex-row items-center space-x-5">
              <a
                href="#"
                className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
              >
                <div className="flex flex-row items-center justify-center">
                  <span className="font-bold text-gray-600"> {2}</span>
                </div>

                <div className="mt-2 text-sm text-gray-400">Comments</div>
              </a>

              <a
                href="#"
                className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
              >
                <div className="flex flex-row items-center justify-center">
                  <span className="font-bold text-gray-600"> {2} </span>
                </div>

                <div className="mt-2 text-sm text-gray-400">Mutual Connection</div>
              </a>

              <a
                href="#"
                className="flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
              >
                <div className="flex flex-row items-center justify-center">
                  <span className="font-bold text-gray-600"> {10} </span>
                </div>

                <div className="mt-2 text-sm text-gray-400">Likes</div>
              </a>
            </div>
          </div>
          {isFriend ? null : (
            <div className="w-100 flex flex-grow flex-col items-end justify-start">
              <div className="flex flex-row space-x-3">
                <ConfirmDialog
                  status={status}
                  data={data}
                  key={key}
                  addPendingFriend={myServerFunc}
                  userId={userId}
                  addFriend={addFriendFunc}
                  isAccept={isAccept}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
