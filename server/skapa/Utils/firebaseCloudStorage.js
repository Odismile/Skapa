const { Storage } = require("@google-cloud/storage");
const { randomStr } = require("./randomStr");

// Create new storage instance with Firebase project credentials
const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT_ID,
  keyFilename: `${process.env.GCLOUD_APPLICATION_CREDENTIALS}.json`,
});

// Create a bucket associated to Firebase storage bucket

const bucket = storage.bucket(
  process.env.GCLOUD_STORAGE_BUCKET_URL
    ? process.env.GCLOUD_STORAGE_BUCKET_URL
    : "skapa-b88c9.appspot.com"
);

/* interface RequestFileGenerateSignedUrl {
  originalname: string;
  pathU RL: string;
}*/

const generateReadSignedUrl = async (filename ='') => {
  if (!filename) {
    throw new Error("Error data to get in firebase");
  }
  try {
    // These options will allow temporary uploading of the file with outgoing
    // Content-Type: application/octet-stream header.
    const uuid = randomStr();
    // Get a v4 signed URL for uploading file
    if (filename.trim().length !== 0) {
      const [url] = await bucket.file(filename).getSignedUrl({
        version: "v2",
        action: "read",
        expires: Date.now() + 15 * 60 * 1000, // 15 minutes
      });

      return { url, uuid };
    }

    return { url: "", uuid: "" };
  } catch (e) {
    throw new Error(e);
  }
} 
module.exports = {
  generateReadSignedUrl
}