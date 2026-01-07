# Lab 01: Building and Deploying a Fabric-Integrated AI Application on Azure

## Estimated Duration: 120 Minutes

## Overview

In this lab, you will provision a Microsoft Fabric capacity, configure tenant-level settings required for Copilot and data agents, and create a Fabric workspace linked to a Copilot-enabled capacity. You will then deploy the required Azure infrastructure using Bicep templates and Azure Developer CLI (azd), set up application authentication in Azure App Service, and validate the end-to-end solution by interacting with the deployed application to query and visualize data using natural language.

## Lab Objectives

You will be able to complete the following tasks:

- Task 1: Create a fabric capacity
- Task 2: Create a fabric workspace and link with Fabric Copilot-enabled capacity
- Task 3: Deploy Azure infrastructure via the provided Bicep templates
- Task 4: Set Up Authentication in Azure App Service
- Task 5: Testing the application

## Pre-requisite

## Activating fabric tenant

1. In a new tab, navigate to **Microsoft Fabric** by copying and pasting the following URL into the address bar:

   ```
   https://app.fabric.microsoft.com/home
   ```

2. On the **Enter your email, we'll check if you need to create a new account** tab, you will see the login screen, in that enter the following **email/username (1)**, and click on **Submit (2)**.
 
   - **Email/Username:** <inject key="AzureAdUserEmail"></inject>
 
     ![](../Images/lab1-1.png)
 
3. Now enter the following **password (1)** and click on **Sign in (2)**.
 
   - **Password:** <inject key="AzureAdUserPassword"></inject>
 
     ![](../Images/lab1-2.png)
     
1. If you see the pop-up **Stay Signed in?**, select **Yes**.

   ![](../Images/lab1-3.png)

1. On **Welcome to the Fabric view** dialog opens, click **Cancel**.

   ![](../Images/lab1-92.png)

1. On **Microsoft Fabric (Free) license assigned** dialog appears, click **OK** to proceed.

   ![](../Images/lab1-95.png)

1. You will be navigated to the **Microsoft Fabric Home page**.

   ![tour](../Images/lab1-93.png)

   >**Note:** If you receive any pop-ups, please **Close** them.

   ![tour](../Images/lab1-94.png)

## Activating Microsoft Copilot Studio

1. In a new tab, navigate to **Microsoft Copilot Studio** by copying and pasting the following URL into the address bar:

   ```
   https://copilotstudio.microsoft.com/
   ```
1. You will see **Welcome to Microsoft Copilot Studio** page, choose the Country/region as **United States (1)** then click on **Get started (2)** button.

    ![quota-check-output](../Images/lab1-56.png)

1. In the Copilot studio page, you may see pop up window **We've updated you to the latest version of Microsoft Copilot Studio**, choose **Got it.**

    ![quota-check-output](../Images/lab2-6.png)

    > **Note:** If you see the pop up **What's new in Copilot Studio** choose **Got it.**

    ![quota-check-output](../Images/lab2-7.png)

## Task 1: Create a fabric capacity

In this task, you will provision a Microsoft Fabric capacity by configuring the required Azure settings and assigning a Fabric administrator.


1. Navigate to the Azure portal tab. In the search bar, type **Microsoft Fabric (1)** and select the **Microsoft Fabric (2)** option from the services.

   ![](../Images/lab1-110.png)

1. On **Microsoft Fabric** blade, click **+ Create**.

   ![](../Images/lab1-111.png)

1. In the **Create Fabric capacity** page, under **Basics** tab provide the below details and select **Review + create (9)**:

    | Setting | Value |
    | --- | --- |
    | Subscription | **Keep it as default (1)**  |
    | Resource Group | **Fabric (2)** |
    | Capacity name | **capacity<inject key="DeploymentID" enableCopy="false"/>(3)** |
    | Region | **Keep it as default (4)** |
    | Size | Select **Change size (5)** |
    | Select the resource size | Select **F2 (6)** sku and choose **Select (7)** |    
    | Fabric capacity administrator | Choose **<inject key="AzureAdUserEmail"></inject> (8)** |

      ![](../Images/lab1-112.png)

