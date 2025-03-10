import React from "react";

function UploadedDocuments({ student, handleBack }) {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg mt-6">
      <h3 className="text-2xl font-semibold mb-4">Uploaded Documents</h3>
      <div className="space-y-4">
        {student.uploadedDocuments && student.uploadedDocuments.length > 0 ? (
          student.uploadedDocuments.map((doc, index) => (
            <div key={index} className="p-4 border border-gray-300 rounded-lg">
              <h4 className="font-semibold text-lg">{doc}</h4>
              <p className="mt-2">Document details go here.</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No documents uploaded yet.</p>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-6">
        <button
          onClick={handleBack}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Back to Student Details
        </button>
      </div>
    </div>
  );
}

export default UploadedDocuments;
