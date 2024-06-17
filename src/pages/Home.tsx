import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel } from '@ionic/react';
import { Device } from '@capacitor/device';

const Home: React.FC = () => {
  const [deviceInfo, setDeviceInfo] = useState('');

  useEffect(() => {
    const logDeviceInfo = async () => {
      const info = await Device.getInfo();
      setDeviceInfo(`Manufacturer: ${info.manufacturer}, Android SDK Version: ${info.androidSDKVersion}, OS Version: ${info.osVersion}, Platform: ${info.platform}, Model: ${info.model}`);
    };

    if (window.miniapp1) {
      window.miniapp1.checkNativeFunc = function() {
        console.log('From MiniApp -> Miniapp1 checkNativeFunc');
        logDeviceInfo();
      }
      window.miniapp1.checkNativeFunc();
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>MiniApp1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLabel color="medium">Device Info:</IonLabel>
        <p>{deviceInfo}</p>
      </IonContent>
    </IonPage>
  );
};

export default Home;