1. Wait for the validation process to complete. Then click on **Create**.

    >**Note**: Wait for the Fabric capacity to be created. This should take about 1-2 minutes.

      ![](../Images/lab1-114.png)

1. On the deployment blade, click **Go to resource** to display the Fabric capacity blade.

   ![](../Images/lab1-113.png)

1. Verify that the status of fabric capacity is in **Active** state.

   ![](../Images/lab1-115.png)

> **Congratulations** on completing the task! Now, it's time to validate it. Here are the steps:
> - Hit the Validate button for the corresponding task.
> - If you receive a success message, you can proceed to the next task.
> - If not, carefully read the error message and retry the step, following the instructions in the lab guide.
> - If you need any assistance, please contact us at cloudlabs-support@spektrasystems.com. We are available 24/7 to help you out.
<validation step="207abae5-efc7-4a67-9e86-0a14078227ae" />

## Task 2: Create a workspace and link with Fabric Copilot-enabled capacity

In this task, you will create a new workspace in Microsoft Fabric to organize and manage your data and analytics assets. The workspace will be linked to a Copilot-enabled capacity, providing access to AI-powered features such as natural language queries and intelligent data insights.

1. Navigate back to the **Microsoft Fabric Home page**.

   ![tour](../Images/lab1-93.png)

1. Select the **gear icon (1)** in the top-right corner, then choose the **Admin Portal (2)**. 

   ![](../Images/lab1-102.png)

1. If you got the pop up window, **Organize your tenant with domains** and **Tag your data**, choose **Got it (1)**

   ![](../Images/lab1-103.png)

   ![](../Images/lab1-104.png)

1. In the **Admin Portal**, select **Tenant settings** from the left-hand navigation pane. 

   ![](../Images/lab1-109.png)

1. For the **Users can use Copilot and other features powered by Azure OpenAI (1)** setting, ensure it is , **Enabled (2)** if it is not enabled and choose **Apply (3)**.

   ![](../Images/lab1-105.png)

1. For the **Data sent to Azure OpenAI can be processed outside your capacity's geographic region, compliance boundary, or national cloud instance (1)** setting, ensure it is , **Enabled (2)** if it is not enabled and choose **Apply (3)**.

   ![](../Images/lab1-106.png)

1. For the **Users can create and share Data agent item types (preview) (1)** setting, ensure it is , **Enabled (2)** if it is not enabled and choose **Apply (3)**.

   ![](../Images/lab1-107.png)

1. Now, let's create a workspace with a Fabric license. Select **Workspaces** **(1)** from the left navigation bar. Click **+ New workspace (2)** found at the bottom of the pop-out menu.

    ![](../Images/lab1-96.png)

1. The **Create a workspace** dialog opens on the right side of the browser.

1. Enter the name **fabric<inject key="DeploymentID" enableCopy="false"/> (1)**, validate that the name is available, and then click **Advanced (2)**.

    >**Note:** Please use the workspace name provided above.

    ![](../Images/lab1-5.png)

1. Ensure **Fabric capacity (1)** is chosen, verify that **capacity<inject key="DeploymentID" enableCopy="false"/>(2)** is selected under **Capacity**, and then click **Apply (3)**.

    ![](../Images/lab1-6.png)

    >**Note:** Close any pop-up that appears on the screen.

    ![](../Images/lab1-7.png)

1. Retrieve **Workspace ID** from URL for future steps.

