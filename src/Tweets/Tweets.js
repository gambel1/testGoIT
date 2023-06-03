import hero from "../images/hero.jpg";
import logo from "../images/logo.svg";
import line from "../images/line.svg";
import avatarBoy from "../images/avatarBoy.svg";
import { useEffect, useState } from "react";

export default function Tweets({ user }) {
  const { id, tweets, followers, avatar = avatarBoy } = user;
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem(`${id}- isFollowing`)) ?? false
  );
  const [isFollowers, setIsFollowers] = useState(
    JSON.parse(localStorage.getItem(`${id}- isFollowers`)) ?? followers
  );

  useEffect(() => {
    localStorage.setItem(`${id}- isFollowing`, JSON.stringify(isFollowing));
    localStorage.setItem(`${id}- isFollowers`, JSON.stringify(isFollowers));
  }, [id, isFollowing, isFollowers]);

  function onFollowClick() {
    setIsFollowing(true);
    setIsFollowers(followers + 1);
  }

  function onFollowingClick() {
    setIsFollowing(false);
    setIsFollowers(followers - 1);
  }

  return (
    <main>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <img src={hero} alt="logo-hero" />
      </div>
      <div>
        <img src={line} alt="white center line" />
      </div>
      <div>
        <img src={avatar} alt="avatar" />
      </div>
      <div>
        <p>{tweets}Tweets</p>
        <p>{isFollowers}Followers</p>
      </div>
      <div>
        {isFollowing ? (
          <button type="button" onClick={onFollowClick}>
            Follow
          </button>
        ) : (
          <button type="button" onClick={onFollowingClick}></button>
        )}
      </div>
    </main>
  );
}

