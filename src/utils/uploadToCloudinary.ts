import axios from 'axios';

export const uploadToCloudinary = async (image: File): Promise<string> => {
  if (!(image instanceof File)) {
    throw new Error('Invalid image file.');
  }
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME as string;
  const uploadPreset = process.env
    .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string;
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  const form = new FormData();
  form.append('file', image);
  form.append('upload_preset', uploadPreset);

  try {
    const response = await axios.post<{ url: string }>(url, form);
    if (response.status !== 200) {
      throw new Error('Failed to upload image!');
    }
    return response.data.url;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
