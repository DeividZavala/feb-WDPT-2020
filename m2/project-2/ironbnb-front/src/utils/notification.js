import UIkit from "uikit";

export const buildNotification = (
  message,
  status,
  icon = "check",
  pos = "top-right"
) => {
  UIkit.notification({
    message: `<span uk-icon='icon: ${icon}'></span> ${message}`,
    status,
    pos,
  });
};
