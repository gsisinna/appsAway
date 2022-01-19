//vvasco
//
//&<h3>Field changed in app: <ins>Google Dialog</ins></h3><ul><li>how_to_run: In order to run the application, you have to register and download the private key from Google Cloud: \n1. Browse to [Cloud Console](https://console.cloud.google.com) and create an account. This requires the user to insert a credit card: this process is mandatory in order to run the application, but you will not pay anything. If you already have a Google Cloud account, you can skip points 1) and 2) \n2. The account creation will automatically generate a new empty project \n3. Browse to the [Google Dialogflow CX console](https://dialogflow.cloud.google.com/cx/projects) \n4. Select your project, then create a new agent by using the **Create** button<del>.</del> <del>A</del><b>and inser</b>t th<del>is</del><b>e</b> <del>poi</del><b>age</b>nt<del>,</del><b> name. If</b> you <del>c</del>a<del>n</del><b>re</b> <b>go</b>in<b>g to u</b>se<b> ou</b>r<del>t</del> <del>the</del><b>**iCub</b> <b>Di</b>a<b>lo</b>g<del>ent</del> <del>n</del><b>Ex</b>am<b>pl</b>e<b>**,</b> <del>a</del><b>which is in E</b>n<del>d</del><b>glish,</b> make sure that the selected language <b>of the created agent </b>is set as 'en - English'<b>.</b> <del>\</del><b>If i</b>n<del>5.</del><b>stead,</b> <del>D</del><b>y</b>o<del>w</del><b>u are goi</b>n<del>l</del><b>g t</b>o<del>ad</del> <b>crea</b>t<del>h</del>e <del>[iC</del><b>yo</b>u<del>b</del><b>r</b> <del>D</del><b>own d</b>ialog <del>E</del><b>flow, choose the desired language.\n5. If you chose to use our e</b>xample<b>, you can find it at this [link</b>](https://storage.googleapis.com/robot-bazaar-files/apps/googleDialog/exported_agent_iCub.blob)<b>: a `.blob` file will be downloaded to your machine.</b> \n6. In the [Google Dialogflow CX console](https://dialogflow.cloud.google.com/cx/projects), select your project and, in the agent's view, use the restore button on the agent created in 4) to upload the iCub Dialog Example (<del>_</del><b>`</b>exported_agent_icub.blob<del>_</del><b>`</b>) downloaded in 5) \n7. Go back to the [Cloud Console](https://console.cloud.google.com) and select your project. Use the menu on the top left corner to go to **APIs & Services**<b>,</b> <del>></del><b>to</b> **Dashboard**<b> and</b> click on **Enable APIs and Services**. In the API Library, search for the following services and enable them: \n	- Cloud Text-to-Speech API \n	- Dialogflow API \n	- Cloud Speech-to-Text API \n8. Go to the [Create service account key](https://console.cloud.google.com/apis/credentials/serviceaccountkey?_ga=2.46228833.718898927.1610379921-1277460506.1597236617&project=my-project-1597389903987&folder&organizationId) page. If no project is set, choose the one you're currently working on from the list. Create a new Service Account related to the Dialogflow example using the selector, then in the first input specify a service account name, in the second one select the role _Dialogflow API Client_ and press **create** \n9. The generated JSON file is downloaded automatically on your machine</li></ul>
db.steps.update ({_id: ObjectId("5f8581b4d5a975a806d993e9")},{$set: {how_to_run: "In order to run the application, you have to register and download the private key from Google Cloud: \n1. Browse to [Cloud Console](https://console.cloud.google.com) and create an account. This requires the user to insert a credit card: this process is mandatory in order to run the application, but you will not pay anything. If you already have a Google Cloud account, you can skip points 1) and 2) \n2. The account creation will automatically generate a new empty project \n3. Browse to the [Google Dialogflow CX console](https://dialogflow.cloud.google.com/cx/projects) \n4. Select your project, then create a new agent by using the **Create** button and insert the agent name. If you are going to use our **iCub Dialog Example**, which is in English, make sure that the selected language of the created agent is set as 'en - English'. If instead, you are going to create your own dialog flow, choose the desired language.\n5. If you chose to use our example, you can find it at this [link](https://storage.googleapis.com/robot-bazaar-files/apps/googleDialog/exported_agent_iCub.blob): a `.blob` file will be downloaded to your machine. \n6. In the [Google Dialogflow CX console](https://dialogflow.cloud.google.com/cx/projects), select your project and, in the agent's view, use the restore button on the agent created in 4) to upload the iCub Dialog Example (`exported_agent_icub.blob`) downloaded in 5) \n7. Go back to the [Cloud Console](https://console.cloud.google.com) and select your project. Use the menu on the top left corner to go to **APIs & Services**, to **Dashboard** and click on **Enable APIs and Services**. In the API Library, search for the following services and enable them: \n	- Cloud Text-to-Speech API \n	- Dialogflow API \n	- Cloud Speech-to-Text API \n8. Go to the [Create service account key](https://console.cloud.google.com/apis/credentials/serviceaccountkey?_ga=2.46228833.718898927.1610379921-1277460506.1597236617&project=my-project-1597389903987&folder&organizationId) page. If no project is set, choose the one you're currently working on from the list. Create a new Service Account related to the Dialogflow example using the selector, then in the first input specify a service account name, in the second one select the role _Dialogflow API Client_ and press **create** \n9. The generated JSON file is downloaded automatically on your machine"}});
