import { useState } from "react";

function useModal() {
  const [isShowing, setIsShowing] = useState(false);

  function toggleModal() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggleModal,
  };
}

export default useModal;
