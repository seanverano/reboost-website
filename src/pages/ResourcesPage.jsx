import NavbarTwo from "../components/NavbarTwo";
import { GrResources } from "react-icons/gr";
import { GoArrowUpRight } from "react-icons/go";

const ResourcesPage = () => {
  return (
    <div className="relative flex w-full min-h-screen bg-[#E8F8EE] pb-20">
      <NavbarTwo />
      <div className="font-manrope w-full flex flex-col justify-start items-start">
        <h1 className="text-left flex items-center font-playfair gap-2 text-[#000000] text-6xl font-semibold leading-snug mt-12 pt-20 pl-20">
          <GrResources /> Resources & Attribution
        </h1>

        <p className="font-manrope text-[#0000000] text-3xl mt-4 pt-10 pl-20 font-semibold">
          Design Resources For Chrome Extension
        </p>

        <div className="w-full pl-20 pr-20 mt-8 space-y-6">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Chrome Extension Icon/Logo</h3>
            <a
              href="https://www.flaticon.com/free-icons/water-drop"
              title="water drop icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Water drop icons created by Freepik - Flaticon <GoArrowUpRight />
            </a>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Menu Icon</h3>
            <a
              href="https://www.flaticon.com/free-icons/feature"
              title="feature icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feature icons created by Graphics Plazza - Flaticon{" "}
              <GoArrowUpRight />
            </a>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">
              Wellness Reminder Sliding Banner Images
            </h3>
            <a
              href="https://storyset.com/people"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              People illustrations by Storyset <GoArrowUpRight />
            </a>
            <a
              href="https://storyset.com/work"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Work illustrations by Storyset <GoArrowUpRight />
            </a>
            <a
              href="https://storyset.com/happy"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Happy illustrations by Storyset <GoArrowUpRight />
            </a>
          </div>
        </div>

        <p className="font-manrope text-[#0000000] text-3xl mt-4 pt-10 pl-20 font-semibold">
          Design Resources For Official Site
        </p>

        <div className="w-full pl-20 pr-20 mt-8 space-y-6">
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Chrome Extension Icon/Logo</h3>
            <a
              href="https://www.flaticon.com/free-icons/water-drop"
              title="water drop icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Water drop icons created by Freepik - Flaticon <GoArrowUpRight />
            </a>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Water Bottle Icon</h3>
            <a
              href="https://www.flaticon.com/free-icons/hydration"
              title="hydration icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hydration icons created by Freepik - Flaticon <GoArrowUpRight />
            </a>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Bell Icon</h3>
            <a
              href="https://www.flaticon.com/free-icons/notification"
              title="notification icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notification icons created by Pixel perfect - Flaticon{" "}
              <GoArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
