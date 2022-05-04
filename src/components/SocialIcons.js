import { ReactComponent as ReactDiscordIcon } from "../assets/images/icons/discord.svg";
import { ReactComponent as ReactTwitterIcon } from "../assets/images/icons/twitter.svg";
import { ReactComponent as ReactOpenseaIcon } from "../assets/images/icons/opensea.svg";
const SocialIcons = ({ className }) => {
  return (
    <div className={className + " component-social-icons"}>
      <a>
        <ReactDiscordIcon />
      </a>
      <a>
        <ReactTwitterIcon />
      </a>
      <a>
        <ReactOpenseaIcon />
      </a>
    </div>
  );
};

export default SocialIcons;
