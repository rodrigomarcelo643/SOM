import React, { useState, useEffect } from "react";
import {
  FaBullhorn,
  FaStickyNote,
  FaImage,
  FaCalendarAlt,
  FaTimes,
  FaLink,
  FaUpload,
} from "react-icons/fa";
import pinImage from "../../assets/pinImage.png"; // Placeholder for your image

// Example modal content (e.g., Dr. Adrian Image)
const sampleImage = "https://example.com/sample-dr-adrian.jpg";

const fetchAnnouncements = (year) => {
  // Simulated fetch function (this would be replaced with actual API call)
  return [];
};

function Home() {
  const [year2Announcements, setYear2Announcements] = useState([]);
  const [activeTab, setActiveTab] = useState("announcements");
  const [newAnnouncement, setNewAnnouncement] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPostType, setSelectedPostType] = useState(null); // 'pin', 'photo', or 'event'
  const [selectedFile, setSelectedFile] = useState(null);
  const [link, setLink] = useState("");

  useEffect(() => {
    setYear2Announcements(fetchAnnouncements("Year2"));
  }, []);

  // Handle opening modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handle closing modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPostType(null);
    setSelectedFile(null);
    setLink("");
  };

  // Handle post type selection (Pin, Photo, Event) from dropdown
  const handlePostTypeSelect = (e) => {
    setSelectedPostType(e.target.value);
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle link input
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  // Handle post submission
  const handleSubmitPost = () => {
    if (newAnnouncement.trim()) {
      console.log("New post submitted:");
      console.log("Announcement:", newAnnouncement);
      console.log("Post Type:", selectedPostType);
      console.log("Link:", link);
      console.log("File:", selectedFile);
      setNewAnnouncement("");
      handleCloseModal();
    }
  };

  return (
    <div className="p-2 mt-[-30px]">
      <div className="mt-8 space-y-6">
        {/* Create Post Section */}
        <div className="px-3 rounded-lg bg-transparent">
          <textarea
            className="w-full p-4 border  border-gray-300 rounded-lg mb-4 text-sm h-[60px] focus:outline-none"
            placeholder="Feel like something to announce? ..."
            value={newAnnouncement}
            onChange={(e) => setNewAnnouncement(e.target.value)}
            rows={1}
            onClick={handleOpenModal}
          />
        </div>
      </div>

      {/* Modal for Creating Post */}
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-scroll bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-150 p-6 relative">
            <FaTimes
              className="absolute top-2 right-2 text-gray-600 cursor-pointer"
              onClick={handleCloseModal}
            />
            <h2 className="text-xl  text-center border-b border-black py-2 font-semibold text-[#8D2525] mb-4">
              Create Post
            </h2>
            <div className="flex items-center space-x-4">
              <img
                src={sampleImage}
                className="w-12 h-12 rounded-full"
                alt="Sample"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Dr. Adrian</h3>

                {/* Post Type Selection (Dropdown) */}
                <div className="">
                  <select
                    className=" border w-[190px] h-[35px] pl-2 border-gray-300 text-[14px] rounded-md"
                    value={selectedPostType}
                    onChange={handlePostTypeSelect}
                  >
                    <option value="pin">Pinned Announcement</option>
                    <option value="photo">Showcase Insights</option>
                    <option value="yearannouncement">Year Announcement</option>
                    <option value="event">Events</option>
                  </select>
                </div>
              </div>
            </div>
            <textarea
              className="w-full mt-5 rounded-lg text-sm h-[60px] focus:outline-none"
              placeholder="Feel like something to announce? ..."
              value={newAnnouncement}
              onChange={(e) => setNewAnnouncement(e.target.value)}
              rows={1}
              onClick={handleOpenModal}
            />

            {/* File Upload - Drag and Drop */}
            <div className="mt-4">
              <label className="text-gray-700">Upload File (Optional)</label>
              <div
                className="border-dashed border-2 border-gray-400 p-6 flex justify-center items-center cursor-pointer"
                onClick={() => document.getElementById("file-input").click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  setSelectedFile(file);
                }}
              >
                <FaUpload className="text-gray-500 text-2xl" />
                <p className="text-sm text-gray-500">
                  Drag & Drop or Click to Browse
                </p>
              </div>
              <input
                type="file"
                id="file-input"
                className="hidden"
                onChange={handleFileChange}
              />
              {selectedFile && (
                <p className="text-sm text-gray-500 mt-2">
                  {selectedFile.name}
                </p>
              )}
            </div>

            {/* Input for Link */}
            <div className="mt-4">
              <label className="text-gray-700">Insert Link (Optional)</label>
              <input
                type="text"
                value={link}
                onChange={handleLinkChange}
                className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter URL"
              />
            </div>
            {/* Post Button - Full Width */}
            <div className="mt-6 flex justify-end">
              <button
                className="w-full px-6 py-3 bg-[#7A7A7A] text-white rounded-md hover:bg-[#A63F3F] transition-all"
                onClick={handleSubmitPost}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
