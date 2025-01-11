import axios from "axios";

const API_URL = "https://backend-resumerack.vercel.app/api"; // Update this URL for production

// Upload files and job description
export const uploadFiles = async (files, jobDescription) => {
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("files", file));
    if (jobDescription) formData.append("jobDescription", jobDescription);

    try {
        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
    } catch (error) {
        console.error("Error uploading files:", error.response?.data || error.message);
        throw new Error("Failed to upload files.");
    }
};

// Trigger Python script
export const triggerPythonScript = async () => {
    try {
        const response = await axios.post(`${API_URL}/run-script`);
        return response.data;
    } catch (error) {
        console.error("Error running Python script:", error.response?.data || error.message);
        throw new Error("Failed to run Python script.");
    }
};
