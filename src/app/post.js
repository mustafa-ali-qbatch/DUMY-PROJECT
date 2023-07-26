import CommentCard from "./comment_card";
import { createComment } from "./Helpers";
import ReactionComponent from "./reaction_card";
export default function Post({ data }) {
  async function createCommentFunc(data) {
    'use server'
    await createComment(data)
  }
  return (
    <>
      <div className="p-8 bg-gray-50 dark:bg-gray-900 flex ">
        <div className="px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg max-width">
          <div className="flex mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
            />
            <div className="ml-2 mt-0.5">
              <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                {data?.user?.name}
              </span>
              <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                {new Date(data.created_at).toLocaleString()}
              </span>
            </div>
          </div>
          <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal">
            {data.content}
          </p>
          <div className="flex items-center justify-between pb-2 border-b border-gray-300 text-gray-500 text-sm"></div>
          <div className="flex justify-between items-center mt-5">
            <div className="flex ">
              <span className="ml-1 text-gray-500 dark:text-gray-400 font-light">
                <div className="flex items-center">
                  <div className="flex items-center">
                  <ReactionComponent/>
                    <div className="ml-1">
                      {/* <p>10</p> */}
                    </div>
                  </div>
                </div>
              </span>
            </div>    
            <CommentCard comment={data.comments.content} postId={data.id} userId={data.user_id} createComment={createCommentFunc}/>
          </div>
        </div>
      </div>
    </>
  );
}
