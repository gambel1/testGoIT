import TweetsItem from "../TweetsItem/TweetsItem";
import { ListUl } from "./TweetsListStyles";

export default function TweetsList({ users, onClick }) {
  return (
    <ListUl>
      {users.map((user) => {
        return <TweetsItem key={user.id} user={user} onClick={onClick} />;
      })}
    </ListUl>
  );
}
