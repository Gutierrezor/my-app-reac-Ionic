import React from 'react';
import { IonButton, IonContent, IonHeader, IonItem, IonInput, IonMenu, IonPage, IonTitle, IonToolbar, IonCardHeader, IonCardContent } from '@ionic/react';
import { menuController } from '@ionic/core/components';

function Example() {
  async function openFirstMenu() {

    await menuController.open('first-menu');
  }

  async function openSecondMenu() {

    await menuController.open('second-menu');
  }


  return (
    <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCardHeader>
        <IonItem>
        <IonInput label="Correo Electronico :" type="email" placeholder="ejemplo@domain.com"></IonInput>
      </IonItem>
              <IonItem>
        <IonInput label="Contraseña :" type="password" value="contraseña123"></IonInput>
      </IonItem>
      </IonCardHeader>
        <IonCardContent className="ion-padding">

          <IonButton expand="block" onClick={openFirstMenu}>
            login
          </IonButton>
          <IonButton expand="block" onClick={openSecondMenu}>
            register
          </IonButton>

        </IonCardContent>
    </>
  );
}
export default Example;