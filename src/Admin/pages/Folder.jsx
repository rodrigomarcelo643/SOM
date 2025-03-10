import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io"; // Importing the back arrow icon
import star from "../../assets/star.png";
import firstYearImage from "../../assets/darkblue.png";
import secondYearImage from "../../assets/blue.png";
import thirdYearImage from "../../assets/orange.png";
import fourthYearImage from "../../assets/violet.png";
import FirstYear from "../students/FirstYear";
import SecondYear from "../students/SecondYear";
import ThirdYear from "../students/ThirdYear";
import FourthYear from "../students/FourthYear";

function Folder() {
  const [selectedFolder, setSelectedFolder] = useState(null); // Initially no folder is selected

  const requiredDocuments = [
    "First Year Files",
    "Second Year Files",
    "Third Year Files",
    "Fourth Year Files",
  ]; // Removed "Getting Started Files"

  const getFolderBackgroundImage = (folderName) => {
    switch (folderName) {
      case "First Year Files":
        return firstYearImage;
      case "Second Year Files":
        return secondYearImage;
      case "Third Year Files":
        return thirdYearImage;
      case "Fourth Year Files":
        return fourthYearImage;
      default:
        return null;
    }
  };

  const folderContent = {
    "First Year Files": "Compiled data from all the first year students.",
    "Second Year Files": "Compiled data from all the second year students.",
    "Third Year Files": "Compiled data from all the third year students.",
    "Fourth Year Files": "Compiled data from all the fourth year students.",
  };

  const handleFolderClick = (folderName) => {
    setSelectedFolder(folderName);
  };

  const handleBackClick = () => {
    setSelectedFolder(null); // Go back to the main folder view
  };

  const renderFolderContent = () => {
    switch (selectedFolder) {
      case "First Year Files":
        return <FirstYear />;
      case "Second Year Files":
        return <SecondYear />;
      case "Third Year Files":
        return <ThirdYear />;
      case "Fourth Year Files":
        return <FourthYear />;
      default:
        return (
          <div>
            <div className="flex items-center mt-5 pb-2">
              <h2 className="text-base text-gray-700 md:text-lg whitespace-nowrap">
                All Files
              </h2>
              <div className="flex-1 border-b border-gray-400 ml-2 md:ml-4 w- md:w-auto"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {requiredDocuments.map((docTitle, index) => (
                <div
                  key={index}
                  className="p-8.5 rounded-[17px] relative cursor-pointer"
                  style={{
                    backgroundImage: `url(${getFolderBackgroundImage(
                      docTitle
                    )})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  onClick={() => handleFolderClick(docTitle)} // Make the folder clickable
                >
                  <div className="flex">
                    {docTitle !== "Getting Started Files" && (
                      <div className="w-13 h-13 rounded-full bg-white flex justify-center items-center">
                        <img src={star} className="w-9 h-9" alt="star" />
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center pb-4">
                    <h1 className="text-[23px] mb-4 mt-2 font-bold text-white flex-1">
                      {docTitle}
                    </h1>
                  </div>
                  <div className="text-white">
                    <p>{folderContent[docTitle]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {/* If a folder is selected, show a back button */}
      {selectedFolder && (
        <div className="flex items-center mt-5 pb-4">
          <button
            onClick={handleBackClick}
            className="flex items-center text-gray-700 md:text-lg space-x-2"
          >
            <IoIosArrowBack size={24} />
            <span>Back to Folders</span>
          </button>
        </div>
      )}

      {/* Render content based on the selected folder */}
      {renderFolderContent()}
    </div>
  );
}

export default Folder;
