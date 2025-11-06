<form className="flex flex-col space-y-4">
  {/* Name */}
  <input
    type="text"
    placeholder="Your Name"
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
  />

  {/* Email */}
  <input
    type="email"
    placeholder="Your Email"
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
  />

  {/* Organization */}
  <input
    type="text"
    placeholder="Organization"
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
  />

  {/* Priority Tier */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Priority Tier</label>
    <select
      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
      defaultValue=""
    >
      <option value="" disabled>
        Select Priority
      </option>
      <option value="A">A — Urgent / Top Priority</option>
      <option value="B">B — Important / Standard</option>
      <option value="C">C — Low Priority / Flexible</option>
    </select>
  </div>

  {/* Price Tag */}
  <input
    type="number"
    placeholder="Estimated Quote (USD)"
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
  />

  {/* File Upload */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Documents</label>
    <input
      type="file"
      className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
                 file:rounded-lg file:border-0 file:text-sm file:font-semibold
                 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      multiple
    />
  </div>

  {/* Deadline */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Hopeful Deadline</label>
    <input
      type="date"
      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-400 outline-none"
    />
  </div>

  {/* Message */}
  <textarea
    placeholder="Your Message"
    rows="4"
    className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
  ></textarea>

  {/* Submit Button */}
  <button
    type="submit"
    className="bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
  >
    Send Message
  </button>
</form>
