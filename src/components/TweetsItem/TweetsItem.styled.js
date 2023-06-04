import styled from "@emotion/styled";

export const ListLi = styled.li`
  width: 350px;
  height: 460px;
  position: relative;
  padding: 20px 20px 36px 20px;
  text-align: center;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const ListLine = styled.img`
  position: absolute;
  left: 1px;
`;
export const ListAvatar = styled.img`
  position: absolute;
  top: 175px;
  left: 135px;
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 26px;
`;

export const ListWrapperTweetDiv = styled.div`
  margin-top: 80px;
  margin-bottom: 26px;
`;

export const ListTweetsP = styled.p`
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const ListFollowP = styled.p`
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const ListButton = styled.button`
  padding: 14px 56px;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  cursor: pointer;

  :hover {
    color: green;
  }
`;