1. The easiest way to find your workspace ID is in the URL of the Fabric site for an item in a workspace. The Fabric URL contains the workspace ID, which is the unique identifier after **/groups/** in the URL, for example: [**11aa111-a11a-1111-1abc-aa1111aaaa**](https://app.fabric.microsoft.com/groups/11aa111-a11a-1111-1abc-aa1111aaaa/list?experience=fabric-developer)
.

    ![](../Images/lab1-8.png)

1. Copy the **Workspace ID** from the link and keep it in notepad for future reference.

## Task 3: Deploy Azure infrastructure via the provided Bicep templates

In this task, you will authenticate to GitHub and complete device verification, then use GitHub Codespaces and Azure Developer CLI (azd) to deploy the solution’s Azure infrastructure. You will sign in to Azure, run azd up to provision resources, and execute post-deployment scripts to configure agents and Fabric components.

1. Navigate to the **Environment (1)** tab in the lab environment and click on the **Licenses (2)** button. Copy the **GitHub UserName (3)** and **GitHub Password (4)**, then save these credentials in **Notepad**. You will need them later during the GitHub login and device verification steps.

    ![](../Images/getting-started-5.png)

1. Open a **Private window** in Microsoft Edge by clicking the three-dot menu **(1)** in the top-right and selecting **New InPrivate window (2)**.

   ![](../Images/lab1-97.png)

1. In a new browser tab, go to `https://www.github.com/login`.

1. Enter your **GitHub Username (1)** and **GitHub Password (1)** (as saved in Notepad) and click **Sign in (2)** to proceed.

   ![](../Images/lab1-9.png)

1. Open a new tab in InPrivate window, then go to `http://outlook.office.com/`.

   ![](../Images/lab1-98.png)

1. Enter your **GitHub Username (1)** (as saved in Notepad) and click **Next (2)** to proceed.

   ![](../Images/lab1-10.png)

1. Enter your **GitHub Password (1)** (as saved in Notepad) and click **Sign in (2)**.

   ![](../Images/lab1-11.png)

1. If you see the pop-up **Stay Signed in?**, select **Yes**.

   ![](../Images/stay1.png)

1. Check your email inbox and copy the **Verification code** sent by GitHub.

   ![](../Images/lab1-12.png)
   
1. On the **Device verification** pane, enter the **Device Verification Code (1)** that was emailed to you and it will **Verify (2)** automatically.

   ![](../Images/lab1-13.png)
   
   > **Note:** If you see **Two-factor authentication (2FA) is required for your GitHub account** page next, click on **Remind me tomorrow**
   
      ![The `New Repository` creation form in GitHub.](../Images/lab1-100.png "New Repository Creation Form")

1. Open the solution accelerator by copying the below link into new tab of edge browser and login using the same GitHub credentials used in previous task:

    [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/CloudLabsAI-Azure/agentic-applications-for-unified-data-foundation-solution-accelerator)

1. Accept the default values on the create Codespaces page, choose **Create codespace**.

      ![The `New Repository` creation form in GitHub.](../Images/lab1-14.png "New Repository Creation Form")

1. It would take 2-5 minutes for codespace to get ready.

      ![The `New Repository` creation form in GitHub.](../Images/lab1-15.png "New Repository Creation Form")

1. Once you've opened the project in **Codespaces** you can deploy it to Azure by following these steps:

1. Run the command below to log in to Azure. When the message **Start by copying the next code** appears, copy the provided code and press **Enter**.

    ```shell
    azd auth login
    ```

      ![The `New Repository` creation form in GitHub.](../Images/lab1-16.png "New Repository Creation Form")

    > **Note:** If you see the option to Allow the copy to clipboard option, choose **Allow**.

1. A new window **Enter code to allow access** will open in the browser, provide the code copied in the previous step and choose **Next**.

      ![The `New Repository` creation form in GitHub.](../Images/lab1-29.png "New Repository Creation Form")

1. Select the ODL user used to login into azure.

      ![The `New Repository` creation form in GitHub.](../Images/lab1-30.png "New Repository Creation Form")

    > **Note:** If you are not logged into azure yet or using private window, use the following credentials to login in.
   - You'll see the **Sign into Microsoft Azure** tab. Here, enter your credentials:

      - **Email/Username:** <inject key="AzureAdUserEmail"></inject>

         ![](../Images/signin.png)

      - **Temporary Access Pass:** <inject key="AzureAdUserPassword"></inject>

         ![](../Images/TAP.png)

1. You will see the pop up window, **Are you trying to sign in to Microsoft Azure CLI?**, choose **Continue**.

     ![](../Images/lab1-19.png)

1. You will see the pop up window confirming the sign in as **You have signed in to the Microsoft Azure Cross-platform Command Line Interface application on your device.**

     ![](../Images/lab1-20.png)

1. Navigate to the browser where codespace is created, you will notice that you are logged in as Azure user.

     ![](../Images/lab1-21.png)

1. Execute the following command to provision and deploy the required resources.

    ```shell
    azd up
    ```

1. Provide an `azd` environment name as **fabricapp** when prompted **Enter a unique Environment name** and press **Enter**.

1. You will see the subscription available for you, **type 1** choose **Enter** to select the default subscription.

1. Now, you will see the list of locations, use the up/down arrow button to navigate to **Australia East** as location, press **Enter** to select it.

1. You will see two options to choose the programming language for the backend API, as **Enter a value for the 'backendRuntimeStack' infrastructure parameter:**, choose **dotnet** and press **Enter**.

   - **python**
   - **dotnet(.NET )**

 1. For the **Enter a value for the 'usecase' infrastructure parameter**, you will see two options as below, choose **Retail-sales-analysis** option for now and press **Enter**.
      - **Retail-sales-analysis**
      - **Insurance-improve-customer-meetings** 

1. Now, you will see the option to choose the Resource group or create it, keep the cursor at **1. Create a new resource group** and press **Enter**.

1. Use the up/down arrow button to navigate to **Australia East** as location, press **Enter** to select it.

1. You will see the prompt **Enter a name for the new resource group**, provide **rg-fabricapp** as suggested and press **Enter**

     ![](../Images/lab1-25.png)

1. This deployment can take upto **7-10 minutes** to provision the resources in your account and set up the solution with sample data.

     ![](../Images/lab1-26.png)

    > **Note:** If you encounter an error or timeout during deployment, changing the location may help, as there could be availability constraints for the resources.
    Here are some example regions where the services are available: **East US, East US2, Australia East, UK South, France Central.**

1. Once the deployment has completed successfully,
   - Copy the **Web app URL (1)** and keep it in notepad for future reference
   - Copy the **two bash commands (2)** from the terminal (ex. 
   `bash ./infra/scripts/agent_scripts/run_create_agents_scripts.sh` and
   `bash ./infra/scripts/fabric_sripts/run_fabric_items_scripts.sh <fabric-workspaceId>`) for later use.

      ![](../Images/lab1-28.png)

1. Run the bash script from the output of the azd deployment. The script will look like the following:

    ```Shell
    bash ./infra/scripts/agent_scripts/run_create_agents_scripts.sh
    ```

1. Copy the link as given in the output after running the script as mentioned below and copy the code:

      ![The `New Repository` creation form in GitHub.](../Images/lab1-101.png "New Repository Creation Form")

1. Provide the below link into the new browser tab as copied in previous step. A new window **Enter code to allow access** will open in the browser, provide the code copied in the previous step and choose **Next**.

    ```Shell
    https://microsoft.com/devicelogin
    ```

      ![The `New Repository` creation form in GitHub.](../Images/lab1-29.png "New Repository Creation Form")

1. Select the ODL user used to login into azure.

      ![The `New Repository` creation form in GitHub.](../Images/lab1-30.png "New Repository Creation Form")

1. You will see the pop up window, **Are you trying to sign in to Microsoft Azure CLI?**, choose **Continue**.

     ![](../Images/lab1-19.png)

1. You will see the pop up window confirming the sign in as **You have signed in to the Microsoft Azure Cross-platform Command Line Interface application on your device.**

     ![](../Images/lab1-20.png)

1. Type **1** to select the subscription and they press **Enter**. Wait for the command to run successfully.

      ![](../Images/lab1-31.png)

1. Run the bash script from the output of the azd deployment. Replace the **fabric-workspaceId** with your Fabric workspace Id created in the **Task 2 Step 13**. The script will look like the following:

    ```Shell
    bash ./infra/scripts/fabric_scripts/run_fabric_items_scripts.sh <fabric-workspaceId>
    ```

1. Once the script has run successfully, go to the deployed resource group, find the App Service, and get the app URL from `Default domain`.

      ![](../Images/lab1-33.png)


> **Congratulations** on completing the task! Now, it's time to validate it. Here are the steps:
> - Hit the Validate button for the corresponding task.
> - If you receive a success message, you can proceed to the next task.
> - If not, carefully read the error message and retry the step, following the instructions in the lab guide.
> - If you need any assistance, please contact us at cloudlabs-support@spektrasystems.com. We are available 24/7 to help you out.
<validation step="5d64b6bb-4a04-4b87-b94f-faa5389bad0e" />

## Task 4: Set Up Authentication in Azure App Service

In this task, you will enable authentication for the Azure App Service by adding Microsoft as an identity provider, creating a new app registration, and validating secure user sign-in through the app’s default domain.

1. Search for app services in azure portal and select it.

      ![](../Images/lab1-43.png)

1. You will see two app services in running state. Select the app service without **cs** in the name of it.

      ![](../Images/lab1-42.png)

1. Click on `Authentication (1)` from left menu under Settings. Then, choose `Add identity provider (2)` to see a list of identity providers.

      ![](../Images/lab1-39.png)

3. Click on `Identity Provider` dropdown to see a list of identity providers. Select the first option `Microsoft (1)` from the drop-down list.

4. Keep **App registration type** as **Create new app registration (2)**. Provide the name of App registration as  **fabric-app (3)**. In `client secret expiration` under **App registration** choose **Recommended 180 days (4)**. Accept the default values and click on **Add (5)** button to go back to the previous page with the identity provider added.

      ![](../Images/lab1-40.png)

6. You have successfully added app authentication and now required to log in to access the application.

1. Navigate to Overview of the app service, select the default domain to open the web app in different tab of the browser.

      ![](../Images/lab1-46.png)

1. You will see Permission requested tab, choose **Accept** to login in using the same user used to logged into Azure.

      ![](../Images/lab1-41.png)

   >**Note:** If the web application prompts for login, use the same Azure credentials you used earlier, i.e.

   - **Email/Username:** <inject key="AzureAdUserEmail"></inject>
 
   - **Password:** <inject key="AzureAdUserPassword"></inject>

## Task 5: Testing the application

In this task, you will validate the deployed application by submitting natural language queries and reviewing the generated visualizations. Using sample prompts, you will test the app’s ability to retrieve data, perform analysis, and display results through charts and tables.

To help you get started, here are some **Sample Questions** you can ask in the app:

- Show total revenue by year for last 5 years as a line chart.

    ![Add Provider](../Images/lab1-35.png)

- Show top 10 products by Revenue in the last year in a table.

    ![Add Provider](../Images/lab1-36.png)

- Show as a donut chart.

    ![Add Provider](../Images/lab1-38.png)

These questions serve as a great starting point to explore insights from the data.

## Summary

In this lab, you have completed:

- Created a fabric capacity
- Created a fabric workspace and link with Fabric Copilot-enabled capacity
- Deployed Azure infrastructure via the provided Bicep templates
- Set Up Authentication in Azure App Service
- Tested the application

## You have successfully completed the exercise. Click on Next >> to proceed with the next exercise.

![](../Images/nextpage.png)