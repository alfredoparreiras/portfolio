type Skill = {
  name: string;
  imgUrl: string;
  DarkImgUrl: string;
};

type IconsProp = {
  skill: Skill;
  darkMode: boolean | null;
};

const Icons = ({ skill, darkMode }: IconsProp) => {
  return (
    <img
      src={darkMode ? skill.DarkImgUrl : skill.imgUrl}
      alt={`${skill.name}' icons'`}
      className="max-w-icon xlg:max-w-xIcon"
    />
  );
};

export default Icons;
