import NavbarTwo from "../components/navbars/NavbarTwo";
import { GrResources } from "react-icons/gr";

const ResourcesPage = () => {
  return (
    <div className="relative flex w-full min-h-screen bg-[#E8F8EE] pb-10 md:pb-20">
      <NavbarTwo />
      <div className="font-manrope w-full flex flex-col justify-start items-start px-4 sm:px-10 md:px-20">
        <h1
          className="text-left flex items-center font-playfair gap-2 text-[#000000] 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-semibold leading-snug 
          mt-6 sm:mt-8 md:mt-12 
          pt-10 sm:pt-15 md:pt-20"
        >
          <GrResources className="mr-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
          Resources
        </h1>

        <p
          className="font-manrope text-[#0000000] 
          text-2xl sm:text-3xl 
          mt-4 pt-10 
          font-semibold"
        >
          Design Resources For Chrome Extension
        </p>

        <div className="w-full sm:px-0 mt-8 space-y-6">
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-base sm:text-lg">
              Chrome Extension Icon/Logo
            </h3>
            <a
              href="https://www.flaticon.com/free-icons/water-drop"
              title="water drop icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Water drop icons created by Freepik - Flaticon
            </a>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-base sm:text-lg">
              Menu Icon
            </h3>
            <a
              href="https://www.flaticon.com/free-icons/feature"
              title="feature icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Feature icons created by Graphics Plazza - Flaticon
            </a>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-base sm:text-lg">
              Wellness Reminder Sliding Banner Images
            </h3>
            <a
              href="https://storyset.com/people"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              People illustrations by Storyset
            </a>
            <a
              href="https://storyset.com/work"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Work illustrations by Storyset
            </a>
            <a
              href="https://storyset.com/happy"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Happy illustrations by Storyset
            </a>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-base sm:text-lg">
              Additional Icons
            </h3>
            <a
              href="https://react-icons.github.io/react-icons/"
              title="water drop icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              All other icons sourced from React Icons
            </a>
          </div>
        </div>

        <p
          className="font-manrope text-[#0000000] 
          text-2xl sm:text-3xl 
          mt-4 pt-10 
          font-semibold"
        >
          Design Resources For Official Site
        </p>

        <div className="w-full sm:px-0 mt-8 space-y-6">
          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-base sm:text-lg">
              Chrome Extension Icon/Logo
            </h3>
            <a
              href="https://www.flaticon.com/free-icons/water-drop"
              title="water drop icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Water drop icons created by Freepik - Flaticon
            </a>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-base sm:text-lg">
              Water Bottle Icon
            </h3>
            <a
              href="https://www.flaticon.com/free-icons/hydration"
              title="hydration icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hydration icons created by Freepik - Flaticon
            </a>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-base sm:text-lg">
              Bell Icon
            </h3>
            <a
              href="https://www.flaticon.com/free-icons/notification"
              title="notification icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Notification icons created by Pixel perfect - Flaticon
            </a>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2 text-base sm:text-lg">
              Additional Icons
            </h3>
            <a
              href="https://react-icons.github.io/react-icons/"
              title="water drop icons"
              className="text-[#000000] hover:text-[#019963] gap-1 flex flex-row items-center text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              All other icons sourced from React Icons
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
