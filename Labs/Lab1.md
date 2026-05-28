# Lab 01: Building and Deploying a Fabric-Integrated AI Application on Azure

## Estimated Duration: 120 Minutes

## 🎯 Lab Scenario 

Contoso Retail wants to simplify how users explore and analyze enterprise sales data spread across multiple systems. To address this challenge, the organization is implementing the **Agentic Applications for Unified Data Foundation Solution Accelerator using Microsoft Fabric and AI-powered agents**.

In this hands-on lab, you will work with **Microsoft Fabric, AI agents, and orchestration services** to build a unified analytics solution that enables users to interact with business data using natural language queries and explore customer, product, and transaction insights.

## 📖 Lab Overview

In this lab, you will create a **Fabric workspace** linked to a copilot-enabled capacity. You will then deploy the required Azure infrastructure using **Bicep templates** and **Azure Developer CLI (azd)**, set up application authentication in Azure App Service, and validate the end-to-end solution by interacting with the deployed application to query and visualize data using natural language.

## 🎯 Lab Objectives

You will be able to complete the following tasks:

- **Task 1**: Create a fabric workspace and link with Fabric Copilot-enabled capacity
- **Task 2**: Deploy Azure infrastructure via the provided Bicep templates
- **Task 3**: Set Up Authentication in Azure App Service
- **Task 4**: Testing the application

## Task 1: Create a workspace and link with Fabric Copilot-enabled capacity

In this task, you will create a workspace in **Microsoft Fabric**, to organize and manage your data and analytics assets. The workspace will be linked to a Copilot-enabled capacity, providing access to AI-powered features such as natural language queries and intelligent data insights.

1. Within the Lab VM, in a new tab navigate to **Microsoft Fabric** by copy-pasting the following URL into the address bar:

   ```
   https://app.fabric.microsoft.com/home
   ```

2. On the **Enter your email, we'll check if you need to create a new account** wizard, you will see the login screen, in that enter the following **Email(1)**, and click on **Submit (2)**.
 
   - **Email/Username:** <inject key="AzureAdUserEmail"></inject>
 
     ![](../Images/lab1-1.png)
 
3. Now enter the following **Temporary Access pass (1)** and click on **Sign in (2)**.
 
   - **Temporary Access pass:** <inject key="AzureAdUserPassword"></inject>
 
     ![](../Images/lab1-2.png)
     
1. If you see the pop-up **Stay Signed in?**, select **Yes**.

    ![](../Images/lab1-3.png)

1. On the Fabric portal, **Welcome to the Fabric view** dialog pops up then click on **Cancel**.

    ![](../Images/lab1-92.png)

1. You will be navigated to the **Microsoft Fabric Home page**.

   ![tour](../Images/jan26-lab1-1.png)

   >**Note:** If you receive any pop-ups, please **Close** them.

   ![tour](../Images/lab1-94.png)

1. Now, let's create a workspace with a **Fabric** license. Select **Workspaces** **(1)** from the left navigation bar. Click on **+ New workspace (2)** found at the bottom of the pop-out menu.

     ![](../Images/jan26-lab1-2.png)

1. The **Create a workspace** dialog opens on the right side of the browser.

1. Enter the name as **fabric<inject key="DeploymentID" enableCopy="false"/> (1)**, validate that the name is available, and then click on **Advanced (2)**.

    >**Note:** Please use the workspace name provided above.

     ![](../Images/lab1-5.png)

1. Ensure that the license type is chosen as **Fabric (1)**, verify that **capacity<inject key="DeploymentID" enableCopy="false"/>(2)** is selected under **Details** section, and then click on **Apply (3)**.

     ![](../Images/march-update-lab1-3.png)

    >**Note:** Close any pop-up that appears on the screen.

     ![](../Images/march-update-lab1-4.png)

1. Retrieve the **Workspace ID** from the URL for use in future steps. The easiest way to locate the Workspace ID is from the Microsoft Fabric URL of any item within the workspace. 

