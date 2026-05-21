import React, { useState } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";


const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

        //  For Blurring Effect on Scroll
  
  const [isScrolled, setIsScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled:""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <img className={styles.logo} src={logo} alt="Logo" />

        {/* Navigation links */}

        <nav className={styles.nav}>
          <Link className={styles.navLink} href="">
            Tv Shows
          </Link>
          <Link className={styles.navLink} href="">
            Home
          </Link>
          <Link className={styles.navLink} href="">
            Movies
          </Link>
          <Link className={styles.navLink} href="">
            New & Popular
          </Link>
          <Link className={styles.navLink} href="">
            My List
          </Link>
          <Link className={styles.navLink} href="">
            Browse by Language
          </Link>
        </nav>

        {/* Right Side Section */}

        <div className={styles.rightSection}>
          {/* Search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>

            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
              />
            )}
          </div>

          {/* Notifications */}
          <button className={styles.iconButton}>
            <Bell />

            <span className={styles.notificationBadge}>4</span>
          </button>

          {/* Profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              {/* User Profile Icon   */}
              <div className={styles.profileAvatar}>
                <User size={20} />
              </div>

              {/* dropdown icon */}
              <ChevronDown size={20} />
            </button>

            {
              isProfileOpen && (
                <div className={styles.profileMenu}>
                  <Link className={styles.profileMenuItem}>Account</Link>
                  <Link className={styles.profileMenuItem}>help Center</Link>
                  <hr className={styles.profileMenuDivider} />
                  <button className={styles.profileMenuItem}>Sign Out</button>
                </div>
              )
            }


          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
