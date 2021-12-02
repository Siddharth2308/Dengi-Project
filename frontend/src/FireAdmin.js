import 'firebase/firebase-firestore';
import * as admin from 'firebase-admin';


var serviceAccount = require("./admin-sdk.json");

var adminConfig = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://pabal-canteen-15a5b.firebaseio.com"
};

const Admin = admin.initializeApp(adminConfig, 'Admin');

export default Admin;