# Chat with your data Fabric

## Overall Estimated Duration: 4 Hours


## 🎯 Lab Scenario

**Contoso Retail** is experiencing challenges in analyzing customer and sales performance data spread across multiple disconnected systems. **Sales analysts**, currently spend significant time collecting, consolidating, and validating data before meaningful insights can be generated.

To address this challenge, the organization implements the **Agentic Applications for Unified Data Foundation Solution Accelerator using Microsoft Fabric** and **Azure AI Foundry**. The solution unifies enterprise data into a governed data foundation and enables AI-powered agents to interact with business data using natural language queries.

Using the solution, analysts can:

* Query enterprise sales data conversationally.
* Identify top-performing products and customer segments.
* Analyze revenue growth trends across demographics.
* Generate contextual business insights faster.
* Reduce dependency on manual data consolidation.


## 📖 Overview

In this **Chat with your data Fabric** hands-on lab, you will explore how to design and deploy agentic **AI applications using Microsoft’s Unified Data Foundation (UDF)** solution accelerator. The lab guides you through combining Microsoft Fabric, Azure AI, containerized microservices, and orchestration workflows to build intelligent, production-ready agentic solutions.

By the end of the workshop, you will gain a clear understanding of how structured data, enterprise analytics, and LLM-powered agents come together to enable next-generation enterprise applications.

## 🎯 Objectives

- **Building and Deploying a Fabric-Integrated AI Application on Azure :** In this hands-on lab, participants will provision and configure Microsoft Fabric for Copilot and data agents, deploy Azure infrastructure using Bicep and Azure Developer CLI, set up application authentication, and validate an end-to-end solution by querying and visualizing data through natural language interactions.

- **Creating Fabric Data Agent and Publish to Teams :** In this hands-on lab, participants will learn how to create a Microsoft Fabric Data Agent connected to a Lakehouse, build and configure a custom AI agent in Microsoft Copilot Studio, integrate both agents, and publish the solution to Microsoft Teams to enable natural language, data-driven business insights.


## ⚙️ Prerequisites

Participants should have:

- A basic understanding of Microsoft Azure and resource groups
- Familiarity with Microsoft Fabric, especially workspaces, capacities, and Lakehouse concepts
- Awareness of Copilot and AI features in Microsoft Fabric, including data agents and natural language querying
- Basic knowledge of command-line tools, including Azure CLI and Azure Developer CLI (azd)
- Familiarity with GitHub and GitHub Codespaces for source control and cloud-based development environments

## 🏗️ Architecture

This lab showcases an end-to-end agentic AI solution using **Microsoft Fabric** and **Copilot Studio** for conversational data insights. Enterprise data is stored in OneLake and exposed through a Fabric SQL Database, enabling a Fabric Data Agent for governed access. The agent is integrated with Copilot Studio to deliver insights via Microsoft Teams, while a custom agent backend using Azure App Service and Microsoft Agent Framework supports web-based interactions. This architecture demonstrates secure, scalable, multi-channel AI-driven analytics.

## 🖼️ Architecture Diagram

![](../Images/solution-architecture-cps.png)

![](../Images/solution-architecture.png)

## ⚙️ Explanation of Core Components

- **Microsoft Fabric**:  Serves as the unified data platform for storing, managing, and analyzing enterprise data.

- **OneLake(unified data foundation)**: Provides centralized storage for transaction, product, and customer data.

- **SQL Database in Fabric**: Stores structured business data used for reporting and AI-driven analysis.

- **Fabric Data Agent / AI Agents**: Enables users to interact with enterprise data using natural language queries.

- **Microsoft Copilot Studio / Microsoft Foundry**: Used to create, configure, and manage AI-powered copilots and agents.

- **API App Service**: Handles communication between the web application and backend AI services.

- **Microsoft Agent Framework**: Coordinates agent workflows and orchestration between connected services.

- **Container Registry**: Stores container images required for application deployment.

- **App Service**: Hosts the application backend and supporting services.

- **Web Front-End**: Provides the user interface for exploring insights and interacting with the solution.

- **Microsoft Teams**: Allows users to access copilots and enterprise insights directly from Teams.


## 🚀 Getting Started with the lab

Welcome to your Chat with your data Fabric Workshop. Let's begin by making the most of this experience.

## 💻 Accessing Your Lab Environment

Once the lab environment is ready, the virtual machine displayed on the left will be your primary workspace for completing the exercises, while the **Guide** on the right side provides step-by-step instructions for each task.

![](../Images/march-update-lab1-1.png)


##  Lab Guide Zoom In/Zoom Out

To adjust the zoom level for the environment page, click the **A↕ : 100%** icon located next to the timer in the lab environment.

![](../Images/zoom2.png)


## Exploring Your Lab Resources

To get a better understanding of your lab resources and credentials, navigate to the **Environment** tab.

![](../Images/env.png)

## Utilizing the Split Window Feature

For convenience, you can open the lab guide in a separate window by selecting the **Split Window** button from the Top right corner.

![](../Images/split.png)

## Managing Your Virtual Machine

Feel free to **Start, Stop, or Restart (2)** your virtual machine as needed from the **Resources (1)** tab. Your experience is in your hands!

![](../Images/res.png)

## ☁️ Let's Get Started with Azure Portal

1. On your virtual machine, click on the **Azure Portal** icon.

    ![](../Images/azureportal.png)

1. You'll see the **Sign into Microsoft Azure** tab. Here, enter your credentials:

   - **Email/Username:** <inject key="AzureAdUserEmail"></inject>

     ![](../Images/signin.png)

1. Next, provide your Temporary Access Pass:

   - **Temporary Access Pass:** <inject key="AzureAdUserPassword"></inject>

     ![](../Images/TAP.png)

1. If prompted to stay signed in, you can click **Yes**.

   ![Stay Signed in](../Images/stay1.png)     

1. If a **Welcome to Microsoft Azure** pop-up window appears, simply click **Cancel** to skip the tour.

   ![Stay Signed in](../Images/03.png)   

1. If the **Welcome to Microsoft Teams!** window appears, close it to proceed.

   ![Stay Signed in](../Images/march-update-lab1-13.png)

## Support Contact

The CloudLabs support team is available 24/7, 365 days a year, via email and live chat to ensure seamless assistance at any time. We offer dedicated support channels tailored specifically for both learners and instructors, ensuring that all your needs are promptly and efficiently addressed.

Learner Support Contacts:

- Email Support: [cloudlabs-support@spektrasystems.com](mailto:cloudlabs-support@spektrasystems.com)
- Live Chat Support: https://cloudlabs.ai/labs-support

Click **Next** from the bottom right corner to embark on your Lab journey!

![](../Images/nextpage.png)

Now you're all set to explore the powerful world of technology. Feel free to reach out if you have any questions along the way. Enjoy your workshop!