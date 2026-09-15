import activity from "@/assets/icons/activity.png";
import home from "@/assets/icons/home.png";
import settings from "@/assets/icons/settings.png";
import wallet from "@/assets/icons/wallet.png";

export const icons = {
  home,
  wallet,
  activity,
  settings,
} as const;

export type IconKey = keyof typeof icons;
