const openLoginPopup = (address: string) => {
  const loginUrl = address;
  const windowName = "googleLoginPopup";
  const width = 500;
  const height = 600;

  const left = window.screen.width / 2 - width / 2;
  const top = window.screen.height / 2 - height / 2;

  const options = `width=${width},height=${height},top=${top},left=${left}`;

  window.open(loginUrl, windowName, options);
};

export default openLoginPopup;
