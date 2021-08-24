import { useApolloClient } from '@apollo/client';
import firebase from 'firebase';
import { useState } from 'react';
import { displaySnackbar, InitSnackbarData } from './Snackbar';

export interface Files {
  fileName?: string | null;
  type?: string | null;
  pathUrl?: string | null;
}

export const useUploadFile = () => {
  const [loading, setLoading] = useState(false);
  const snackbar = InitSnackbarData;
  const client = useApolloClient();

  const getFiles = async (files: File[] | null) => {
    const filesUpload: Files[] = [];
    if (files) {
      for (const file of files) {
        filesUpload.push({
          fileName: file.name,
          type: file.type.split('/')[1],
          pathUrl: `${process.env.REACT_APP_FIREBASE_BUCKET_PLACE}${localStorage.getItem('idMe')}/${file.name}`,
        });
      }
      return filesUpload;
    }
    return filesUpload;
  };

  const uploadFile = async (files: File[] | null) => {
    try {
      if (files !== null) {
        for (const file of files) {
          setLoading(true);
          const metadata = {
            contentType: file.type,
          };
          await firebase
            .storage()
            .ref(`${process.env.REACT_APP_FIREBASE_BUCKET_PLACE}${localStorage.getItem('idMe')}/${file.name}`)
            .put(file, metadata);
          setLoading(false);
        }
      }
    } catch (error) {
      snackbar.type = 'ERROR';
      snackbar.message = error;
      displaySnackbar(client, snackbar);
    }
  };

  return { uploadFile, loading, getFiles };
};
