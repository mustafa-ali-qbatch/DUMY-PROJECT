'use client'
import { useState } from 'react'
// import { addPendingFriend } from './Helpers'

export default function ConfirmDialog({ status, data, key, addPendingFriend, userId, addFriend, isAccept }) {
  const [showConfirm, setShowConfirm] = useState(false)
  const handleConfirmation = async () => {
    if (isAccept) {
      await addPendingFriend(userId, data.id)
    } else {
      await addFriend(data.id, data?.user_id)
    }
    setShowConfirm(false)
  }

  const handleCancel = () => {
    setShowConfirm(false)
  }

  return (
    <div>
      <button
        className="flex rounded-md bg-blue-500 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-blue-600"
        onClick={() => setShowConfirm(true)}
      >
        {status === 'pending' ? 'Accept' : 'Add Friend'}
      </button>
      {showConfirm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-lg font-semibold mb-4">
              Are you sure you want to {status === 'pending' ? 'accept this request' : 'add friend'}?
            </p>
            <div className="flex justify-end">
              <button
                onClick={handleConfirmation}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mr-2 rounded"
              >
                Yes
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
