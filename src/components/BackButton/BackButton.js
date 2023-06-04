import { ButtonDiv } from "./BackButton.Styled";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function BackButton ()  {
  const location = useLocation();

  const backLink = location.state?.from ?? "/";

  return (
    <ButtonDiv>
      <Button component={Link} to={backLink}>
        Go Back
      </Button>
    </ButtonDiv>
  );
};
