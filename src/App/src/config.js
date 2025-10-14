// Global configuration object to store fetched config
let globalConfig = null;

// Helper to safely read runtime config
function getRuntimeConfigValue(runtimeKey, envKey, defaultValue) {
  return (
    globalConfig?.[runtimeKey] ||     // Backend config (highest priority)
    window._env_?.[runtimeKey] ||     // runtime-config.js
    process.env[envKey] ||            // .env fallback
    defaultValue                      // default fallback
  );
}

// Function to fetch configuration from backend /config endpoint
export async function fetchConfigFromBackend() {
  try {
    // For the initial config fetch, try multiple possible backend URLs
    const possibleUrls = [
      window._env_?.REACT_APP_API_BASE_URL,  // runtime-config.js
      process.env.REACT_APP_API_BASE_URL,    // build-time env
      window.location.origin,                 // same origin (for Azure App Service)
      "http://127.0.0.1:8000"                // local development fallback
    ].filter(Boolean); // Remove any null/undefined values
    
    for (const baseUrl of possibleUrls) {
      try {
        console.log('🔗 Attempting to fetch config from:', `${baseUrl}/config`);
        
        const response = await fetch(`${baseUrl}/config`);
        
        if (response.ok) {
          const config = await response.json();
          globalConfig = config;
          console.log('✅ Configuration loaded from backend /config endpoint:', config);
          console.log('🎯 API_URL from Azure App Service:', config.API_URL || config.REACT_APP_API_BASE_URL);
          return config;
        } else {
          console.warn('⚠️ Backend /config endpoint returned error status:', response.status, 'trying next URL...');
        }
      } catch (urlError) {
        console.warn('⚠️ Failed to fetch from:', baseUrl, urlError.message);
      }
    }
    
    console.warn('⚠️ All backend URLs failed, using fallback configuration');
    return null;
  } catch (error) {
    console.warn('⚠️ Failed to fetch backend config:', error.message, '- using fallback configuration');
    return null;
  }
}

// Export a function to get API base URL at runtime
export function getApiBaseUrl() {
  // Priority: Backend config -> runtime-config.js -> .env -> fallback
  return globalConfig?.API_URL || 
         globalConfig?.REACT_APP_API_BASE_URL || 
         getRuntimeConfigValue("API_URL", "REACT_APP_API_BASE_URL", "http://127.0.0.1:8000");
}

// Export a function to get chat landing text at runtime
export function getChatLandingText() {
  return getRuntimeConfigValue(
    "CHAT_LANDING_TEXT",
    "REACT_APP_CHAT_LANDING_TEXT",
    "You can ask questions around sales, products and orders."
  );
}

// // Export functions to get authentication configuration
// export function getMsalClientId() {
//   return getRuntimeConfigValue("REACT_APP_MSAL_AUTH_CLIENTID", "REACT_APP_MSAL_AUTH_CLIENTID", "");
// }

// export function getMsalAuthority() {
//   return getRuntimeConfigValue("REACT_APP_MSAL_AUTH_AUTHORITY", "REACT_APP_MSAL_AUTH_AUTHORITY", "");
// }

// export function getMsalRedirectUrl() {
//   return getRuntimeConfigValue("REACT_APP_MSAL_REDIRECT_URL", "REACT_APP_MSAL_REDIRECT_URL", "");
// }

// export function getMsalPostRedirectUrl() {
//   return getRuntimeConfigValue("REACT_APP_MSAL_POST_REDIRECT_URL", "REACT_APP_MSAL_POST_REDIRECT_URL", "");
// }

// export function getMsalWebScope() {
//   return getRuntimeConfigValue("REACT_APP_WEB_SCOPE", "REACT_APP_WEB_SCOPE", "");
// }

// export function getMsalApiScope() {
//   return getRuntimeConfigValue("REACT_APP_API_SCOPE", "REACT_APP_API_SCOPE", "");
// }

// export function getEnableAuth() {
//   const value = getRuntimeConfigValue("ENABLE_AUTH", "ENABLE_AUTH", "false");
//   return value === "true" || value === true;
// }

// Export the global config for external access
export function getGlobalConfig() {
  return globalConfig;
}