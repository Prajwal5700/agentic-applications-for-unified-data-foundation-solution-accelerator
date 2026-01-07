# Lab 02: Creating Fabric Data Agent and Publish to Teams

## Estimated Duration: 120 Minutes

## Overview

In this lab, you will design a Microsoft Fabric Data Agent connected to a Lakehouse to support natural language queries on structured data. You will also create a custom AI agent in Microsoft Copilot Studio, connect it to the Fabric data agent, configure authentication and orchestration options, and publish the agent to Microsoft Teams so users can ask business questions and receive data-driven answers.

## Lab Objectives

You will be able to complete the following tasks:

- Task 1: Create and Configure a Microsoft Fabric Data Agent
- Task 2: Implement and Validate an End-to-End Copilot Agent with Fabric Data Agent Integration

## Pre-requisites
- A [paid F2 or higher Fabric capacity](https://learn.microsoft.com/en-us/fabric/enterprise/fabric-features#features-parity-list)  , or a [Power BI Premium per capacity (P1 or higher)](https://learn.microsoft.com/en-us/fabric/enterprise/licenses#workspace) capacity with Microsoft Fabric enabled
- [Fabric data agent tenant settings](https://learn.microsoft.com/en-us/fabric/data-science/data-agent-tenant-settings) is enabled.
- [Copilot tenant switch](https://learn.microsoft.com/en-us/fabric/data-science/data-agent-tenant-settings) is enabled.
- [Cross-geo processing for AI](https://learn.microsoft.com/en-us/fabric/data-science/data-agent-tenant-settings) is enabled.
- [Cross-geo storing for AI](https://learn.microsoft.com/en-us/fabric/data-science/data-agent-tenant-settings) is enabled.


## Task 1: Create and Configure a Microsoft Fabric Data Agent

In this task, you will create and publish a Microsoft Fabric Data Agent within an existing Fabric workspace. You will connect the agent to a Lakehouse data source, select the required tables, add a descriptive prompt, and publish the agent so it can answer natural language questions based on the connected data.

1. To create a new Fabric data agent, first navigate to **fabric<inject key="DeploymentID" enableCopy="false"/> (1)** workspace created in previous lab, and then select the **+ New Item (2)** button. In the **All items** tab, search for **data agent (3)** to locate the appropriate option, then choose **Data agent (preview) (4)**

    ![quota-check-output](../Images/lab1-47.png)

1. Provide **fabric-agent** name for your Fabric data agent and click on **Create** button.

    ![quota-check-output](../Images/lab1-49.png)

1. Click on **+ Data Source (1)** and select the **retail_lakehouse_xxxxxxx Lakehouse (2)**, then choose **Add (3)**  and select the relevant tables, for now we will select **all tables (4)**.

    ![quota-check-output](../Images/lab1-51.png)

    ![quota-check-output](../Images/lab2-1.png)

    ![quota-check-output](../Images/lab2-2.png)

1. Click on `Publish` from the toolbar to publish the data agent.

    ![quota-check-output](../Images/lab2-3.png)

1. Add the **Description (1)** of agent, then click on **Publish (2)** from the **Publish data agent** window:

    ``` 
    You are an intelligent data agent designed to help users navigate and understand a structured database schema related to customer and order management. This database comprises multiple tables, each containing specific information about customers, their accounts, orders, products, and payments.
    ```

    ![quota-check-output](../Images/lab2-4.png)

1. Then, you can start asking questions.

## Task 2: Implement and Validate an End-to-End Copilot Agent with Fabric Data Agent Integration

In this task, you will create a custom AI agent in Microsoft Copilot Studio, connect it to an existing Fabric data agent, and configure its behavior and orchestration settings. You will then publish the agent and make it available in Microsoft Teams to answer business questions using data from Microsoft Fabric.

1. Navigate back to Microsoft Copilot studio page.

1. On the left pane, select **Agents (1)**, then select **+ Create blank agent (2)** to start building your custom AI agent.

    ![quota-check-output](../Images/lab2-8.png)

1. On the Agents pane, select **Skip to configure (1)** to proceed with creating custom agent.

    ![quota-check-output](../Images/lab2-9.png)

1. Configure your agent by giving the name and description provided below that describes its purpose and role then choose **Create (3)**.

    | Setting | Value |
    | --- | --- |
    | Name  | **Adventure Work Sales Agent (1)** |
    | Description | **Adventure Work Sales Agent is a custom agent built in Microsoft Copilot Studio and is designed to answer business questions about customers and product sales (2)** |

    ![quota-check-output](../Images/lab1-61.png)

1. You will see the prompt in the screen, **Setting up your copilot may take a while**, wait for sometime till your agent gets created.

    ![quota-check-output](../Images/lab2-11.png)

1. To add a Fabric data agent to your custom AI agent in Copilot Studio, choose **Adventure Work Sales Agent** created previously then navigate to **Agents (1)** from the top pane and then select **+ Add (2)** to add agents to your custom AI agent.

    ![quota-check-output](../Images/lab2-12.png)

1. Select **Connect to an external agent (1)** then choose **Microsoft Fabric (Preview) (2)** from the **Choose how you want to extend your agent** window.

    ![quota-check-output](../Images/lab2-13.png)

1. In **Connect Microsoft Fabric data agent** window, select **Not connected (1)** beside **Connection** then choose **Create new connection (2)** from the dropdown.

    ![quota-check-output](../Images/testing-lab2-1.png)

1. In **Connect to Fabric data agent** window, choose **Create**.

    ![quota-check-output](../Images/lab2-15.png)

1. In the **Microsoft pop up window**, choose **ODL user** which you have used to login into Azure i.e. **<inject key="AzureAdUserEmail"></inject>**.

    ![quota-check-output](../Images/lab2-16.png)

1. In **Connect Microsoft Fabric data agents (Preview)** window, choose **<inject key="AzureAdUserEmail"></inject> (1)** beside the **Connection** and select **Next (2)**.

    ![quota-check-output](../Images/lab2-17.png)

    > **Note:** If there's already a connection between Microsoft Fabric and the custom AI agent, you can select **Next** and move to next step.

1. From the available list of Fabric data agents you have access to, select the data agent you want to connect to the custom AI agent in Copilot Studio. For this lab, choose **fabric-agent (1)** that you created earlier, then select **Next (2)**. The selected data agent will work in conjunction with the custom AI agent to support and execute the required workflows.

    ![quota-check-output](../Images/lab2-18.png)

1. You can adjust the description for the Fabric data agent that you select and then select **Add and configure**. This step adds the Fabric data agent to the custom AI agent in Microsoft Copilot Studio.

    ![quota-check-output](../Images/lab2-27.png)

1. After completing the setup, navigate back to **Agents (1)** from the top pane. You should now see the **Fabric data agent (2)** listed among the agents connected to the custom AI agent.

    ![quota-check-output](../Images/lab2-28.png)

1. Select the connected Fabric data agent. Under Additional details, you can optionally choose the authentication method for the Fabric data agent as either **End-user credentials** or **Maker-provided credentials**. If you select **End-user credentials**, ensure that users have the required access to the Fabric data agent and its underlying data sources.

    ![quota-check-output](../Images/lab2-29.png)

1. Verify that generative AI orchestration is enabled. To do this, select **Settings** at the top of the chat pane, then under Orchestration, choose the **Yes - Responses will be dynamic, using available tools and knowledge as appropriate** option.

    ![quota-check-output](../Images/lab2-30.png)

    ![quota-check-output](../Images/lab2-19.png)

1. Scroll down to the **Knowledge** section and turn off **Use general knowledge (1)** then choose **Save (2)**.

    ![quota-check-output](../Images/lab2-20.png)

1. Use the **Test** chat pane available on the right-hand side to interact with the agent by asking sample questions. Review the responses to verify that the custom AI agent is correctly engaging the connected Fabric data agents and refine its behavior as needed.

    ![quota-check-output](../Images/lab2-41.png)

1. To make the custom AI agent available, select **Publish (1)** from the top-right corner. When the **Publish this agent** dialog appears, confirm by selecting **Publish (2)**.

    ![quota-check-output](../Images/lab2-21.png)

1. Next, go to **Channels (1)** and choose the appropriate consumption channel. To publish the agent to Teams, select **Teams and Microsoft 365 Copilot (2)** from the available channel options.

    ![quota-check-output](../Images/lab2-24.png)

1. This opens the **Teams and Microsoft 365 Copilot** window. Select **Add channel** to enable and configure this channel.

    ![quota-check-output](../Images/lab2-31.png)

1. After completing the setup, you will see the **The channel was added** message at the top, and the **See agent in Teams** option will become active. Select **See agent in Teams** to open the agent in Microsoft Teams.

    ![quota-check-output](../Images/lab2-32.png)

1. When the browser displays the **Open Microsoft Teams?** pop-up, select **Cancel (1)**, then choose **Use the web app instead (2).**

    ![quota-check-output](../Images/lab2-33.png)

    > **Note:** If the **Open Microsoft Teams?** pop up doesn’t appear, simply select **Use the web app instead** directly.

1. In the Teams web app, select **Get Started** from the **Get to know Teams** pop-up window.

    ![quota-check-output](../Images/lab2-34.png)

1. If the QR code pop-up window appears, close it.

    ![quota-check-output](../Images/lab2-35.png)

1. You will see the **Adventure Work Sales Agent** pop-up window. Wait for the Add button to appear, then select **Add**.

    ![quota-check-output](../Images/lab2-36.png)

1. You will see a confirmation that the agent has been added successfully. In the new pop-up window, select **Open** to continue.

    ![quota-check-output](../Images/lab2-37.png)

1. This will launch Microsoft Teams, where you can interact with the custom AI agent by asking questions and receiving responses.

1. In the **Adventure Work Sales Agent** agent chat window, type anything to get started, you will notice it will ask to Allow the fabric data agent to connect, choose **Allow**.

    ![quota-check-output](../Images/lab2-38.png)

1. You can now start interacting with the agent by asking questions, for example: **Provide me the total number of customers.**

    ![quota-check-output](../Images/lab2-39.png)

1. Try one more prompt to validate the agent, for example: **Provide me the total number of orders in the last 6 months by region.**

    ![quota-check-output](../Images/lab2-40.png)

## Summary

In this lab, you have completed:

- Created and configured a Microsoft Fabric Data Agent
- Implement and Validate an End-to-End Copilot Agent with Fabric Data Agent Integration

## You have successfully completed the lab.