1. In the URL, the Workspace ID appears after **/groups/**, as shown below:[**11aa111-a11a-1111-1abc-aa1111aaaa**](https://app.fabric.microsoft.com/groups/11aa111-a11a-1111-1abc-aa1111aaaa/list?experience=fabric-developer)
.

     ![](../Images/lab1-8.png)

1. Copy the **Workspace ID** from the link and keep it in notepad, as we will need it upcoming tasks to deploy the Azure infrstructure through Bicep templates.

## Task 2: Deploy Azure infrastructure via the provided Bicep templates

In this task, you will authenticate to **GitHub**, then use **GitHub Codespaces and Azure Developer CLI (azd)** to deploy the solution’s Azure infrastructure. You will sign in to Azure, run `azd up` which automates the end-to-end deployment of an application to Azure, and execute post-deployment scripts to configure agents and Fabric components.

1. Open a **Private window** in Microsoft Edge by clicking the three-dot menu **(1)** in the top-right and selecting **New InPrivate window (2)**.

    ![](../Images/lab1-97.png)

1. Open a new browser tab, paste the following URL into the address bar to access the GitHub login page, and press **Enter** to continue:

   ```
   https://www.github.com/login
   ```

1. You will be redirected to **Sign in to GitHub** page, and enter the **<inject key="GitHub User Name" enableCopy="true"/>** **(1)** and click on **Sign in with your identity provider (2)**.

    ![](../Images/GS1.png)

    >**Important:** After entering the **GitHub User Name**, ensure you click **Sign in with your identity provider**. Do not enter password, as the CloudLabs GitHub account is provisioned through your organization's identity provider and standard password login is not supported.

1. You will be redirected to Single sign-on to **CloudLabs Organizations**, click on **Continue**.

    ![](../Images/GS2.png)

1. You'll see the **Sign in tab**. Here, enter your Azure Entra credentials and click **Next (2)**.

    * **Email/Username**: <inject key="AzureAdUserEmail"></inject> **(1)** 

    ![](../Images/GSlogin.png)

1. Next, provide your **Temporary Access Pass** and click on **Sign in (2)**

    * **Temporary Access Pass:** <inject key="AzureAdUserPassword"></inject> **(1)**

    ![](../Images/GSpwd.png)

1. If you see the pop-up **Stay Signed in?**, select **Yes**.

    ![](../Images/GSno.png)

1. Once after you have logged in successfully to **GitHub**. Now lets open the solution accelerator by copying the below link into new tab of edge browser and observe it will use the same **GitHub credentials** that is already signed in:

   ```
   https://github.com/codespaces/new/CloudLabsAI-Azure/agentic-applications-for-unified-data-foundation-solution-accelerator
   ```

1. Accept the default values on the **Create a new Codespaces** page, click on **Create codespace**.

      ![The `New Repository` creation form in GitHub.](../Images/lab1-14.png "New Repository Creation Form")

1. Wait for the **Codespace** wizard to be setup, it would ideally take 2-5 minutes for codespace to get ready.

      ![The `New Repository` creation form in GitHub.](../Images/lab1-15.png "New Repository Creation Form")

1. Once the project is opened in **Codespaces**, we have to follow the steps below to deploy the solution accelerator to Azure.

1. Run the command below to authenticate with your Azure account. When prompted with the message **Start by copying the next code**, copy the generated code and press **Enter** to continue the sign-in process in the browser window that opens automatically.

    ```shell
    azd auth login
    ```

      ![The `New Repository` creation form in GitHub.](../Images/lab1-16.png "New Repository Creation Form")

    > **Note:** If you see the option to Allow the copy to clipboard option, choose **Allow**.

     ![](../Images/lab1-22.png)

1. On the **Enter code to allow access** wizard, provide the code copied in the previous step **(1)** and choose **Next (2)**.

      ![The `New Repository` creation form in GitHub.](../Images/lab1-29.png "New Repository Creation Form")

1. Select the already logged-in **ODL username** to complete authentication for your Azure account.

      ![The `New Repository` creation form in GitHub.](../Images/lab1-30.png "New Repository Creation Form")

    > **Note:** If you are not logged into azure yet or using private window, choose **Use another account** and use the following credentials to login in.
    - You'll see the **Sign into Microsoft Azure** tab. Here, enter your credentials:

        - **Email/Username:** <inject key="AzureAdUserEmail"></inject>

            ![](../Images/corsspf-username.png)

        - **Temporary Access Pass:** <inject key="AzureAdUserPassword"></inject>

            ![](../Images/GSpwd.png)

1. You will see the pop up window, **Are you trying to sign in to Microsoft Azure CLI?**, click on **Continue**.

    ![](../Images/lab1-19.png)

1. You will see the pop up window confirming the sign in as **You have signed in to the Microsoft Azure Cross-platform Command Line Interface application on your device.**

    ![](../Images/lab1-20.png)

1. Navigate to the browser where codespace is created, you will notice the output that you are logged in as **Azure user**.

    ![](../Images/lab1-21.png)

1. Execute the following command to provision the required Azure infrastructure and deploy the solution components to your Azure environment.The `azd up` command automates the deployment process by creating the necessary Azure resources, configuring services, and deploying the application components required for the solution accelerator.

    ```shell
    azd up
    ```
1. Enter the following details when prompted after you hit **Enter**.

    | Prompt                                                                   | Action                                                                     |
    | ------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
    | **Enter a unique Environment name**                                      | Enter **fabricapp** and press **Enter**.                                   |
    | **Subscription selection**                                                   | Type **1** and press **Enter** to select the default subscription.         |
    | **Location selection**                                                      | Use the up/down arrow keys to select **East US 2**, then press **Enter**.  |
    | **Enter a value for the 'backendRuntimeStack' infrastructure parameter** | You will see two options to choose the programming language for the backend API: **python**/**dotnet**. Select **dotnet** and press **Enter**.                               |
    | **Enter a value for the 'usecase' infrastructure parameter**             | Likewise you will see two options for usecase: **Retail-sales-analysis**/**Insurance-improve-customer-meetings**. Select **Retail-sales-analysis** and press **Enter**.                     |
    | **Resource group selection**                                                 | Keep the cursor on **1. Create a new resource group** and press **Enter**. |
    | **Resource group location**                                                  | Use the up/down arrow keys to select **East US 2**, then press **Enter**.  |
    | **Enter a name for the new resource group**                              | Enter **rg-fabricapp** and press **Enter**.                                |

1. This deployment can take upto **7-10 minutes** to provision the resources in your account and set up the solution with sample data.

    > **Note:** If you encounter an error or timeout during deployment, changing the location may help, as there could be availability constraints for the resources.
    Execute the command below to clear the saved session data, then try using any of the other regions listed below. Here are some example regions where the services are available: **East US2, Australia East, UK South, France Central.**

    ```Shell
    rm -rf .azure
    ```
    
1. Once the deployment has completed successfully:

    - Copy the **two bash commands (2)** from the terminal (ex. 
   `bash ./infra/scripts/agent_scripts/run_create_agents_scripts.sh` and
   `bash ./infra/scripts/fabric_sripts/run_fabric_items_scripts.sh <fabric-workspaceId>`) for later use.

      ![](../Images/lab1-28.png)

1. Run the bash script from the output of the azd deployment.The script will look like the following:

    ```Shell
    bash ./infra/scripts/agent_scripts/run_create_agents_scripts.sh
    ```

1. After the script execution completes, click on the **authentication URL (1)** displayed in the output along with the **generated code (2)**.

    ![The `New Repository` creation form in GitHub.](../Images/lab1-101.png "New Repository Creation Form")

    >**Note:** Also you can provide the below link into the new browser tab if you are having any issues in accessing the URL.

    ```Shell
    https://microsoft.com/devicelogin
    ```
1. A new window **Enter code to allow access** will open in the browser, provide the code copied in the previous step and choose **Next**.

    

     ![The `New Repository` creation form in GitHub.](../Images/lab1-29.png "New Repository Creation Form")

1. Select the already logged-in **ODL username** to complete authentication for your Azure account.

    ![The `New Repository` creation form in GitHub.](../Images/lab1-30.png "New Repository Creation Form")

1. You will see the pop up window, **Are you trying to sign in to Microsoft Azure CLI?**, choose **Continue**.

    ![](../Images/lab1-19.png)

1. You will see the pop up window confirming the sign in as **You have signed in to the Microsoft Azure Cross-platform Command Line Interface application on your device.**

    ![](../Images/lab1-20.png)

1. After logging in successfully, Type **1** to select the **Azure Subscription** and then press **Enter**. Wait for the command to run successfully.

    ![](../Images/lab1-31.png)

1. Now that the bash script is executed, through this script you have automated the AI agent setup process by validating Azure access, assigning the required Azure AI permissions, creating the AI agents, and updating the App Service configuration with the generated agent details.

1. Run the bash script from the output of the azd deployment. Replace the **fabric-workspaceId** with your Fabric workspace Id created in the **Task 1 Step 13**. The script will look like the following:

    ```Shell
    bash ./infra/scripts/fabric_scripts/run_fabric_items_scripts.sh <fabric-workspaceId>
    ```

1. Upon successful execution of the script, the resulting output will appear as shown below. Now that the command is executed successfully, it configures and deploys the required **Microsoft Fabric** resources by creating Fabric items, generating SQL connection details, and updating the App Service configuration with the Fabric database settings required for the solution.

    ![](../Images/jan2026-chat-fabric-6.png)

1. If you want to switch the **backendRuntimeStack** (for example, from **Python to .NET or vice versa**), or switch the previously used **use case** (from **Retail-sales-analysis to Insurance-improve-customer-meetings or vice versa**), you must first run the two cleanup commands. After cleanup, repeat the steps starting from Task 3, Step 21.

    ```Shell
    azd down
    ```

    ```Shell
    rm -rf .azure
    ```

> **Congratulations** on completing the task! Now, it's time to validate it. Here are the steps:
> - Hit the Validate button for the corresponding task.
> - If you receive a success message, you can proceed to the next task.
> - If not, carefully read the error message and retry the step, following the instructions in the lab guide.
> - If you need any assistance, please contact us at cloudlabs-support@spektrasystems.com. We are available 24/7 to help you out.
<validation step="5d64b6bb-4a04-4b87-b94f-faa5389bad0e" />

## Task 3: Set Up Authentication in Azure App Service

In this task, you will enable authentication for the Azure App Service by adding Microsoft as an identity provider, creating a new app registration, and validating secure user sign-in through the app’s default domain.

1. Now lets navigate to the **Azure Portal**. Search for **App services** in azure portal and select it.

    ![](../Images/lab1-43.png)

1. On **App Services** page, you will see two app services are in running state. Select the app service named **app-xxxxxxx**.

    ![](../Images/lab1-42.png)

1. Navigate to **Authentication (1)** from left menu under **Settings**. Then, click on **Add identity provider (2)** to see a list of identity providers.

    ![](../Images/lab1-39.png)

3. On **Add an Identity Provider** page, Click on **Identity Provider** dropdown to see a list of identity providers. Select the first option **Microsoft (1)**
from the drop-down list.

4. Keep **App registration type** as **Create new app registration (2)**. Provide the name of App registration as  **fabric-app-<inject key="DeploymentID" enableCopy="false"/> (3)**. In **client secret expiration** under **App registration** choose **Recommended 180 days (4)**. Accept the default values and click on **Add (5)** button to go back to the previous page with the identity provider added.

    ![](../Images/lab1-40.png)

6. You have successfully added app authentication and now required to log in to access the application.

1. Navigate to **Overview** of the app service, select the default domain to open the web app in different tab of the browser.

    ![](../Images/lab1-46.png)

1. You will see Permission requested tab, choose **Accept** to login in using the same user used to logged into Azure.

    ![](../Images/lab1-41.png)

    >**Note:** If the web application prompts for login, use the same Azure credentials you used earlier, i.e.

     - **Email/Username:** <inject key="AzureAdUserEmail"></inject>

     - **Password:** <inject key="AzureAdUserPassword"></inject>

## Task 4: Testing the application

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

- Created a fabric workspace and link with Fabric Copilot-enabled capacity
- Deployed Azure infrastructure via the provided Bicep templates
- Set Up Authentication in Azure App Service
- Tested the application

## You have successfully completed the exercise. Click on Next >> to proceed with the next exercise.

![](../Images/nextpage.png)
