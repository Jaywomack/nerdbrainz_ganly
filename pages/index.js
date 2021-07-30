import HeroHome from "../components/HeroHome";
import MarketingIcons from "../components/MarketingIcons";
import MediaContainerCard from "../components/MediaContainerCard";
import Profile from "../components/Profile";
import SkillTags from "../components/SkillTags";

export default function Home() {
  return (
    <>
      <HeroHome />
      <MarketingIcons />
      {/* <Profile /> */}
      <MediaContainerCard />
      <SkillTags />
    </>
  );
}
