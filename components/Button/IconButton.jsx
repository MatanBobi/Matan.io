import classNames from "classnames";
import { Button } from ".";

export const IconButton = (props) => {
  return (
    <Button
      {...props}
      className={classNames("py-4! px-4! flex", props.className)}
    />
  );
};
