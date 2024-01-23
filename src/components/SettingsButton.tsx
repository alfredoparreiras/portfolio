import SettingLight from "@/assets/Icons/settings.svg";
import SettingDark from "@/assets/Icons/settingsDark.svg";

type SettingButtonProps = {
  darkMode: boolean;
};

const SettingsButton = ({ darkMode }: SettingButtonProps) => {
  return (
    <img src={darkMode ? SettingDark : SettingLight} alt="" className="w-8" />
  );
};

export default SettingsButton;
