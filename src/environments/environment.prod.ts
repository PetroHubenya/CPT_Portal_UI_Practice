export const environment = {
  production: true,
  apiUrl: 'https://cptportalprodapi-ercsb7h8bwatdead.canadacentral-01.azurewebsites.net/api/',
  azure: {
    scopes: [
      'https://managedbyparabellyxprod.onmicrosoft.com/7dccfa97-9981-45cc-8148-9f20bbf9ead1/user_impersonation',
    ],
    clientID: '7dccfa97-9981-45cc-8148-9f20bbf9ead1',
    domain: 'managedbyparabellyxprod.b2clogin.com',
    authFlowLink: 'https://managedbyparabellyxprod.b2clogin.com/managedbyparabellyxprod.onmicrosoft.com/B2C_1_signin',
    authFLowName: 'B2C_1_signin',
    changePasswordFlowName: 'B2C_1_reset_password',
    changePasswordFlowLink: 'https://managedbyparabellyxprod.b2clogin.com/managedbyparabellyxprod.onmicrosoft.com/B2C_1_reset_password',
  }
};
