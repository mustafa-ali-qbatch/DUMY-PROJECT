'use client'
import { useState } from 'react'
import { Card, Collapse } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function CommentCard({ comment, postId, userId, createComment }) {
  const [collapseVisible, setCollapseVisible] = useState(false)
  const [textValue, setTextValue] = useState('')
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = async () => {
    if (!isCollapsed) {
      if (!textValue) {
        setTextValue('')
        return
      }
      await createComment({ post_id: postId, user_id: userId, content: textValue })
      setTextValue('')
    }

    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed)
  }

  return (
    <>
      <span
        className="ml-1 text-gray-500 dark:text-gray-400 font-light"
        onClick={() => setCollapseVisible((prevVisible) => !prevVisible)}
      >
        comments
      </span>
      <Collapse isOpen={collapseVisible}>
        <Card className="card-body">
          {/* {comments.map((comment, index) => ( */}
          {/* <div key={index}> */}
          <p>{comment}</p>
          {/* You can render other details of the comment here */}
          {/* </div> */}
          {/* ))} */}
        </Card>{' '}
      </Collapse>
      <div className="bg-white-200 px-4 py-2 rounded-md">
        <div className={`truncate ${isCollapsed ? '' : 'hidden'}`}>
          <span>{textValue}</span>
        </div>
        <input
          type="text"
          className={`w-full bg-transparent outline-none border-b-2 border-blue-500 focus:border-blue-700 py-1 ${
            isCollapsed ? 'hidden' : ''
          }`}
          placeholder="Enter the text here"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md" onClick={toggleCollapse}>
          {isCollapsed ? 'Add comment here' : 'Close'}
        </button>
      </div>
    </>
  )
}
