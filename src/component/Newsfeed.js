import React from "react";
// import Background from '../../public/images/banner-bg.png';

export default function Newsfeed() {
  var backgroundStyle = {
    // backgroundImage: "url(" + { Background } +") center center / cover no-repeat ",
    // backgroundImage: `url(${Background}) center center / cover no-repeat `,
    // backgroundImage: "{../public/images/banner-bg.png}",
    backgroundImage:
      "url(" +
      "https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/banner/banner-bg.png" +
      ")",
    backgroundPosition: "center center",
    backgroundRepeat: "cover no-repeat",
  };

  return (
    <>
      <div className="content-grid">
        {/* <div className="section-banner" style="background: url('https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/banner/banner-bg.png') center center / cover no-repeat;"> */}
        <div className="section-banner" style={backgroundStyle}>
          <img
            className="section-banner-icon"
            src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/banner/newsfeed-icon.png"
            alt="section-icon"
          />
          <p className="section-banner-title">Newsfeed</p>

          <p className="section-banner-text">
            Check what your friends have been up to!
          </p>
        </div>
        <div className="grid grid-3-6-3 mobile-prefer-content">
          <div className="grid-column">
            <div className="widget-box">
              <p className="widget-box-title">Newest Members</p>

              <div className="widget-box-content">
                <div className="user-status-list">
                  <div className="user-status">
                    <a
                      className="user-avatar small  user-status-avatar no-border no-outline"
                      href="https://odindesignthemes.com/vikinger-theme/members/sanstrange/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/10/5f6d2f896ea48-bpfull.jpg"
                        ></div>
                      </div>

                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          data-scalestop="1"
                          data-scaleend="6"
                        ></div>
                      </div>

                      <div className="user-avatar-progress-border">
                        <div className="hexagon-border-40-44"></div>
                      </div>

                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div className="hexagon-22-24"></div>
                        </div>

                        <div className="user-avatar-badge-content">
                          <div className="hexagon-dark-16-18"></div>
                        </div>

                        <p className="user-avatar-badge-text">1</p>
                      </div>
                    </a>

                    <div className="user-status-title">
                      <a
                        className="bold"
                        href="https://odindesignthemes.com/vikinger-theme/members/sanstrange/"
                      >
                        Sandra Strange
                      </a>
                      <span className="bp-verified-badge"></span>{" "}
                    </div>

                    <p className="user-status-text small">&#64;sanstrange </p>
                  </div>

                  <div className="user-status">
                    <a
                      className="user-avatar small  user-status-avatar no-border no-outline"
                      href="https://odindesignthemes.com/vikinger-theme/members/sakuraro/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/9/5f6d2f71afac2-bpfull.jpg"
                        ></div>
                      </div>

                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          data-scalestop="4"
                          data-scaleend="6"
                        ></div>
                      </div>

                      <div className="user-avatar-progress-border">
                        <div className="hexagon-border-40-44"></div>
                      </div>

                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div className="hexagon-22-24"></div>
                        </div>

                        <div className="user-avatar-badge-content">
                          <div className="hexagon-dark-16-18"></div>
                        </div>

                        <p className="user-avatar-badge-text">4</p>
                      </div>
                    </a>

                    <div className="user-status-title">
                      <a
                        className="bold"
                        href="https://odindesignthemes.com/vikinger-theme/members/sakuraro/"
                      >
                        Rosie Sakura
                      </a>
                    </div>

                    <p className="user-status-text small">&#64;sakuraro </p>
                  </div>

                  <div className="user-status">
                    <a
                      className="user-avatar small  user-status-avatar no-border no-outline"
                      href="https://odindesignthemes.com/vikinger-theme/members/dgreyson/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/8/5f6d2f6a96770-bpfull.jpg"
                        ></div>
                      </div>

                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          data-scalestop="1"
                          data-scaleend="6"
                        ></div>
                      </div>

                      <div className="user-avatar-progress-border">
                        <div className="hexagon-border-40-44"></div>
                      </div>

                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div className="hexagon-22-24"></div>
                        </div>

                        <div className="user-avatar-badge-content">
                          <div className="hexagon-dark-16-18"></div>
                        </div>

                        <p className="user-avatar-badge-text">1</p>
                      </div>
                    </a>

                    <div className="user-status-title">
                      <a
                        className="bold"
                        href="https://odindesignthemes.com/vikinger-theme/members/dgreyson/"
                      >
                        Damian Greyson
                      </a>
                    </div>

                    <p className="user-status-text small">&#64;dgreyson </p>
                  </div>

                  <div className="user-status">
                    <a
                      className="user-avatar small  user-status-avatar no-border no-outline"
                      href="https://odindesignthemes.com/vikinger-theme/members/greengoo/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/7/5f6d2f62a8690-bpfull.jpg"
                        ></div>
                      </div>

                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          data-scalestop="1"
                          data-scaleend="6"
                        ></div>
                      </div>

                      <div className="user-avatar-progress-border">
                        <div className="hexagon-border-40-44"></div>
                      </div>

                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div className="hexagon-22-24"></div>
                        </div>

                        <div className="user-avatar-badge-content">
                          <div className="hexagon-dark-16-18"></div>
                        </div>

                        <p className="user-avatar-badge-text">1</p>
                      </div>
                    </a>

                    <div className="user-status-title">
                      <a
                        className="bold"
                        href="https://odindesignthemes.com/vikinger-theme/members/greengoo/"
                      >
                        The Green Goo
                      </a>
                    </div>

                    <p className="user-status-text small">&#64;greengoo </p>
                  </div>

                  <div className="user-status">
                    <a
                      className="user-avatar small  user-status-avatar no-border no-outline"
                      href="https://odindesignthemes.com/vikinger-theme/members/brdwonder/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/6/5f6d2f1e67572-bpfull.jpg"
                        ></div>
                      </div>

                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          data-scalestop="2"
                          data-scaleend="6"
                        ></div>
                      </div>

                      <div className="user-avatar-progress-border">
                        <div className="hexagon-border-40-44"></div>
                      </div>

                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div className="hexagon-22-24"></div>
                        </div>

                        <div className="user-avatar-badge-content">
                          <div className="hexagon-dark-16-18"></div>
                        </div>

                        <p className="user-avatar-badge-text">2</p>
                      </div>
                    </a>

                    <div className="user-status-title">
                      <a
                        className="bold"
                        href="https://odindesignthemes.com/vikinger-theme/members/brdwonder/"
                      >
                        Bearded Wonder
                      </a>
                    </div>

                    <p className="user-status-text small">&#64;brdwonder </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget-box">
              <p className="widget-box-title">Quests</p>

              <div className="widget-box-content">
                <div className="achievement-preview-list">
                  <div className="achievement-preview">
                    <div className="achievement-preview-info">
                      <img
                        className="achievement-preview-image"
                        src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/quest/quest-open.png"
                        alt="quest-open"
                      />

                      <p className="achievement-preview-title">Let’s Talk!</p>

                      <p className="achievement-preview-text">
                        Successfully sent or replied to 5 private messages
                      </p>
                    </div>

                    <div className="progress-stat">
                      <div
                        className="progress-stat-bar achievement-simple-progress"
                        data-scalestop="0"
                        data-scaleend="1"
                      ></div>
                    </div>
                  </div>

                  <div className="achievement-preview">
                    <div className="achievement-preview-info">
                      <img
                        className="achievement-preview-image"
                        src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/quest/quest-open.png"
                        alt="quest-open"
                      />

                      <p className="achievement-preview-title">
                        Making Friends
                      </p>

                      <p className="achievement-preview-text">
                        Successfully sent 5 friend request
                      </p>
                    </div>

                    <div className="progress-stat">
                      <div
                        className="progress-stat-bar achievement-simple-progress"
                        data-scalestop="0"
                        data-scaleend="1"
                      ></div>
                    </div>
                  </div>

                  <div className="achievement-preview">
                    <div className="achievement-preview-info">
                      <img
                        className="achievement-preview-image"
                        src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/quest/quest-open.png"
                        alt="quest-open"
                      />

                      <p className="achievement-preview-title">
                        Posting Machine
                      </p>

                      <p className="achievement-preview-text">
                        Posted more than 20 profile activities in one day
                      </p>
                    </div>

                    <div className="progress-stat">
                      <div
                        className="progress-stat-bar achievement-simple-progress"
                        data-scalestop="0"
                        data-scaleend="1"
                      ></div>
                    </div>
                  </div>

                  <div className="achievement-preview">
                    <div className="achievement-preview-info">
                      <img
                        className="achievement-preview-image"
                        src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/quest/quest-open.png"
                        alt="quest-open"
                      />

                      <p className="achievement-preview-title">
                        BestSeller Post
                      </p>

                      <p className="achievement-preview-text">
                        Received more than 100 total visits on any post
                      </p>
                    </div>

                    <div className="progress-stat">
                      <div
                        className="progress-stat-bar achievement-simple-progress"
                        data-scalestop="0"
                        data-scaleend="1"
                      ></div>
                    </div>
                  </div>

                  <div className="achievement-preview">
                    <div className="achievement-preview-info">
                      <img
                        className="achievement-preview-image"
                        src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/quest/quest-open.png"
                        alt="quest-open"
                      />

                      <p className="achievement-preview-title">
                        Popular Writer
                      </p>

                      <p className="achievement-preview-text">
                        Received more than 50 daily visits on any post
                      </p>
                    </div>

                    <div className="progress-stat">
                      <div
                        className="progress-stat-bar achievement-simple-progress"
                        data-scalestop="0"
                        data-scaleend="1"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="activity-filterable-list" className="grid-column"></div>

          <div className="grid-column">
            <div className="widget-box">
              <p className="widget-box-title">Popular Groups</p>

              <div className="widget-box-content">
                <div className="user-status-list">
                  <div className="user-status user-status-with-icon">
                    <a
                      className="user-avatar small no-stats user-status-avatar no-border"
                      href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-40-44"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/3/5f6e4ace97f3f-bpfull.jpg"
                        ></div>
                      </div>
                    </a>

                    <p className="user-status-title">
                      <a
                        className="bold"
                        href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/"
                      >
                        Street Artists
                      </a>
                    </p>

                    <p className="user-status-text small">4 members</p>

                    <svg className="icon-public user-status-icon user-status-privacy-icon">
                      <use href="#svg-public"></use>
                    </svg>
                  </div>

                  <div className="user-status user-status-with-icon">
                    <a
                      className="user-avatar small no-stats user-status-avatar no-border"
                      href="https://odindesignthemes.com/vikinger-theme/groups/cosplayers-of-the-world/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-40-44"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/1/5f6e4a8528f4e-bpfull.jpg"
                        ></div>
                      </div>
                    </a>

                    <p className="user-status-title">
                      <a
                        className="bold"
                        href="https://odindesignthemes.com/vikinger-theme/groups/cosplayers-of-the-world/"
                      >
                        Cosplayers of the World
                      </a>
                    </p>

                    <p className="user-status-text small">3 members</p>

                    <svg className="icon-public user-status-icon user-status-privacy-icon">
                      <use href="#svg-public"></use>
                    </svg>
                  </div>

                  <div className="user-status user-status-with-icon">
                    <a
                      className="user-avatar small no-stats user-status-avatar no-border"
                      href="https://odindesignthemes.com/vikinger-theme/groups/stream-designers/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-40-44"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/2/5f6e4aaf89ab9-bpfull.jpg"
                        ></div>
                      </div>
                    </a>

                    <p className="user-status-title">
                      <a
                        className="bold"
                        href="https://odindesignthemes.com/vikinger-theme/groups/stream-designers/"
                      >
                        Stream Designers
                      </a>
                    </p>

                    <p className="user-status-text small">3 members</p>

                    <svg className="icon-public user-status-icon user-status-privacy-icon">
                      <use href="#svg-public"></use>
                    </svg>
                  </div>

                  <div className="user-status user-status-with-icon">
                    <a
                      className="user-avatar small no-stats user-status-avatar no-border"
                      href="https://odindesignthemes.com/vikinger-theme/groups/gaming-watchtower/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-40-44"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/4/5f6e4af513567-bpfull.jpg"
                        ></div>
                      </div>
                    </a>

                    <p className="user-status-title">
                      <a
                        className="bold"
                        href="https://odindesignthemes.com/vikinger-theme/groups/gaming-watchtower/"
                      >
                        Gaming Watchtower
                      </a>
                    </p>

                    <p className="user-status-text small">3 members</p>

                    <svg className="icon-private user-status-icon user-status-privacy-icon">
                      <use href="#svg-private"></use>
                    </svg>
                  </div>

                  <div className="user-status user-status-with-icon">
                    <a
                      className="user-avatar small no-stats user-status-avatar no-border"
                      href="https://odindesignthemes.com/vikinger-theme/groups/living-in-japan/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-40-44"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/5/5f6e4b297a802-bpfull.jpg"
                        ></div>
                      </div>
                    </a>

                    <p className="user-status-title">
                      <a
                        className="bold"
                        href="https://odindesignthemes.com/vikinger-theme/groups/living-in-japan/"
                      >
                        Living in Japan
                      </a>
                    </p>

                    <p className="user-status-text small">2 members</p>

                    <svg className="icon-public user-status-icon user-status-privacy-icon">
                      <use href="#svg-public"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="widget-box">
              <p className="widget-box-title">Badges</p>

              <div className="widget-box-content">
                <div className="achievement-preview-list">
                  <div className="achievement-preview">
                    <div className="achievement-preview-info">
                      <img
                        className="achievement-preview-image"
                        src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Ruler-of-Masses.png"
                        alt="Ruler of Masses"
                      />

                      <p className="achievement-preview-title">
                        Ruler of Masses
                      </p>

                      <p className="achievement-preview-text">
                        Was promoted to moderator or admin of 5 groups
                      </p>
                    </div>

                    <div className="progress-stat">
                      <div
                        className="progress-stat-bar achievement-simple-progress"
                        data-scalestop="0"
                        data-scaleend="1"
                      ></div>
                    </div>
                  </div>

                  <div className="achievement-preview">
                    <div className="achievement-preview-info">
                      <img
                        className="achievement-preview-image"
                        src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Bronze-User.png"
                        alt="Bronze User"
                      />

                      <p className="achievement-preview-title">Bronze User</p>

                      <p className="achievement-preview-text">
                        Has posted more than 1 post on their profile
                      </p>
                    </div>

                    <div className="progress-stat">
                      <div
                        className="progress-stat-bar achievement-simple-progress"
                        data-scalestop="0"
                        data-scaleend="1"
                      ></div>
                    </div>
                  </div>

                  <div className="achievement-preview">
                    <div className="achievement-preview-info">
                      <img
                        className="achievement-preview-image"
                        src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/The-Warrior.png"
                        alt="The Warrior"
                      />

                      <p className="achievement-preview-title">The Warrior</p>

                      <p className="achievement-preview-text">
                        Helped the team enforce the community rules
                      </p>
                    </div>

                    <div className="progress-stat">
                      <div
                        className="progress-stat-bar achievement-simple-progress"
                        data-scalestop="0"
                        data-scaleend="0"
                      ></div>
                    </div>
                  </div>

                  <div className="achievement-preview">
                    <div className="achievement-preview-info">
                      <img
                        className="achievement-preview-image"
                        src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Globe-Trotter.png"
                        alt="Globe Trotter"
                      />

                      <p className="achievement-preview-title">Globe Trotter</p>

                      <p className="achievement-preview-text">
                        Has joined at least 10 different groups
                      </p>
                    </div>

                    <div className="progress-stat">
                      <div
                        className="progress-stat-bar achievement-simple-progress"
                        data-scalestop="0"
                        data-scaleend="1"
                      ></div>
                    </div>
                  </div>

                  <div className="achievement-preview">
                    <div className="achievement-preview-info">
                      <img
                        className="achievement-preview-image"
                        src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Credits-Tycoon.png"
                        alt="Credits Tycoon"
                      />

                      <p className="achievement-preview-title">
                        Credits Tycoon
                      </p>

                      <p className="achievement-preview-text">
                        Earned at least 800 of each of the three credits
                      </p>
                    </div>

                    <div className="progress-stat">
                      <div
                        className="progress-stat-bar achievement-simple-progress"
                        data-scalestop="0"
                        data-scaleend="3"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
