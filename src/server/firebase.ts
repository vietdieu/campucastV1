import { initializeApp, getApps, App, cert } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';
import fs from 'fs';
import path from 'path';

let db: Firestore | null = null;
let app: App | null = null;

export function getFirestoreInstance() {
  if (!db) {
    try {
      const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
      if (fs.existsSync(configPath)) {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        
        if (getApps().length === 0) {
          let credential;
          // Fix for environments where GOOGLE_APPLICATION_CREDENTIALS is the JSON content instead of a path
          const envCreds = process.env.GOOGLE_APPLICATION_CREDENTIALS;
          if (envCreds && envCreds.trim().startsWith('{')) {
            try {
              credential = cert(JSON.parse(envCreds));
              console.log('[Firebase Admin] Using credentials from environment variable');
            } catch (err) {
              console.error('[Firebase Admin] Failed to parse GOOGLE_APPLICATION_CREDENTIALS:', err);
            }
          }

          app = initializeApp({
            projectId: config.projectId,
            credential
          });
        }
        
        // Use the specific database ID if provided in the config
        const databaseId = config.firestoreDatabaseId || '(default)';
        db = getFirestore(databaseId);
        console.log(`[Firebase Admin] Firestore initialized successfully (database: ${databaseId})`);
      } else {
        console.warn('[Firebase Admin] firebase-applet-config.json not found');
      }
    } catch (err) {
      console.error('[Firebase Admin] Initialization failed:', err);
    }
  }
  return db;
}
