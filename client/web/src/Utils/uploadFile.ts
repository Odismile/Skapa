import  firebase  from 'firebase';
import {  useState } from 'react';
import { idMe } from '../ReactiveVariable/User/user';


export interface Files {
  fileName?: string | null;
  type?: string | null;
  pathUrl?: string | null;
}

export const useUploadFile = () => {
  const [loading, setLoading] = useState(false);

  const getFiles = async (files: File[] | null) => {
    const filesUpload: Files[] = [];
    if (files) {
      for (const file of files) {
        filesUpload.push({
          fileName: file.name,
          type: file.type.split('/')[1],
          pathUrl: `${process.env.REACT_APP_FIREBASE_BUCKET_PLACE}${idMe()}${file.name}`,
        });
      }
      return filesUpload;
    }
    return filesUpload;
  };

  const uploadFile = async (files: File[] | null) => {
    if (files !== null) {
      for (const file of files) {
        setLoading(true);
        const metadata = {
          contentType: file.type,
        };
        await firebase.storage()
          .ref(`${process.env.REACT_APP_FIREBASE_BUCKET_PLACE}${idMe()}${file.name}`)
          .put(file, metadata);

        setLoading(false);
      }
    }
  };

  return { uploadFile, loading, getFiles };
};
