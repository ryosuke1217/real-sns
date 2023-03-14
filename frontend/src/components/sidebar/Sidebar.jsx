import React from 'react'
import "./Sidebar.css"
import { Home, Search, Notifications, MessageRounded, Bookmark, Person, Settings } from "@mui/icons-material"
import CloseFriend from '../closeFriend/CloseFriend'
import { Users } from "../../dummyData"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebarListItemText">ホーム</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <span className="sidebarListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon" />
            <span className="sidebarListItemText">メッセージ</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">ブックマーク</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <Link to="/profile/ryosuke" style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebarListItemText">プロフィール</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">設定</span>
          </li>
        </ul>
        <hr className='sidebarHr' />
        <ul className="siderFriendList">
          {Users.map((user) => (
            <CloseFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar