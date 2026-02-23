import assets from "../assets/assets";
import ServiseCard from "./ServiseCard";
import Title from "./Title";

const Sarvise = () => {
  const serciceData = [
    {
      title: "Advertising",
      description:
        "we turn bold ideas into poweful digital solution that connect engage....",
      icon: assets.ads_icon,
    },
    {
      title: "Content marketing",
      description: "we help you plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content writing",
      description:
        "we hlpe you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social media",
      description:
        "we hlpe you build a strong social media  presence and engage with your audience",
      icon: assets.social_icon,
    },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap7 px-4 sm:px-12 lg:24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title title={"How can we help? "}desc={"From strategy to execution we digital solutions that move your business forword."} />
      <div className="grid md:grid-cols-2">
        {serciceData.map((Service, id) => (
          <ServiseCard key={id} Service={Service} index={id} />
        ))}
      </div>
    </div>
  );
};

export default Sarvise;
