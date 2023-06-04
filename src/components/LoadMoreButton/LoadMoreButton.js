import { Button, WrapperButton } from "./LoadMoreButton.styled";

export default function LoadMoreButton({ onClick, loading }) {
  return (
    <WrapperButton>
      <Button disabled={loading} onClick={onClick}>
        {loading ? "Loading..." : "Load more"}
      </Button>
    </WrapperButton>
  );
}
