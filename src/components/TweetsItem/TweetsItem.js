import {
  ListLi,
  ListWrapper,
  ListAvatar,
  ListTweetsP,
  ListFollowP,
  ListWrapperTweetDiv,
  ListButton,
  ListLine,
} from "./TweetsItem.styled";
import ImageBg from "../../img/img-1.webp";
import line from "../../img/line.png";
import avatar from "../../img/avatar.png";
import logo from "../../img/logo.svg";

export default function TweetsItem({ user, onClick }) {
  const {
    id,
    user: name,
    followers,
    /*avatar,*/ tweets,
    isFollow = false,
  } = user;

  return (
    <ListLi>
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <img
          src={ImageBg}
          alt="Background frame"
          width="308"
          height="168"
          loading="lazy"
        />
      </div>

      <div>
        <ListLine src={line} alt="White line" />
      </div>

      <div>
        <div>
          {/* <ListWrapper >
            <ListAvatar
              src={avatar}
              alt={name}
              width="62"
              height="62"
              loading="lazy"
            />
            Круг не получилось сделать
          </ListWrapper> */}
          <ListAvatar src={avatar} alt="avatar" />
        </div>
      </div>

      <ListWrapperTweetDiv>
        <ListTweetsP>{tweets.toLocaleString()} tweets</ListTweetsP>
        <ListFollowP>{followers.toLocaleString()} followers</ListFollowP>
      </ListWrapperTweetDiv>

      <ListButton onClick={() => onClick(id)}>
        {isFollow ? "Following" : "Follow"}
      </ListButton>
    </ListLi>
  );
}
