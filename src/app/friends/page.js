import Image from 'next/image'
import '../css/app.css'
import Sidebar from '../sidebar'
import FriendCard from '../friend_card'
import Footer from '../footer'
import { fetchFriends, fetchRandomUsers } from '../Helpers'
const randomUser = await fetchRandomUsers(1)
const userData = await fetchFriends('pending', 1)
function formatArrayOfObjects(dataArray) {
  return dataArray.map((data) => {
    const formattedData = {}

    Object.entries(data).forEach(([key, value]) => {
      const keys = key.split('.')
      let currentObj = formattedData

      keys.forEach((nestedKey, index) => {
        if (index === keys.length - 1) {
          currentObj[nestedKey] = value
        } else {
          currentObj[nestedKey] = currentObj[nestedKey] || {}
          currentObj = currentObj[nestedKey]
        }
      })
    })

    return formattedData
  })
}

const data = formatArrayOfObjects(userData)
export default function Friends() {
  return (
    <>
      <div className="flex w-100">
        <Sidebar />
        <div className="m-3 width-clac">
          <h1 className="font-bold">Pending Request</h1>
          {data?.length &&
            data.map((item) => {
              return (
                <>
                  {item.Friends.user_friends.status === 'pending' && (
                    <div>
                      <FriendCard
                        data={item.Friends}
                        key={item.id}
                        status={item.Friends.user_friends.status}
                        userId={item.Friends.user_friends.user_id}
                        isAccept={true}
                      />
                    </div>
                  )}
                </>
              )
            })}
          <h1 className="font-bold">Add Friends</h1>
          {randomUser.length &&
            randomUser.map((item) => {
              return (
                <>
                  <div>
                    <FriendCard data={item} key={item.id} isAccept={false} />
                  </div>
                </>
              )
            })}
          <Footer />
        </div>
      </div>
    </>
  )
}
