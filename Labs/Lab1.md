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

1. Navigate to (Fabric Workspace)
1. Click on Data Engineering experience
1. Click on Workspaces from left Navigation
1. Click on + New Workspace
1. Provide Name of Workspace
1. Provide Description of Workspace (optional)
1. Click Apply
1. Retrieve Workspace ID from URL for future steps.

1. The easiest way to find your workspace ID is in the URL of the Fabric site for an item in a workspace. As in Power BI, the Fabric URL contains the workspace ID, which is the unique identifier after /groups/ in the URL, for example: https://powerbi.com/groups/11aa111-a11a-1111-1abc-aa1111aaaa/.... Alternatively, you can find the workspace ID in the Power BI Admin portal settings by selecting Details next to the workspace name.

## Task 2: Deploy Azure infrastructure via the provided Bicep templates

### GitHub Codespaces

You can run this solution using GitHub Codespaces. The button will open a web-based VS Code instance in your browser:

1. Open the solution accelerator (this may take several minutes):

    [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/microsoft/agentic-applications-for-unified-data-foundation-solution-accelerator)

1. Accept the default values on the create Codespaces page.
1. Open a terminal window if it is not already open.
1. Continue with the [deploying steps](#deploying-with-azd).

### Deploying with AZD

Once you've opened the project in [Codespaces](#github-codespaces), [Dev Containers](#vs-code-dev-containers), or [locally](#local-environment), you can deploy it to Azure by following these steps:

1. Login to Azure:

    ```shell
    azd auth login
    ```

1. Provision and deploy all the resources:

    ```shell
    azd up
    ```

1. Provide an `azd` environment name (e.g., "daapp").
1. Select a subscription from your Azure account and choose a location that has quota for all the resources.
1. Choose the programming language for the backend API:

   - **Python**
   - **.NET (dotnet)**

1. This deployment will take *7-10 minutes* to provision the resources in your account and set up the solution with sample data.
   
   If you encounter an error or timeout during deployment, changing the location may help, as there could be availability constraints for the resources.

1. Once the deployment has completed successfully, copy the 2 bash commands from the terminal (ex. 
`bash ./infra/scripts/agent_scripts/run_create_agents_scripts.sh` and
`bash ./infra/scripts/fabric_scripts/run_fabric_items_scripts.sh <fabric-workspaceId>`) for later use.

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