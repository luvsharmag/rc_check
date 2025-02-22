import { motion } from "framer-motion";

const VehicleDetails = ({ vehicle }) => {
  if (!vehicle) {
    return <p className="text-red-500 text-center">Vehicle not found!</p>;
  }

  const { owner_data, vehicle_data, registered_at, status, tax_end_date, insurance_data, permit_data } = vehicle;

  return (
    <motion.div
      className="bg-gray-50 p-6 rounded-lg shadow-lg mt-6 text-gray-900"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">🚘 Vehicle Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Owner Details */}
        <div className="p-4 border border-gray-300 rounded-md bg-white">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">👤 Owner Information</h3>
          <p><strong>Name:</strong> {owner_data?.name}</p>
          <p><strong>Father Name:</strong> {owner_data?.father_name}</p>
          <p><strong>Contact:</strong> {owner_data?.mobile || "N/A"}</p>
          <p><strong>Address:</strong> {owner_data?.present_address}</p>
        </div>

        {/* Vehicle Details */}
        <div className="p-4 border border-gray-300 rounded-md bg-white">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">🚗 Vehicle Information</h3>
          <p><strong>Model:</strong> {vehicle_data?.maker_model}</p>
          <p><strong>Make:</strong> {vehicle_data?.maker_description}</p>
          <p><strong>Fuel Type:</strong> {vehicle_data?.fuel_type}</p>
          <p><strong>Color:</strong> {vehicle_data?.color}</p>
          <p><strong>Chassis Number:</strong> {vehicle_data?.chassis_number}</p>
          <p><strong>Engine Number:</strong> {vehicle_data?.engine_number}</p>
        </div>

        {/* Registration & Tax Details */}
        <div className="p-4 border border-gray-300 rounded-md bg-white">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">📋 Registration & Tax</h3>
          <p><strong>Registered At:</strong> {registered_at}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Tax Valid Till:</strong> {tax_end_date}</p>
        </div>

        {/* Insurance & Permit Details */}
        <div className="p-4 border border-gray-300 rounded-md bg-white">
          <h3 className="text-lg font-semibold mb-2 text-gray-700">📑 Insurance & Permit</h3>
          <p><strong>Insurance Expiry:</strong> {insurance_data?.expiry_date || "N/A"}</p>
          <p><strong>Permit Number:</strong> {permit_data?.permit_number || "N/A"}</p>
          <p><strong>Permit Expiry:</strong> {permit_data?.expiry_date || "N/A"}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default VehicleDetails;
