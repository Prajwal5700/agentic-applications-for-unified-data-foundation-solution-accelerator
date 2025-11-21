# Lab 01: Deployment & Environment Setup

## Estimated Duration: 120 Minutes

## Overview

In this lab, you will explore 

## Architecture Diagram

   ![Name](../Images/aaaarch%20diagram%201.png)

## Lab Objectives

You will be able to complete the following tasks:

- Task 1: Fabric Deployment
- Task 2: Deploy Azure infrastructure via the provided Bicep templates
- Task 3: Set up Azure OpenAI, Container Registry, Azure Container Apps and validate deployment via portal and CLI


## Task 1: Fabric Deployment

1. Navigate to [(Fabric Workspace)](https://app.fabric.microsoft.com/)
In this task, you will create a new workspace in Microsoft Fabric to organize and manage your data and analytics assets. The workspace will be linked to a Copilot-enabled capacity, providing access to AI-powered features such as natural language queries and intelligent data insights.

1. Now let's create a workspace with a Fabric license. Select **Workspaces** **(1)** from the left navigation bar.

1. Click **+ New workspace (2)** found at the bottom of the pop-out menu.

    ![](../Images/fabric-image4.png)

1. The **Create a workspace** dialog opens on the right side of the browser.

1. Enter the name **Workspace<inject key="DeploymentID" enableCopy="false"/> (1)**, validate that the name is available, and then click **Advanced (2)**.

    >**Note:** Please use the workspace name provided above.

    ![](../Images/fabric-image5.png)

1. Ensure **Fabric capacity (1)** is chosen, verify that **capacity<inject key="DeploymentID" enableCopy="false"/> - <inject key="Region" enableCopy="false"/> (2)** is selected under **Capacity**, and then click **Apply (3)**.

    ![](../Images/fabric-image6.png)

    >**Note:** Close any pop-up that appears on the screen.

    ![](../Images/fabric-image7.png)

1. Retrieve Workspace ID from URL for future steps.

1. The easiest way to find your workspace ID is in the URL of the Fabric site for an item in a workspace. The Fabric URL contains the workspace ID, which is the unique identifier after **/groups/** in the URL, for example: https://app.fabric.microsoft.com/groups/**11aa111-a11a-1111-1abc-aa1111aaaa**/list?experience=fabric-developer.

## Task 2: Deploy Azure infrastructure via the provided Bicep templates

### GitHub Codespaces

1. In a new browser tab, go to `https://www.github.com/login`.

1. Navigate to the **Environment (1)** tab in the lab environment and click on the **Licenses (2)** button. Copy the **GitHub UserEmail (3)** and **GitHub Password (4)**, then save these credentials in **Notepad**. You will need them later during the GitHub login and device verification steps.

   ![](../Images/ex-1-4.png)

1. Open a **Private window** in Microsoft Edge by clicking the three-dot menu **(1)** in the top-right and selecting **New InPrivate window (2)**.

   ![](../Images/ex-1-5.png)

1. In the new InPrivate window, go to `http://outlook.office.com/`.

   ![](../Images/ex-1-6.png)

1. Enter your **GitHub Username (1)** (as saved in Notepad) and click **Next (2)** to proceed.

   ![](../Images/ex-1-7.png)

1. Enter your **GitHub Password (1)** (as saved in Notepad) and click **Sign in (2)**.

   ![](../Images/ex-1-8.png)

1. If you see the pop-up **Stay Signed in?**, select **No**.

   ![](../Images/ex-1-9.png)

1. Check your email inbox and copy the **Verification code** sent by GitHub.

   ![](../Images/ex-1-10.png)
   
1. On the **Device verification** pane, enter the **Device Verification Code (1)** that was emailed to you and click **Verify (2)**.

   ![](../Images/ex_1_g_3.png)
   
   > **Note:** If you see **Two-factor authentication (2FA) is required for your GitHub account** page next, click on **Remind me tomorrow**
   
      ![The `New Repository` creation form in GitHub.](../Images/2fagit.png "New Repository Creation Form")

You can run this solution using GitHub Codespaces. The button will open a web-based VS Code instance in your browser:

1. Open the solution accelerator by copying the below link into edge browser:

    [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/CloudLabsAI-Azure/agentic-applications-for-unified-data-foundation-solution-accelerator)

1. Accept the default values on the create Codespaces page, choose **Create codespace**.
1. It would take 2-5 minutes for codespace to get ready.

### Deploying with AZD

Once you've opened the project in [Codespaces](#github-codespaces) you can deploy it to Azure by following these steps:

1. Login to Azure:

    ```shell
    azd auth login
    ```
1. You will see Start by copying the next code: xxxxx, copy the code for you then select **Enter**.

1. A new window **Enter code to allow access** will open in the browser, provide the code copied in the previous step and choose **Next**.

1. Select the ODL user used to login into azure. If not logged into azure yet, use the following credentials to login in:

2. You'll see the **Sign into Microsoft Azure** tab. Here, enter your credentials:

   - **Email/Username:** <inject key="AzureAdUserEmail"></inject>

     ![](../Images/signin.png)

3. Next, provide your Temporary Access Pass:

   - **Temporary Access Pass:** <inject key="AzureAdUserPassword"></inject>

     ![](../Images/TAP.png)

1. You will see the pop up window, **Are you trying to sign in to Microsoft Azure CLI?**, choose **Continue**.

1. You will see the pop up window confirming the sign in as **You have signed in to the Microsoft Azure Cross-platform Command Line Interface application on your device.**

1. Navigate to the browser where codespace is created, you will notice that you are logged in as Azure user.

1. Provision and deploy all the resources:

    ```shell
    azd up
    ```

1. Provide an `azd` environment name as **fabricapp**.
1. You will see the subscription available for you, **type 1** choose **Enter** to select the default subscription.
1. Now, you will see the list of locations, use the up/down arrow button to navigate to **Australia East** as location, press **Enter** to select it.

1. You will see two options to choose the programming language for the backend API, as **Enter a value for the 'backendRuntimeStack' infrastructure parameter:**, choose **dotnet** and press **Enter**.

   - **python**
   - **dotnet(.NET )**

1. Now, you will see the option to choose the Resource group or create it, keep the curson at **1. Create a new resource group** and press **Enter**.

1. Use the up/down arrow button to navigate to **Australia East** as location, press **Enter** to select it.

1. You will see the prompt **Enter a name for the new resource group**, provide **rg-fabricapp** as suggested and press **Enter**

1. This deployment can take upto *7-10 minutes* to provision the resources in your account and set up the solution with sample data.
   
   If you encounter an error or timeout during deployment, changing the location may help, as there could be availability constraints for the resources.

1. Once the deployment has completed successfully, copy the 2 bash commands from the terminal (ex. 
`bash ./infra/scripts/agent_scripts/run_create_agents_scripts.sh` and
`bash ./infra/scripts/fabric_sripts/run_fabric_items_scripts.sh <fabric-workspaceId>`) for later use.

> **Note**: if you are running this deployment in GitHub Codespaces or VS Code Dev Container skip to step 7. 

1. Create and activate a virtual environment 
  
    ```shell
    python -m venv .venv
    ```

    ```shell
    .venv\Scripts\activate
    ```

1. Login to Azure

    ```shell
    az login
    ```

1. Run the bash script from the output of the azd deployment. The script will look like the following:

    ```Shell
    bash ./infra/scripts/agent_scripts/run_create_agents_scripts.sh
    ```

1. If you don't have azd env then you need to pass parameters along with the command. Then the command will look like the following:

    ```Shell
    bash ./infra/scripts/agent_scripts/run_create_agents_scripts.sh <project-endpoint> <solution-name> <gpt-model-name> <ai-foundry-resource-id> <api-app-name> <resource-group>
    ```

1. Run the bash script from the output of the azd deployment. Replace the <fabric-workspaceId> with your Fabric workspace Id created in the previous steps. The script will look like the following:

    ```Shell
    bash ./infra/scripts/fabric_scripts/run_fabric_items_scripts.sh <fabric-workspaceId>
    ```

1. If you don't have azd env then you need to pass parameters along with the command. Then the command will look like the following:

    ```Shell
    bash ./infra/scripts/fabric_scripts/run_fabric_items_scripts.sh <fabric-workspaceId> <solutionname> <ai-foundry-name> <backend-api-mid-principal> <backend-api-mid-client> <api-app-name> <resourcegroup>
    ```

1. Once the script has run successfully, go to the deployed resource group, find the App Service, and get the app URL from `Default domain`.

1. If you are done trying out the application, you can delete the resources by running `azd down`.


## Post Deployment Steps

1. **Add App Authentication**
   
    Follow steps in [App Authentication](./AppAuthentication.md) to configure authentication in app service. Note: Authentication changes can take up to 10 minutes 

1. **Deleting Resources After a Failed Deployment**  

     - Follow steps in [Delete Resource Group](./DeleteResourceGroup.md) if your deployment fails and/or you need to clean up the resources.

## Sample Questions

To help you get started, here are some **Sample Questions** you can ask in the app:

- Show total revenue by year for last 5 years as a line chart.
- Show top 10 products by Revenue in the last year in a table.
- Show as a donut chart.

These questions serve as a great starting point to explore insights from the data.

## Create Fabric Data Agent and Publish to Teams
1. Follow the step in [CopilotStudioDeployment](./CopilotStudioDeployment.md)