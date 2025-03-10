import React from "react";

function ThirdYear() {
  return (
    <div>
      <h3 className="text-lg font-semibold">First Year Data</h3>
      <table className="min-w-full table-auto mt-4">
        <thead>
          <tr>
            <th className="border px-4 py-2">Student</th>
            <th className="border px-4 py-2">Document</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John Doe</td>
            <td className="border px-4 py-2">Document 1</td>
            <td className="border px-4 py-2">Completed</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane Smith</td>
            <td className="border px-4 py-2">Document 2</td>
            <td className="border px-4 py-2">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ThirdYear;
