import React from "react";

export default function Navigation() {
  return (
    <>
      <nav
        id="navigation-widget-small"
        className="navigation-widget navigation-widget-desktop navigation-widget-closed sidebar left navigation-widget-delayed"
      >
        <ul className="menu small">
          <li className="menu-item active">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="./newsfeed.html"
              data-title="Newsfeed"
            >
              <svg className="icon-newsfeed menu-item-link-icon">
                <use href="#svg-newsfeed"></use>
              </svg>
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="./members.html"
              data-title="Members"
            >
              <svg className="icon-members menu-item-link-icon">
                <use href="#svg-members"></use>
              </svg>
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="./groups.html"
              data-title="Groups"
            >
              <svg className="icon-group menu-item-link-icon">
                <use href="#svg-group"></use>
              </svg>
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="./badges.html"
              data-title="Badges"
            >
              <svg className="icon-badges menu-item-link-icon">
                <use href="#svg-badges"></use>
              </svg>
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="./quests.html"
              data-title="Quests"
            >
              <svg className="icon-quests menu-item-link-icon">
                <use href="#svg-quests"></use>
              </svg>
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="./ranks.html"
              data-title="Ranks"
            >
              <svg className="icon-ranks menu-item-link-icon">
                <use href="#svg-ranks"></use>
              </svg>
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="./credits.html"
              data-title="Credits"
            >
              <svg className="icon-credits menu-item-link-icon">
                <use href="#svg-credits"></use>
              </svg>
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="./blogs.html"
              data-title="Blog"
            >
              <svg className="icon-blog-posts menu-item-link-icon">
                <use href="#svg-blog-posts"></use>
              </svg>
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="./forums.html"
              data-title="Forums"
            >
              <svg className="icon-forums menu-item-link-icon">
                <use href="#svg-forums"></use>
              </svg>
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="./shop.html"
              data-title="Shop"
            >
              <svg className="icon-marketplace menu-item-link-icon">
                <use href="#svg-marketplace"></use>
              </svg>
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link text-tooltip-tfr"
              href="./membership.html"
              data-title="Memberships"
            >
              <svg className="icon-memberships menu-item-link-icon">
                <use href="#svg-memberships"></use>
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <nav
        id="navigation-widget"
        className="navigation-widget navigation-widget-desktop sidebar left navigation-widget-hidden"
        data-simplebar
      >
        <ul className="menu ">
          <li className="menu-item active">
            <a
              className="menu-item-link "
              href="./newsfeed.html"
              data-title="Newsfeed"
            >
              <svg className="icon-newsfeed menu-item-link-icon">
                <use href="#svg-newsfeed"></use>
              </svg>
              Newsfeed{" "}
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link "
              href="./members.html"
              data-title="Members"
            >
              <svg className="icon-members menu-item-link-icon">
                <use href="#svg-members"></use>
              </svg>
              Members{" "}
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link "
              href="./groups.html"
              data-title="Groups"
            >
              <svg className="icon-group menu-item-link-icon">
                <use href="#svg-group"></use>
              </svg>
              Groups{" "}
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link "
              href="./badges.html"
              data-title="Badges"
            >
              <svg className="icon-badges menu-item-link-icon">
                <use href="#svg-badges"></use>
              </svg>
              Badges{" "}
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link "
              href="./quests.html"
              data-title="Quests"
            >
              <svg className="icon-quests menu-item-link-icon">
                <use href="#svg-quests"></use>
              </svg>
              Quests{" "}
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link "
              href="./ranks.html"
              data-title="Ranks"
            >
              <svg className="icon-ranks menu-item-link-icon">
                <use href="#svg-ranks"></use>
              </svg>
              Ranks{" "}
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link "
              href="./credits.html"
              data-title="Credits"
            >
              <svg className="icon-credits menu-item-link-icon">
                <use href="#svg-credits"></use>
              </svg>
              Credits{" "}
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link "
              href="./blogs.html"
              data-title="Blog"
            >
              <svg className="icon-blog-posts menu-item-link-icon">
                <use href="#svg-blog-posts"></use>
              </svg>
              Blog{" "}
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link "
              href="./forums.html"
              data-title="Forums"
            >
              <svg className="icon-forums menu-item-link-icon">
                <use href="#svg-forums"></use>
              </svg>
              Forums{" "}
            </a>
          </li>

          <li className="menu-item ">
            <a className="menu-item-link " href="./shop.html" data-title="Shop">
              <svg className="icon-marketplace menu-item-link-icon">
                <use href="#svg-marketplace"></use>
              </svg>
              Shop{" "}
            </a>
          </li>

          <li className="menu-item ">
            <a
              className="menu-item-link "
              href="./membership.html"
              data-title="Memberships"
            >
              <svg className="icon-memberships menu-item-link-icon">
                <use href="#svg-memberships"></use>
              </svg>
              Memberships{" "}
            </a>
          </li>
        </ul>
      </nav>

      <nav
        id="navigation-widget-mobile"
        className="navigation-widget navigation-widget-mobile sidebar left navigation-widget-hidden"
        data-simplebar
      >
        <div className="navigation-widget-close-button">
          <svg className="icon-back-arrow navigation-widget-close-button-icon">
            <use href="#svg-back-arrow"></use>
          </svg>
        </div>

        {/* <div className="navigation-widget-actions">
          <a
            className="button primary login-button"
            href="https://odindesignthemes.com/vikinger-theme/wp-login.php"
          >
            Login
          </a>
        </div> */}

        <div className="navigation-widget-section">
          <p className="navigation-widget-section-title">Sections</p>

          <ul className="menu ">
            <li className="menu-item active">
              <a
                className="menu-item-link "
                href="./newsfeed.html"
                data-title="Newsfeed"
              >
                <svg className="icon-newsfeed menu-item-link-icon">
                  <use href="#svg-newsfeed"></use>
                </svg>
                Newsfeed{" "}
              </a>
            </li>

            <li className="menu-item ">
              <a
                className="menu-item-link "
                href="./members.html"
                data-title="Members"
              >
                <svg className="icon-members menu-item-link-icon">
                  <use href="#svg-members"></use>
                </svg>
                Members{" "}
              </a>
            </li>

            <li className="menu-item ">
              <a
                className="menu-item-link "
                href="./groups.html"
                data-title="Groups"
              >
                <svg className="icon-group menu-item-link-icon">
                  <use href="#svg-group"></use>
                </svg>
                Groups{" "}
              </a>
            </li>

            <li className="menu-item ">
              <a
                className="menu-item-link "
                href="./badges.html"
                data-title="Badges"
              >
                <svg className="icon-badges menu-item-link-icon">
                  <use href="#svg-badges"></use>
                </svg>
                Badges{" "}
              </a>
            </li>

            <li className="menu-item ">
              <a
                className="menu-item-link "
                href="./quests.html"
                data-title="Quests"
              >
                <svg className="icon-quests menu-item-link-icon">
                  <use href="#svg-quests"></use>
                </svg>
                Quests{" "}
              </a>
            </li>

            <li className="menu-item ">
              <a
                className="menu-item-link "
                href="./ranks.html"
                data-title="Ranks"
              >
                <svg className="icon-ranks menu-item-link-icon">
                  <use href="#svg-ranks"></use>
                </svg>
                Ranks{" "}
              </a>
            </li>

            <li className="menu-item ">
              <a
                className="menu-item-link "
                href="./credits.html"
                data-title="Credits"
              >
                <svg className="icon-credits menu-item-link-icon">
                  <use href="#svg-credits"></use>
                </svg>
                Credits{" "}
              </a>
            </li>

            <li className="menu-item ">
              <a
                className="menu-item-link "
                href="./blogs.html"
                data-title="Blog"
              >
                <svg className="icon-blog-posts menu-item-link-icon">
                  <use href="#svg-blog-posts"></use>
                </svg>
                Blog{" "}
              </a>
            </li>

            <li className="menu-item ">
              <a
                className="menu-item-link "
                href="./forums.html"
                data-title="Forums"
              >
                <svg className="icon-forums menu-item-link-icon">
                  <use href="#svg-forums"></use>
                </svg>
                Forums{" "}
              </a>
            </li>

            <li className="menu-item ">
              <a
                className="menu-item-link "
                href="./shop.html"
                data-title="Shop"
              >
                <svg className="icon-marketplace menu-item-link-icon">
                  <use href="#svg-marketplace"></use>
                </svg>
                Shop{" "}
              </a>
            </li>

            <li className="menu-item ">
              <a
                className="menu-item-link "
                href="./membership.html"
                data-title="Memberships"
              >
                <svg className="icon-memberships menu-item-link-icon">
                  <use href="#svg-memberships"></use>
                </svg>
                Memberships{" "}
              </a>
            </li>
          </ul>
        </div>

        <div className="navigation-widget-section space-top">
          <p className="navigation-widget-section-title">Main Links</p>

          <ul className="navigation-widget-section-menu">
            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./profile.html"
              >
                Home
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a className="navigation-widget-section-menu-item-link" href="#">
                More
              </a>

              <ul className="navigation-widget-section-menu">
                <li className="navigation-widget-section-menu-item">
                  <a
                    className="navigation-widget-section-menu-item-link"
                    href="https://themeforest.net/user/odin_design"
                  >
                    Other Items
                  </a>
                </li>

                <li className="navigation-widget-section-menu-item">
                  <a
                    className="navigation-widget-section-menu-item-link"
                    href="https://odindesignthemes.com/"
                  >
                    Our Website
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="navigation-widget-section ">
          <p className="navigation-widget-section-title">BuddyPress</p>

          <ul className="navigation-widget-section-menu">
            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./profile.html"
              >
                Profile Timeline
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./profileAbout.html"
              >
                Profile About
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./profileFriend.html"
              >
                Profile Friends
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a className="navigation-widget-section-menu-item-link">
                Profile Groups
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./posts.html"
              >
                Profile Blog Posts
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./profilePhotos.html"
              >
                Profile Photos
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./newsfeed.html"
              >
                Activity
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./members.html"
              >
                Members
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./groups.html"
              >
                Groups
              </a>
            </li>
          </ul>
        </div>

        <div className="navigation-widget-section ">
          <p className="navigation-widget-section-title">GamiPress</p>

          <ul className="navigation-widget-section-menu">
            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./badges.html"
              >
                Badges
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./profileBadgets.html"
              >
                Profile Badges
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./quests.html"
              >
                Quests
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./profileQuests.html"
              >
                Profile Quests
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./ranks.html"
              >
                Ranks
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./profileRanks.html"
              >
                Profile Rank
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./credits.html"
              >
                Credits
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./profileCredits.html"
              >
                Profile Credits
              </a>
            </li>
          </ul>
        </div>

        <div className="navigation-widget-section ">
          <p className="navigation-widget-section-title">bbPress</p>

          <ul className="navigation-widget-section-menu">
            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./forums.html"
              >
                Forums
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./subforums.html"
              >
                SubForums
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./forumsThread.html"
              >
                Open Topic
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="./profileForum.html"
              >
                Profile Forum Activity
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/forums/replies/"
              >
                Profile Forum Replies
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/forums/engagements/"
              >
                Profile Forum Engagement
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/forums/favorites/"
              >
                Profile Forum Favorites
              </a>
            </li>
          </ul>
        </div>

        <div className="navigation-widget-section ">
          <p className="navigation-widget-section-title">More Links</p>

          <ul className="navigation-widget-section-menu">
            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="https://odindesignthemes.com/vikinger-theme/groups/cosplayers-of-the-world/"
              >
                Group Timeline
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="https://odindesignthemes.com/vikinger-theme/groups/cosplayers-of-the-world/members/"
              >
                Group Members
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="https://odindesignthemes.com/vikinger-theme/groups/cosplayers-of-the-world/photos/"
              >
                Group Photos
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="https://odindesignthemes.com/vikinger-theme/landing/"
              >
                Landing
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="https://odindesignthemes.com/vikinger-theme/blog/"
              >
                Blog
              </a>
            </li>

            <li className="navigation-widget-section-menu-item">
              <a
                className="navigation-widget-section-menu-item-link"
                href="https://odindesignthemes.com/vikinger-theme/groups/gaming-watchtower/"
              >
                Private Group
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
