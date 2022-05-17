import React from "react";

export default function ProfileTimeline() {
    var backgroundStyle = {
        // backgroundImage: "url(" + { Background } +") center center / cover no-repeat ",
        // backgroundImage: `url(${Background}) center center / cover no-repeat `,
        // backgroundImage: "{../public/images/banner-bg.png}",
        backgroundImage:
          "url(" +
          "https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/members/1/cover-image/5f6d2c93c75db-bp-cover-image.jpg" +
          ")",
        backgroundPosition: "center center",
        backgroundRepeat: "cover no-repeat",
      };
    return(
        <>
            {/* CONTENT GRID */}
            <div className="content-grid">

            {/* PROFILE HEADER */}
            <div className="profile-header">
            {/* PROFILE HEADER COVER */}
            <div className="profile-header-cover" style={backgroundStyle}></div>
            {/* /PROFILE HEADER COVER */}

            {/* PROFILE HEADER INFO */}
            <div className="profile-header-info">
                {/* USER SHORT DESCRIPTION */}
                <div className="user-short-description big">
                
            {/* USER AVATAR */}
            <div className="user-avatar big  user-short-description-avatar ">
            {/* USER AVATAR BORDER */}
            <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-148-164"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR BORDER */}

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-100-110" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/1/5f6d2c93a53d1-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            {/* USER AVATAR PROGRESS */}
            <div className="user-avatar-progress">
                {/* HEXAGON */}
                <div  className="hexagon-progress-124-136"
                    data-scalestop="4"
                    data-scaleend="6"
                >
                </div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS */}

            {/* USER AVATAR PROGRESS BORDER */}
            <div className="user-avatar-progress-border">
                {/* HEXAGON */}
                <div className="hexagon-border-124-136"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS BORDER */}

            {/* USER AVATAR BADGE */}
            <div className="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div className="user-avatar-badge-border">
                {/* HEXAGON */}
                <div className="hexagon-40-44"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}

                {/* USER AVATAR BADGE CONTENT */}
                <div className="user-avatar-badge-content">
                {/* HEXAGON */}
                <div className="hexagon-dark-32-34"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}

                {/* USER AVATAR BADGE TEXT */}
                <p className="user-avatar-badge-text">4</p>
                {/* /USER AVATAR BADGE TEXT */}
            </div>
            {/* /USER AVATAR BADGE */}

            </div>
            {/* /USER AVATAR */}
            {/* USER AVATAR */}
            <div className="user-avatar medium  user-short-description-avatar user-short-description-avatar-mobile ">
            {/* USER AVATAR BORDER */}
            <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-120-130"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR BORDER */}

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-82-90" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/1/5f6d2c93a53d1-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            {/* USER AVATAR PROGRESS */}
            <div className="user-avatar-progress">
                {/* HEXAGON */}
                <div  className="hexagon-progress-100-110"
                    data-scalestop="4"
                    data-scaleend="6"
                >
                </div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS */}

            {/* USER AVATAR PROGRESS BORDER */}
            <div className="user-avatar-progress-border">
                {/* HEXAGON */}
                <div className="hexagon-border-100-110"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS BORDER */}

            {/* USER AVATAR BADGE */}
            <div className="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div className="user-avatar-badge-border">
                {/* HEXAGON */}
                <div className="hexagon-32-36"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}

                {/* USER AVATAR BADGE CONTENT */}
                <div className="user-avatar-badge-content">
                {/* HEXAGON */}
                <div className="hexagon-dark-26-28"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}

                {/* USER AVATAR BADGE TEXT */}
                <p className="user-avatar-badge-text">4</p>
                {/* /USER AVATAR BADGE TEXT */}
            </div>
            {/* /USER AVATAR BADGE */}

            </div>
            {/* /USER AVATAR */}
                {/* USER SHORT DESCRIPTION TITLE */}
                <p className="user-short-description-title">
                Marina Valentine<span className="bp-verified-badge"></span>      </p>
                {/* /USER SHORT DESCRIPTION TITLE */}

                
            {/* VIKINGER PMPRO LEVEL TAG */}
            <div className="vikinger-pmpro-level-tag ">
            {/* VIKINGER PMPRO LEVEL TAG TEXT */}
            <p className="vikinger-pmpro-level-tag-text">Pro Member</p>
            {/* /VIKINGER PMPRO LEVEL TAG TEXT */}
            </div>
            {/* /VIKINGER PMPRO LEVEL TAG */}


                {/* USER SHORT DESCRIPTION TEXT */}
                <p className="user-short-description-text">
                &#64;odindesign-themes      </p>
                {/* /USER SHORT DESCRIPTION TEXT */}
                </div>
                {/* /USER SHORT DESCRIPTION */}

                
            {/* SOCIAL LINKS */}
            <div className="social-links ">

            {/* SOCIAL LINK */}
            <a className="social-link facebook " href="https://www.facebook.com/Odin-Design-Themes-and-Templates-1985202918413398/" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-facebook social-link-icon">
            <use href="#svg-facebook"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}
            {/* SOCIAL LINK */}
            <a className="social-link twitter " href="https://twitter.com/odindesign_tw" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-twitter social-link-icon">
            <use href="#svg-twitter"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}
            {/* SOCIAL LINK */}
            <a className="social-link instagram " href="https://www.instagram.com/odindesign_themes/" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-instagram social-link-icon">
            <use href="#svg-instagram"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}
            {/* SOCIAL LINK */}
            <a className="social-link twitch " href="https://www.twitch.tv/" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-twitch social-link-icon">
            <use href="#svg-twitch"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}
            {/* SOCIAL LINK */}
            <a className="social-link youtube " href="https://www.youtube.com/channel/UCae_4SDcDGCgHHW6wd7aBAg" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-youtube social-link-icon">
            <use href="#svg-youtube"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}
            {/* SOCIAL LINK */}
            <a className="social-link artstation " href="https://www.artstation.com/community/channels" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-artstation social-link-icon">
            <use href="#svg-artstation"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}</div>
            {/* /SOCIAL LINKS */}    {/* PROFILE HEADER SOCIAL LINKS WRAP */}
                <div className="profile-header-social-links-wrap mobile">
                <div id="profile-header-social-links-mobile-slider" className="swiper-container">
                    {/* PROFILE HEADER SOCIAL LINKS */}
                    <div className="profile-header-social-links swiper-wrapper">
                            <div className="profile-header-social-link swiper-slide">
                    
            {/* SOCIAL LINK */}
            <a className="social-link facebook small" href="https://www.facebook.com/Odin-Design-Themes-and-Templates-1985202918413398/" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-facebook social-link-icon">
            <use href="#svg-facebook"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}          </div>
                            <div className="profile-header-social-link swiper-slide">
                    
            {/* SOCIAL LINK */}
            <a className="social-link twitter small" href="https://twitter.com/odindesign_tw" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-twitter social-link-icon">
            <use href="#svg-twitter"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}          </div>
                            <div className="profile-header-social-link swiper-slide">
                    
            {/* SOCIAL LINK */}
            <a className="social-link instagram small" href="https://www.instagram.com/odindesign_themes/" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-instagram social-link-icon">
            <use href="#svg-instagram"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}          </div>
                            <div className="profile-header-social-link swiper-slide">
                    
            {/* SOCIAL LINK */}
            <a className="social-link twitch small" href="https://www.twitch.tv/" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-twitch social-link-icon">
            <use href="#svg-twitch"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}          </div>
                            <div className="profile-header-social-link swiper-slide">
                    
            {/* SOCIAL LINK */}
            <a className="social-link youtube small" href="https://www.youtube.com/channel/UCae_4SDcDGCgHHW6wd7aBAg" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-youtube social-link-icon">
            <use href="#svg-youtube"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}          </div>
                            <div className="profile-header-social-link swiper-slide">
                    
            {/* SOCIAL LINK */}
            <a className="social-link artstation small" href="https://www.artstation.com/community/channels" target="_blank">

            {/* ICON SVG */}
            <svg className="icon-artstation social-link-icon">
            <use href="#svg-artstation"></use>
            </svg>
            {/* ICON SVG */}</a>
            {/* /SOCIAL LINK */}          </div>
                            </div>
                    {/* /PROFILE HEADER SOCIAL LINKS */}
                </div>

                {/* SLIDER CONTROLS */}
                <div className="slider-controls">
                    {/* SLIDER CONTROL */}
                    <div id="profile-header-social-links-mobile-control-prev" className="slider-control left">
                    
            {/* ICON SVG */}
            <svg className="icon-small-arrow slider-control-icon">
            <use href="#svg-small-arrow"></use>
            </svg>
            {/* ICON SVG */}        </div>
                    {/* /SLIDER CONTROL */}

                    {/* SLIDER CONTROL */}
                    <div id="profile-header-social-links-mobile-control-next" className="slider-control right">
                    
            {/* ICON SVG */}
            <svg className="icon-small-arrow slider-control-icon">
            <use href="#svg-small-arrow"></use>
            </svg>
            {/* ICON SVG */}        </div>
                    {/* /SLIDER CONTROL */}
                </div>
                {/* /SLIDER CONTROLS */}
                </div>
                {/* /PROFILE HEADER SOCIAL LINKS WRAP */}
                    {/* USER STATS */}
                <div className="user-stats">
                {/* USER STAT */}
                <div className="user-stat big">
                    {/* USER STAT TITLE */}
                    <p className="user-stat-title">8</p>
                    {/* /USER STAT TITLE */}

                    {/* USER STAT TEXT */}
                    <p className="user-stat-text">posts</p>
                    {/* /USER STAT TEXT */}
                </div>
                {/* /USER STAT */}

                    {/* USER STAT */}
                <div className="user-stat big">
                    {/* USER STAT TITLE */}
                    <p className="user-stat-title">6</p>
                    {/* /USER STAT TITLE */}

                    {/* USER STAT TEXT */}
                    <p className="user-stat-text">friends</p>
                    {/* /USER STAT TEXT */}
                </div>
                {/* /USER STAT */}
                
                {/* USER STAT */}
                <div className="user-stat big">
                    {/* USER STAT TITLE */}
                    <p className="user-stat-title">4</p>
                    {/* /USER STAT TITLE */}

                    {/* USER STAT TEXT */}
                    <p className="user-stat-text">comments</p>
                    {/* /USER STAT TEXT */}
                </div>
                {/* /USER STAT */}
                </div>
                {/* /USER STATS */}

                </div>
            {/* /PROFILE HEADER INFO */}
            </div>
            {/* /PROFILE HEADER */}
            {/* SECTION NAVIGATION */}
            <nav className="section-navigation">
            {/* SECTION MENU WRAP */}
            <div id="section-navigation-slider" className="section-menu-wrap swiper-container">
                {/* SECTION MENU */}
                <div className="section-menu  swiper-wrapper">
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item  swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/about">
                
            {/* ICON SVG */}
            <svg className="icon-profile section-menu-item-icon">
            <use href="#svg-profile"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">About</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item active swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/activity">
                
            {/* ICON SVG */}
            <svg className="icon-timeline section-menu-item-icon">
            <use href="#svg-timeline"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">Timeline</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item  swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/friends">
                
            {/* ICON SVG */}
            <svg className="icon-friend section-menu-item-icon">
            <use href="#svg-friend"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">Friends</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item  swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/groups">
                
            {/* ICON SVG */}
            <svg className="icon-group section-menu-item-icon">
            <use href="#svg-group"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">Groups</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item  swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/posts">
                
            {/* ICON SVG */}
            <svg className="icon-blog-posts section-menu-item-icon">
            <use href="#svg-blog-posts"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">Blog Posts</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item  swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/forums">
                
            {/* ICON SVG */}
            <svg className="icon-forums section-menu-item-icon">
            <use href="#svg-forums"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">Forums</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item  swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/photos">
                
            {/* ICON SVG */}
            <svg className="icon-photos section-menu-item-icon">
            <use href="#svg-photos"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">Photos</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item  swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/videos">
                
            {/* ICON SVG */}
            <svg className="icon-videos section-menu-item-icon">
            <use href="#svg-videos"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">Videos</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item  swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/credits">
                
            {/* ICON SVG */}
            <svg className="icon-credits section-menu-item-icon">
            <use href="#svg-credits"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">Credits</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item  swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/badges">
                
            {/* ICON SVG */}
            <svg className="icon-badges section-menu-item-icon">
            <use href="#svg-badges"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">Badges</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item  swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/quests">
                
            {/* ICON SVG */}
            <svg className="icon-quests section-menu-item-icon">
            <use href="#svg-quests"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">Quests</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    {/* SECTION MENU ITEM */}
                <a className="section-menu-item  swiper-slide" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/ranks">
                
            {/* ICON SVG */}
            <svg className="icon-ranks section-menu-item-icon">
            <use href="#svg-ranks"></use>
            </svg>
            {/* ICON SVG */}
                    {/* SECTION MENU ITEM TEXT */}
                    <p className="section-menu-item-text">Ranks</p>
                    {/* /SECTION MENU ITEM TEXT */}
                </a>
                {/* /SECTION MENU ITEM */}
                    </div>
                {/* /SECTION MENU */}
            </div>
            {/* /SECTION MENU WRAP */}

            {/* SLIDER CONTROLS */}
            <div className="slider-controls">
                {/* SLIDER CONTROL */}
                <div id="section-navigation-control-prev" className="slider-control left">
                
            {/* ICON SVG */}
            <svg className="icon-small-arrow slider-control-icon">
            <use href="#svg-small-arrow"></use>
            </svg>
            {/* ICON SVG */}    </div>
                {/* /SLIDER CONTROL */}

                {/* SLIDER CONTROL */}
                <div id="section-navigation-control-next" className="slider-control right">
                
            {/* ICON SVG */}
            <svg className="icon-small-arrow slider-control-icon">
            <use href="#svg-small-arrow"></use>
            </svg>
            {/* ICON SVG */}    </div>
                {/* /SLIDER CONTROL */}
            </div>
            {/* /SLIDER CONTROLS */}
            </nav>
            {/* /SECTION NAVIGATION */}
            {/* GRID */}
            <div className="grid grid-3-6-3 mobile-prefer-content">
            {/* GRID COLUMN */}
            <div className="grid-column">
            
            {/* WIDGET BOX */}
            <div className="widget-box">
            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">About Me</p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
                {/* PARAGRAPH */}
                <p className="paragraph">Hi! My name is Marina but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.</p>
                {/* /PARAGRAPH */}
            
            
            {/* INFORMATION LINE LIST */}
            <div className="information-line-list">

            {/* INFORMATION LINE */}
            <div className="information-line">
            {/* INFORMATION LINE TITLE */}
            <p className="information-line-title">Joined</p>
            {/* /INFORMATION LINE TITLE */}

            {/* INFORMATION LINE TEXT */}
            <p className="information-line-text">September 23, 2020</p>
            {/* /INFORMATION LINE TEXT */}
            </div>
            {/* /INFORMATION LINE */}
            {/* INFORMATION LINE */}
            <div className="information-line">
            {/* INFORMATION LINE TITLE */}
            <p className="information-line-title">From</p>
            {/* /INFORMATION LINE TITLE */}

            {/* INFORMATION LINE TEXT */}
            <p className="information-line-text">Los Angeles, California</p>
            {/* /INFORMATION LINE TEXT */}
            </div>
            {/* /INFORMATION LINE */}
            {/* INFORMATION LINE */}
            <div className="information-line">
            {/* INFORMATION LINE TITLE */}
            <p className="information-line-title">Web</p>
            {/* /INFORMATION LINE TITLE */}

            {/* INFORMATION LINE TEXT */}
            <p className="information-line-text"><a href="http://www.odindesign-themes.com" target="_blank">http://www.odindesign-themes.com</a></p>
            {/* /INFORMATION LINE TEXT */}
            </div>
            {/* /INFORMATION LINE */}</div>
            {/* /INFORMATION LINE LIST */}  </div>
            {/* /WIDGET BOX CONTENT */}
            </div>
            {/* /WIDGET BOX */}
            {/* WIDGET BOX */}
            <div className="widget-box">
            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">Badges <span className="highlighted">14</span></p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
            
            {/* BADGE LIST */}
            <div className="badge-list align-left">
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Bronze User">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Bronze-User.png" alt="badge-bronze-user"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Gold User">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Gold-User.png" alt="badge-gold-user"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Caffeinated Readers">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Caffeinatted-Readers.png" alt="badge-caffeinated-readers"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Phantom Poster">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Phantom-Poster.png" alt="badge-phantom-poster"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Universe Explorer">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Universe-Explorer.png" alt="badge-universe-explorer"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Globe Trotter">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Globe-Trotter.png" alt="badge-globe-trotter"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Ruler of Masses">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Ruler-of-Masses.png" alt="badge-ruler-of-masses"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="The Warrior">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/The-Warrior.png" alt="badge-the-warrior"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Crazy Scientist">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Crazy-Scientist.png" alt="badge-crazy-scientist"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Gold Amasser">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Gold-Amasser.png" alt="badge-gold-amasser"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Gem Accumulator">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Gem-Accumulator.png" alt="badge-gem-accumulator"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Emerald Collector">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Emerald-Collector.png" alt="badge-emerald-collector"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Gold Cup">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Gold-Cup.png" alt="badge-gold-cup"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Platinum Cup">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Platinum-Cup.png" alt="badge-platinum-cup"/>
            </div>
            {/* /BADGE ITEM */}

            </div>
            {/* /BADGE LIST */}  </div>
            {/* /WIDGET BOX CONTENT */}
            </div>
            {/* /WIDGET BOX */}
            {/* WIDGET BOX */}
            <div className="widget-box">
            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">Quests <span className="highlighted">7</span></p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
            
            {/* BADGE LIST */}
            <div className="badge-list align-left medium">
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Quest Conqueror">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Gold-Quest-Medal.png" alt="badge-quest-conqueror"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Hear Me Out">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Red-Quest-Medal.png" alt="badge-hear-me-out"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Posting Machine">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Purple-Quest-Medal.png" alt="badge-posting-machine"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Let’s Talk!">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Cyan-Quest-Medal.png" alt="badge-lets-talk"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="For The Community">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Orange-Quest-Medal.png" alt="badge-for-the-community"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="The Publisher">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Silver-Quest-Medal.png" alt="badge-the-publisher"/>
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item text-tooltip-tft" data-title="Popular Writer">
                <img src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Light-Blue-Quest-Medal.png" alt="badge-popular-writer"/>
            </div>
            {/* /BADGE ITEM */}

            </div>
            {/* /BADGE LIST */}  </div>
            {/* /WIDGET BOX CONTENT */}
            </div>
            {/* /WIDGET BOX */}
            {/* WIDGET BOX */}
            <div className="widget-box">
            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">Friends</p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
            
            {/* USER STATUS LIST */}
            <div className="user-status-list">

            {/* USER STATUS */}
            <div className="user-status">

            {/* USER AVATAR */}
            <a className="user-avatar small  user-status-avatar no-border no-outline" href="https://odindesignthemes.com/vikinger-theme/members/brdwonder/">

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/6/5f6d2f1e67572-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            {/* USER AVATAR PROGRESS */}
            <div className="user-avatar-progress">
                {/* HEXAGON */}
                <div  className="hexagon-progress-40-44"
                    data-scalestop="2"
                    data-scaleend="6"
                >
                </div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS */}

            {/* USER AVATAR PROGRESS BORDER */}
            <div className="user-avatar-progress-border">
                {/* HEXAGON */}
                <div className="hexagon-border-40-44"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS BORDER */}

            {/* USER AVATAR BADGE */}
            <div className="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div className="user-avatar-badge-border">
                {/* HEXAGON */}
                <div className="hexagon-22-24"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}

                {/* USER AVATAR BADGE CONTENT */}
                <div className="user-avatar-badge-content">
                {/* HEXAGON */}
                <div className="hexagon-dark-16-18"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}

                {/* USER AVATAR BADGE TEXT */}
                <p className="user-avatar-badge-text">2</p>
                {/* /USER AVATAR BADGE TEXT */}
            </div>
            {/* /USER AVATAR BADGE */}

            </a>
            {/* /USER AVATAR */}  {/* USER STATUS TITLE */}
            <div className="user-status-title">
                <a className="bold" href="https://odindesignthemes.com/vikinger-theme/members/brdwonder/">Bearded Wonder</a>
                </div>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
                &#64;brdwonder    </p>
            {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status">

            {/* USER AVATAR */}
            <a className="user-avatar small  user-status-avatar no-border no-outline" href="https://odindesignthemes.com/vikinger-theme/members/destroydx/">

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/3/5f6d2f1e6e92c-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            {/* USER AVATAR PROGRESS */}
            <div className="user-avatar-progress">
                {/* HEXAGON */}
                <div  className="hexagon-progress-40-44"
                    data-scalestop="4"
                    data-scaleend="6"
                >
                </div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS */}

            {/* USER AVATAR PROGRESS BORDER */}
            <div className="user-avatar-progress-border">
                {/* HEXAGON */}
                <div className="hexagon-border-40-44"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS BORDER */}

            {/* USER AVATAR BADGE */}
            <div className="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div className="user-avatar-badge-border">
                {/* HEXAGON */}
                <div className="hexagon-22-24"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}

                {/* USER AVATAR BADGE CONTENT */}
                <div className="user-avatar-badge-content">
                {/* HEXAGON */}
                <div className="hexagon-dark-16-18"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}

                {/* USER AVATAR BADGE TEXT */}
                <p className="user-avatar-badge-text">4</p>
                {/* /USER AVATAR BADGE TEXT */}
            </div>
            {/* /USER AVATAR BADGE */}

            </a>
            {/* /USER AVATAR */}  {/* USER STATUS TITLE */}
            <div className="user-status-title">
                <a className="bold" href="https://odindesignthemes.com/vikinger-theme/members/destroydx/">Destroy Dex</a>
                </div>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
                &#64;destroydx    </p>
            {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status">

            {/* USER AVATAR */}
            <a className="user-avatar small  user-status-avatar no-border no-outline" href="https://odindesignthemes.com/vikinger-theme/members/nekobebop/">

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/2/5f6d2ea82117b-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            {/* USER AVATAR PROGRESS */}
            <div className="user-avatar-progress">
                {/* HEXAGON */}
                <div  className="hexagon-progress-40-44"
                    data-scalestop="2"
                    data-scaleend="6"
                >
                </div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS */}

            {/* USER AVATAR PROGRESS BORDER */}
            <div className="user-avatar-progress-border">
                {/* HEXAGON */}
                <div className="hexagon-border-40-44"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS BORDER */}

            {/* USER AVATAR BADGE */}
            <div className="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div className="user-avatar-badge-border">
                {/* HEXAGON */}
                <div className="hexagon-22-24"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}

                {/* USER AVATAR BADGE CONTENT */}
                <div className="user-avatar-badge-content">
                {/* HEXAGON */}
                <div className="hexagon-dark-16-18"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}

                {/* USER AVATAR BADGE TEXT */}
                <p className="user-avatar-badge-text">2</p>
                {/* /USER AVATAR BADGE TEXT */}
            </div>
            {/* /USER AVATAR BADGE */}

            </a>
            {/* /USER AVATAR */}  {/* USER STATUS TITLE */}
            <div className="user-status-title">
                <a className="bold" href="https://odindesignthemes.com/vikinger-theme/members/nekobebop/">Neko Bebop</a>
            <span className="bp-verified-badge"></span>  </div>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
                &#64;nekobebop    </p>
            {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status">

            {/* USER AVATAR */}
            <a className="user-avatar small  user-status-avatar no-border no-outline" href="https://odindesignthemes.com/vikinger-theme/members/nickgrissom/">

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/4/5f6d2f1fd4af8-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            {/* USER AVATAR PROGRESS */}
            <div className="user-avatar-progress">
                {/* HEXAGON */}
                <div  className="hexagon-progress-40-44"
                    data-scalestop="1"
                    data-scaleend="6"
                >
                </div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS */}

            {/* USER AVATAR PROGRESS BORDER */}
            <div className="user-avatar-progress-border">
                {/* HEXAGON */}
                <div className="hexagon-border-40-44"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS BORDER */}

            {/* USER AVATAR BADGE */}
            <div className="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div className="user-avatar-badge-border">
                {/* HEXAGON */}
                <div className="hexagon-22-24"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}

                {/* USER AVATAR BADGE CONTENT */}
                <div className="user-avatar-badge-content">
                {/* HEXAGON */}
                <div className="hexagon-dark-16-18"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}

                {/* USER AVATAR BADGE TEXT */}
                <p className="user-avatar-badge-text">1</p>
                {/* /USER AVATAR BADGE TEXT */}
            </div>
            {/* /USER AVATAR BADGE */}

            </a>
            {/* /USER AVATAR */}  {/* USER STATUS TITLE */}
            <div className="user-status-title">
                <a className="bold" href="https://odindesignthemes.com/vikinger-theme/members/nickgrissom/">Nicholas Grissom</a>
            <span className="bp-verified-badge"></span>  </div>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
                &#64;nickgrissom    </p>
            {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status">

            {/* USER AVATAR */}
            <a className="user-avatar small  user-status-avatar no-border no-outline" href="https://odindesignthemes.com/vikinger-theme/members/sanstrange/">

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-30-32" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/10/5f6d2f896ea48-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            {/* USER AVATAR PROGRESS */}
            <div className="user-avatar-progress">
                {/* HEXAGON */}
                <div  className="hexagon-progress-40-44"
                    data-scalestop="1"
                    data-scaleend="6"
                >
                </div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS */}

            {/* USER AVATAR PROGRESS BORDER */}
            <div className="user-avatar-progress-border">
                {/* HEXAGON */}
                <div className="hexagon-border-40-44"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR PROGRESS BORDER */}

            {/* USER AVATAR BADGE */}
            <div className="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div className="user-avatar-badge-border">
                {/* HEXAGON */}
                <div className="hexagon-22-24"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}

                {/* USER AVATAR BADGE CONTENT */}
                <div className="user-avatar-badge-content">
                {/* HEXAGON */}
                <div className="hexagon-dark-16-18"></div>
                {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}

                {/* USER AVATAR BADGE TEXT */}
                <p className="user-avatar-badge-text">1</p>
                {/* /USER AVATAR BADGE TEXT */}
            </div>
            {/* /USER AVATAR BADGE */}

            </a>
            {/* /USER AVATAR */}  {/* USER STATUS TITLE */}
            <div className="user-status-title">
                <a className="bold" href="https://odindesignthemes.com/vikinger-theme/members/sanstrange/">Sandra Strange</a>
            <span className="bp-verified-badge"></span>  </div>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">
                &#64;sanstrange    </p>
            {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}</div>
            {/* /USER STATUS LIST */}    <a className="widget-box-button button small primary" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/friends">See all friends</a>
                </div>
            {/* /WIDGET BOX CONTENT */}
            </div>
            {/* /WIDGET BOX */}  </div>
            {/* /GRID COLUMN */}

            {/* ACTIVITY FILTERABLE LIST */}
            <div id="activity-filterable-list" className="grid-column" data-userid="1"></div>
            {/* /ACTIVITY FILTERABLE LIST */}

            {/* GRID COLUMN */}
            <div className="grid-column">
            
            {/* WIDGET BOX */}
            <div className="widget-box">
            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">Credits Balance</p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
            
            {/* POINT ITEM LINE LIST */}
            <div className="point-item-line-list">
            {/* POINT ITEM LINE */}
            <div className="point-item-line">
                {/* POINT ITEM LINE IMAGE */}
                <img className="point-item-line-image" src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Gold.png" alt="gold-credit"/>
                {/* /POINT ITEM LINE IMAGE */}

                {/* POINT ITEM LINE INFO */}
                <div className="point-item-line-info">
                {/* POINT ITEM LINE TITLE */}
                <p className="point-item-line-title">596 Gold Credits</p>
                {/* /POINT ITEM LINE TITLE */}
                
                {/* POINT ITEM LINE TEXT */}
                <p className="point-item-line-text">Current Balance</p>
                {/* /POINT ITEM LINE TEXT */}
                </div>
                {/* POINT ITEM LINE INFO */}
            </div>
            {/* /POINT ITEM LINE */}
            {/* POINT ITEM LINE */}
            <div className="point-item-line">
                {/* POINT ITEM LINE IMAGE */}
                <img className="point-item-line-image" src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Gem.png" alt="gem-credit"/>
                {/* /POINT ITEM LINE IMAGE */}

                {/* POINT ITEM LINE INFO */}
                <div className="point-item-line-info">
                {/* POINT ITEM LINE TITLE */}
                <p className="point-item-line-title">580 Gem Credits</p>
                {/* /POINT ITEM LINE TITLE */}
                
                {/* POINT ITEM LINE TEXT */}
                <p className="point-item-line-text">Current Balance</p>
                {/* /POINT ITEM LINE TEXT */}
                </div>
                {/* POINT ITEM LINE INFO */}
            </div>
            {/* /POINT ITEM LINE */}
            {/* POINT ITEM LINE */}
            <div className="point-item-line">
                {/* POINT ITEM LINE IMAGE */}
                <img className="point-item-line-image" src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Emerald.png" alt="emerald-credit"/>
                {/* /POINT ITEM LINE IMAGE */}

                {/* POINT ITEM LINE INFO */}
                <div className="point-item-line-info">
                {/* POINT ITEM LINE TITLE */}
                <p className="point-item-line-title">425 Emerald Credits</p>
                {/* /POINT ITEM LINE TITLE */}
                
                {/* POINT ITEM LINE TEXT */}
                <p className="point-item-line-text">Current Balance</p>
                {/* /POINT ITEM LINE TEXT */}
                </div>
                {/* POINT ITEM LINE INFO */}
            </div>
            {/* /POINT ITEM LINE */}
            </div>
            {/* /POINT ITEM LINE LIST */}  </div>
            {/* /WIDGET BOX CONTENT */}
            </div>
            {/* /WIDGET BOX */}
                {/* PHOTOS WIDGET */}
                <div id="photos-widget" data-userid="1"></div>
                {/* /PHOTOS WIDGET */}

            
            {/* WIDGET BOX */}
            <div className="widget-box">
            {/* WIDGET BOX TITLE */}
            <p className="widget-box-title">Groups</p>
            {/* /WIDGET BOX TITLE */}

            {/* WIDGET BOX CONTENT */}
            <div className="widget-box-content">
            
            {/* USER STATUS LIST */}
            <div className="user-status-list">

            {/* USER STATUS */}
            <div className="user-status user-status-with-icon">

            {/* USER AVATAR */}
            <a className="user-avatar small no-stats user-status-avatar no-border" href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/">

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-40-44" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/3/5f6e4ace97f3f-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            </a>
            {/* /USER AVATAR */}
            {/* USER STATUS TITLE */}
            <p className="user-status-title"><a className="bold" href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/">Street Artists</a></p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">4 members</p>
            {/* /USER STATUS TEXT */}


            {/* ICON SVG */}
            <svg className="icon-public user-status-icon user-status-privacy-icon">
            <use href="#svg-public"></use>
            </svg>
            {/* ICON SVG */}</div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status user-status-with-icon">

            {/* USER AVATAR */}
            <a className="user-avatar small no-stats user-status-avatar no-border" href="https://odindesignthemes.com/vikinger-theme/groups/cosplayers-of-the-world/">

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-40-44" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/1/5f6e4a8528f4e-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            </a>
            {/* /USER AVATAR */}
            {/* USER STATUS TITLE */}
            <p className="user-status-title"><a className="bold" href="https://odindesignthemes.com/vikinger-theme/groups/cosplayers-of-the-world/">Cosplayers of the World</a></p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">3 members</p>
            {/* /USER STATUS TEXT */}


            {/* ICON SVG */}
            <svg className="icon-public user-status-icon user-status-privacy-icon">
            <use href="#svg-public"></use>
            </svg>
            {/* ICON SVG */}</div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status user-status-with-icon">

            {/* USER AVATAR */}
            <a className="user-avatar small no-stats user-status-avatar no-border" href="https://odindesignthemes.com/vikinger-theme/groups/stream-designers/">

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-40-44" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/2/5f6e4aaf89ab9-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            </a>
            {/* /USER AVATAR */}
            {/* USER STATUS TITLE */}
            <p className="user-status-title"><a className="bold" href="https://odindesignthemes.com/vikinger-theme/groups/stream-designers/">Stream Designers</a></p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">3 members</p>
            {/* /USER STATUS TEXT */}


            {/* ICON SVG */}
            <svg className="icon-public user-status-icon user-status-privacy-icon">
            <use href="#svg-public"></use>
            </svg>
            {/* ICON SVG */}</div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status user-status-with-icon">

            {/* USER AVATAR */}
            <a className="user-avatar small no-stats user-status-avatar no-border" href="https://odindesignthemes.com/vikinger-theme/groups/gaming-watchtower/">

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-40-44" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/4/5f6e4af513567-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            </a>
            {/* /USER AVATAR */}
            {/* USER STATUS TITLE */}
            <p className="user-status-title"><a className="bold" href="https://odindesignthemes.com/vikinger-theme/groups/gaming-watchtower/">Gaming Watchtower</a></p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">3 members</p>
            {/* /USER STATUS TEXT */}


            {/* ICON SVG */}
            <svg className="icon-private user-status-icon user-status-privacy-icon">
            <use href="#svg-private"></use>
            </svg>
            {/* ICON SVG */}</div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status user-status-with-icon">

            {/* USER AVATAR */}
            <a className="user-avatar small no-stats user-status-avatar no-border" href="https://odindesignthemes.com/vikinger-theme/groups/living-in-japan/">

            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-40-44" data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/5/5f6e4b297a802-bpfull.jpg"></div>
                {/* /HEXAGON */}
            </div>
            {/* /USER AVATAR CONTENT */}

            </a>
            {/* /USER AVATAR */}
            {/* USER STATUS TITLE */}
            <p className="user-status-title"><a className="bold" href="https://odindesignthemes.com/vikinger-theme/groups/living-in-japan/">Living in Japan</a></p>
            {/* /USER STATUS TITLE */}

            {/* USER STATUS TEXT */}
            <p className="user-status-text small">2 members</p>
            {/* /USER STATUS TEXT */}


            {/* ICON SVG */}
            <svg className="icon-public user-status-icon user-status-privacy-icon">
            <use href="#svg-public"></use>
            </svg>
            {/* ICON SVG */}</div>
            {/* /USER STATUS */}</div>
            {/* /USER STATUS LIST */}    
            <a className="widget-box-button button small secondary" href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/groups">See all groups</a>
                </div>
            {/* /WIDGET BOX CONTENT */}
            </div>
            {/* /WIDGET BOX */}  </div>
            {/* /GRID COLUMN */}
            </div> 
            </div>
        </>
    )
}