metadata description = 'Creates an Azure App Service plan.'

@description('Solution Location')
param solutionLocation string

@description('Name of App Service plan')
param HostingPlanName string 

@description('The pricing tier for the App Service plan')
@allowed(
  ['F1', 'P1v4', 'D1', 'B1', 'B2', 'B3', 'S1', 'S2', 'S3', 'P1', 'P2', 'P3', 'P4','P0v4']
)
param HostingPlanSku string = 'P0v4'

resource HostingPlan 'Microsoft.Web/serverfarms@2020-06-01' = {
  name: HostingPlanName
  location: solutionLocation
  sku: {
    name: HostingPlanSku
  }
  properties: {
    reserved: true
  }
  kind: 'linux'
}

output id string = HostingPlan.id
output name string = HostingPlan.name
