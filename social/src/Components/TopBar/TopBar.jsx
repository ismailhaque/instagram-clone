import React from 'react'
import logo from '../../Pages/images/instragram.png'
import profile from '../../Pages/images/asdfg.jpg'
import { HiHome } from 'react-icons/hi'
import { FiSend, FiPlusSquare, FiSearch } from 'react-icons/fi'
import { IoCompassOutline } from 'react-icons/io5'
import './TopBar.scss'
import { Link } from 'react-router-dom'

const TopBar = () => {


  return (

    <>
    
    <div className="topbar-container container">
        <div className="top-wraper row align-items-center">

            <div className="logo col-md-4">
                <img style={{width: "130px"}} src={ logo } alt=""/>
            </div>

            <div className="search-box col-md-4">
              <button><FiSearch /></button>
              <input type="text" placeholder='Search' />
            </div>

            <div className="topbar-menu col-md-4">
              <ul>
                <li><Link to={'/home'}> <HiHome /> </Link></li>
                <li><Link to={'/home'}> <FiSend /> </Link></li>
                <li><Link to={'/home'}> <FiPlusSquare /> </Link></li>
                <li><Link to={'/home'}> <IoCompassOutline /> </Link></li>
                <li><Link to={'/home'}><svg aria-label="Activity Feed" class="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></Link></li>
                <li>
                  <Link to={'/profile'}>
                    <img style={{ width: "27px", height: "27px",
                  objectFit: "cover", borderRadius: "50%"}} src={ profile } alt="" />
                  </Link></li>
              </ul>
            </div>
        </div>
    </div>
    
    </>

  )
}

export default TopBar