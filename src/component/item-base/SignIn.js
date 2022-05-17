import React from 'react';

export default function SignIn() {
    return (
        <>
        {/* style="background: url('https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/login/background.jpg') center center / cover no-repeat" */}
        <div className="vklogin-header">
            <p className="vklogin-header-pretitle">Welcome to</p>

            <p className="vklogin-header-title">Vikinger</p>

            <p className="vklogin-header-text"><span className="bold">The next generation WordPress+Buddypress social community!</span> Connect with your friends with full profiles, reactions, groups, badges, quests, ranks, credits and <span className="bold">much more to come!</span></p>
            </div>
            <div id="login">
                <h1><a href="">Welcome!</a></h1>

                <form name="loginform" id="loginform" action="https://odindesignthemes.com/vikinger-theme/wp-login.php" method="post">
                    <p>
                        <label htmlFor="user_login">Username or Email Address</label>
                        <input type="text" name="log" id="user_login" className="input" defaultValue="" size="20" autocapitalize="off" />
                    </p>

                    <div className="user-pass-wrap">
                        <label htmlFor="user_pass">Password</label>
                        <div className="wp-pwd">
                            <input type="password" name="pwd" id="user_pass" className="input password-input" defaultValue="" size="20" />
                            <button type="button" className="button button-secondary wp-hide-pw hide-if-no-js" data-toggle="0" aria-label="Show password">
                                <span className="dashicons dashicons-visibility" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>
                    <p className="forgetmenot"><input name="rememberme" type="checkbox" id="rememberme" defaultValue="forever"  /> 
                        <label htmlFor="rememberme">Remember Me</label>
                    </p>
                    <p className="submit">
                        <input type="submit" name="wp-submit" id="wp-submit" className="button button-primary button-large" defaultValue="Log In" />
                        <input type="hidden" name="redirect_to" defaultValue="https://odindesignthemes.com/vikinger-theme/blog/" />
                        <input type="hidden" name="testcookie" defaultValue="1" />
                    </p>
                </form>

                <p id="nav">
                    <a href="https://odindesignthemes.com/vikinger-theme/wp-login.php?action=lostpassword">Lost your password?</a>
                </p>
                
                <p id="backtoblog">
                <a href="https://odindesignthemes.com/vikinger-theme/">&larr; Go to Vikinger</a>		</p>
        </div>
        </>
    )
}