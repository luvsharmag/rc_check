const API_KEY = "Ey5viGAdZwNk2krZjVIdYlvv1l0LUP0a";
const BASE_URL = "https://api.gridlines.io/rc-api/fetch-detailed";

export const fetchVehicleData = async (carNumber) => {
  const requestBody = {
    rc_number: carNumber,
    consent: "Y",
  };

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "X-Auth-Type": "API-Key",
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": API_KEY,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error("Vehicle not found or API error!");
    }

    const data = await response.json();
    return data?.data?.rc_data || null; // Extracting rc_data object
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
    return null;
  }
};
