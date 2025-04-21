import React, { useState, useEffect } from "react";
import { FaSearch, FaEnvelope, FaTrash } from "react-icons/fa";
import StudentDetail from "./StudentDetail";
import profileAdmin from "../../assets/profile.jpg";
import { IoIosArrowBack } from "react-icons/io";
const ITEMS_PER_PAGE = 10;

function FirstYear() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);

  const studentData = [
    {
      id: 1,
      firstName: "Adrian",
      lastName: "Say",
      email: "rele.pogi.swu@phinmaed.com",
      status: "Completed",
      enrolled: true,
      profilePic: profileAdmin,
    },
    {
      id: 2,
      firstName: "Adrian",
      lastName: "Say",
      email: "rele.pogi.swu@phinmaed.com",
      status: "Completed",
      enrolled: true,
      profilePic: profileAdmin,
    },
    {
      id: 3,
      firstName: "Adrian",
      lastName: "Say",
      email: "rele.pogi.swu@phinmaed.com",
      status: "Completed",
      enrolled: true,
      profilePic: profileAdmin,
    },
    {
      id: 4,
      firstName: "Adrian",
      lastName: "Say",
      email: "rele.pogi.swu@phinmaed.com",
      status: "Completed",
      enrolled: true,
      profilePic: profileAdmin,
    },
  ];

  // Filter students based on search query and filter criteria
  const filteredData = studentData
    .filter(
      (student) =>
        student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((student) => {
      if (filter === "") return true;
      return student[filter].toLowerCase() === "completed".toLowerCase();
    });

  // Pagination logic
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleCheckboxChange = (id) => {
    // Toggle the selected checkbox and student details
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
      setSelectedStudent(null); // Reset selected student when unchecked
    } else {
      setSelectedRows([...selectedRows, id]);
      const selectedStudent = studentData.find((student) => student.id === id);
      setSelectedStudent(selectedStudent); // Show selected student's details
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    alert(`Deleting student with ID: ${id}`);
  };

  const handleEmail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleBackToTable = () => {
    setSelectedStudent(null); // Reset selected student to show table again
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-transparent text-black">
      <div className="w-full shadow-xl">
        {selectedStudent ? (
          <>
            <button
              onClick={handleBackToTable}
              className="flex items-center ml-7 text-gray-700 md:text-sm space-x-2 mb-4 "
            >
              <IoIosArrowBack size={20} />
              <span>Back to Tables</span>
            </button>
            <StudentDetail student={selectedStudent} />
          </>
        ) : (
          <>
            <div className="w-full bg-white shadow-xl p-6 rounded-2xl border border-gray-300">
              {/* Search and Filter Section */}
              <div className="flex justify-between mb-4">
                {/* Search input */}
                <div className="flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by Name"
                    className="p-2 text-sm border border-gray-300 rounded-md w-full"
                  />
                </div>
                {/* Filter dropdown */}
                <div className="ml-4 w-40">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="p-2 text-sm border border-gray-300 rounded-md w-full"
                  >
                    <option value="">Filter by Status</option>
                    <option value="status">Completed</option>
                    <option value="enrolled">Enrolled</option>
                  </select>
                </div>
              </div>

              {/* Table Section */}
              <table className="w-full table-auto text-sm">
                <thead className="bg-[#E3EAF0] text-[#35495B] rounded-tl-[30px] rounded-tr-[30px]">
                  <tr className="text-left border-b border-gray-200">
                    <th className="py-2 px-3">Select</th>
                    <th className="py-2 px-3">Profile</th>
                    <th className="py-2 px-3">Name</th>
                    <th className="py-2 px-3">Email</th>
                    <th className="py-2 px-3">Status</th>
                    <th className="py-2 px-3">Enrolled</th>
                    <th className="py-2 px-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.length === 0 ? (
                    <tr>
                      <td
                        colSpan="7"
                        className="py-6 px-3 text-center text-gray-500"
                      >
                        No students found.
                      </td>
                    </tr>
                  ) : (
                    paginatedData.map((student) => (
                      <tr
                        key={student.id}
                        className="border-b border-gray-200 cursor-pointer"
                      >
                        <td className="py-2 px-3">
                          <input
                            type="checkbox"
                            checked={selectedRows.includes(student.id)}
                            onChange={() => handleCheckboxChange(student.id)}
                            className="form-checkbox"
                          />
                        </td>
                        <td className="py-2 px-3">
                          <img
                            src={student.profilePic} // Use the profile picture URL
                            alt="Profile"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                        </td>
                        <td className="py-2 px-3">{`${student.firstName} ${student.lastName}`}</td>
                        <td className="py-2 px-3">{student.email}</td>
                        <td className="py-2 px-3">
                          <span
                            className={` w-full ${
                              student.status === "Completed"
                                ? "bg-green-500"
                                : "bg-orange-500"
                            } text-white px-3 py-1 rounded-[5px]`}
                          >
                            {student.status === "Completed"
                              ? "Evaluated"
                              : "Pending"}
                          </span>
                        </td>
                        <td className="py-2 px-3">
                          <span
                            className={`  ${
                              student.enrolled
                                ? "bg-green-300"
                                : "bg-orange-300"
                            } text-white px-3 py-1 rounded-[5px]`}
                          >
                            {student.enrolled ? "Enrolled" : "Not Enrolled"}
                          </span>
                        </td>
                        <td className="py-2 px-3">
                          <button
                            onClick={() => handleEmail(student.email)}
                            className="mr-2 text-blue-500 hover:text-blue-700 transition-all ease-in-out"
                          >
                            <FaEnvelope />
                          </button>
                          <button
                            onClick={() => handleDelete(student.id)}
                            className="text-red-500 hover:text-red-700 transition-all ease-in-out"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                >
                  Prev
                </button>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={paginatedData.length < ITEMS_PER_PAGE}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default FirstYear;
