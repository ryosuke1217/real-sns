import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Post.css"
import { MoreVert } from "@mui/icons-material"
import { format } from "timeago.js"
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { AuthContext } from '../../state/AuthContext'

export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({})
  const { user: currentUser } = useContext(AuthContext)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`)      
      setUser(res.data)
    }
    fetchUser()
  }, [post.userId])

  const handleLike = async () => {
    try {
      await axios.put(`/posts/${post._id}/like`, { userId: currentUser._id })
    } catch (err) {
      console.log(err)
    }
    setLike(isLiked ? like -1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PUBLIC_FOLDER + user.profilePicture
                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className='postProfileImg'
              />
            </Link>
            <span className="postUsername">
              {user.username}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt="" className='postImg' />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className='likeIcon'
              src={PUBLIC_FOLDER + "/heart.png"}
              alt=""
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">{like}人がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.like}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  )
}
