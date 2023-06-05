import getUsers from "../../api/Api";
import useLocalStorage from "../../hooks/useLocalStorage";
import { limit, lsKeys, totalItems } from "../../refs/constants";
import TweetsList from "../../components/TweetsList/TweetsList";
import ToolsBar from "../../components/ToolsBar/ToolsBar";
import BackButton from "../../components/BackButton/BackButton";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";

import { useEffect, useState } from "react";

export default function Tweets() {
  const [users, setUsers] = useLocalStorage(lsKeys.users, []);
  const [followings, setFollowings] = useLocalStorage(lsKeys.followings, []);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(totalItems);
  const [indexLimit, setIndexLimit] = useState(limit);
  const [isLoading, setIsLoading] = useState(false);
  const [isOffsetPage, setIsOffsetPage] = useState(false);

  const filter = (lsKeys, ["Show all"]);

  const isSameUser = (a, b) => a.id === b.id;
  const compareArr = (arrA, arrB, compareFunction) =>
    arrA.filter(
      (arrAValue) =>
        !arrB.some((arrBValue) => compareFunction(arrAValue, arrBValue))
    );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getUsers(page);

      setUsers((prevUsers) => {
        const newUser = data.map((user) => {
          if (followings.includes(user.id)) {
            return { ...user, isFollow: true };
          }
          return { ...user, isFollow: false };
        });

        const compareUsers = compareArr(prevUsers, data, isSameUser);

        return [...compareUsers, ...newUser];
      });

      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const offsetTrigger = 350;

    window.addEventListener("scroll", () => {
      window.scrollY > offsetTrigger
        ? setIsOffsetPage(true)
        : setIsOffsetPage(false);
    });
  }, []);

  const handleFollow = async (userId) => {
    setFollowings((prevFollowings) => {
      const index = prevFollowings.indexOf(userId);

      setUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user.id === userId) {
            user.isFollow = !user.isFollow;
            user.followers = user.isFollow
              ? user.followers + 1
              : user.followers - 1;
          }
          return user;
        })
      );

      if (index === -1) {
        return [...prevFollowings, userId];
      } else {
        prevFollowings.splice(index, 1);
        return [...prevFollowings];
      }
    });
  };

  const handleChangePage = () => {
    setPage((prevPage) => prevPage + 1);
    setIndexLimit((prevIndexLimit) => prevIndexLimit + limit);
    setTotalHits((prevTotalHits) => prevTotalHits - limit);
  };

  const filteredUsers = users
    .filter((user) => {
      if (filter === "Follow") return !user.isFollow;
      if (filter === "Followings") return user.isFollow;

      return user;
    })
    .sort((a, b) => a.id - b.id)
    .splice(0, indexLimit);

  return (
    <div>
      <ToolsBar>
        <BackButton />
      </ToolsBar>

      {users && <TweetsList users={filteredUsers} onClick={handleFollow} />}

      {totalHits > limit && (
        <LoadMoreButton loading={isLoading} onClick={handleChangePage} />
      )}
      {isOffsetPage}
    </div>
  );
}
